"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

/** A single, consistent state shape for useFormState */
export type ActionState = {
  ok: boolean;
  message?: string; // present on error or success (optional)
  fieldErrors?: Record<string, string>; // keyed by field name
};

const Waitlist = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email."),
  city: z.string().optional().nullable(),
  state: z.string().max(2, "Use 2-letter state code."),
  zip: z.string().optional().nullable(),
  petType: z.enum(["Dog", "Cat", "Other"], { message: "Choose a pet type." }),
  other: z.string().max(100).optional().nullable(),
  referral: z.string().optional().nullable(),
  hp: z.string().max(0).optional(),
}).superRefine((data, ctx) => {
  if (data.petType === "Other" && !data.other) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["other"],
      message: "Please specify your pet type.",
    });
  }
});

function toFieldErrors(err: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  const flat = err.flatten().fieldErrors as Record<string, string[]>;
  for (const [key, msgs] of Object.entries(flat)) {
    if (msgs?.[0]) out[key] = msgs[0]!;
  }
  return out;
}

export async function joinWaitlist(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
   // Normalize inputs
  const rawEmail = String(formData.get("email") || "");
  const normalizedEmail = rawEmail.trim().toLowerCase(); // ← key line

  // read form
  const data = {
    name: formData.get("name"),
    email: normalizedEmail,
    city: formData.get("city"),
    state: String(formData.get("state") || "").toUpperCase(),
    petType: formData.get("petType"),
    other: formData.get("other"),
    ref: formData.get("ref") || null,
    hp: formData.get("website") || "",
  };

  const parsed = Waitlist.safeParse(data);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }
  // bot: silently accept
  if (parsed.data.hp) return { ok: true, message: "Thanks! (bot check)" };

  // ensure table
  // await sql`
  //   CREATE TABLE IF NOT EXISTS waitlist (
  //     id BIGSERIAL PRIMARY KEY,
  //     name TEXT NOT NULL,
  //     email TEXT NOT NULL UNIQUE,
  //     city TEXT NOT NULL,
  //     state TEXT NOT NULL,
  //     petType TEXT NOT NULL,
  //     ref TEXT,
  //     agreed BOOLEAN NOT NULL DEFAULT FALSE,
  //     user_agent TEXT,
  //     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  //   )
  // `;

  try {
    const userAgent = (formData.get("userAgent") as string) || null;
    const res = await sql`
      INSERT INTO waitlist (
        name, 
        email, 
        city, 
        state, 
        zip, 
        "pet-type", 
        referral, 
        "user-agent"
        )
      VALUES (
        ${parsed.data.name}, 
        ${parsed.data.email}, 
        ${parsed.data.city},  
        ${parsed.data.state},
        ${parsed.data.zip},
        ${parsed.data.petType === "Other" ? parsed.data.other : parsed.data.petType}, 
        ${parsed.data.referral}, 
        ${userAgent})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    // If no row was inserted, it's almost certainly a duplicate email
    if (res.rowCount === 0) {
      return {
        ok: false,
        message: "That email is already on the waitlist.",
        fieldErrors: { email: "This email is already registered." },
      };
    }

    return {
      ok: true,
      message: "You’re on the list! We’ll email you when your city goes live.",
    };
  } catch (e: unknown) {
    // Extra safety for unique-violation race conditions
    const err = e as { code?: string; message?: string };
    if (err?.code === "23505") {
      return {
        ok: false,
        message: "That email is already on the waitlist.",
        fieldErrors: { email: "This email is already registered." },
      };
    }

    return {
      ok: false,
      message: "We couldn’t save your signup right now. Please try again.",
    };
  }
}
