"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

// Schema validation (server-side, tamper-proof)
const Waitlist = z.object({
  name: z.string().min(2),
  email: z.email(),
  city: z.string().min(2),
  state: z.string().min(2).max(2), // "FL" style
  zip: z.string().max(10),
  petType: z.enum(["Dog", "Cat", "Other"]),
  referral: z.string().optional().nullable(),
  agree: z.literal("on"),           // checkbox returns "on" when checked
  hp: z.string().max(0).optional(), // honeypot should be empty
});

export type WaitlistResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

export async function joinWaitlist(_: unknown, formData: FormData): Promise<WaitlistResult> {
  // read form fields
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    city: formData.get("city"),
    state: String(formData.get("state") || "").toUpperCase(),
    zip: formData.get("zip"),
    petType: formData.get("petType"),
    referral: formData.get("referral") || null,
    agree: formData.get("agree"),
    hp: formData.get("website") || "", // honeypot
  };

  const parsed = Waitlist.safeParse(data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (v && v[0]) fieldErrors[k] = v[0];
    }
    return { ok: false, message: "Please fix the errors and try again.", fieldErrors };
  }

  // Basic bot filter
  if (parsed.data.hp && parsed.data.hp.length > 0) {
    return { ok: true }; // silently succeed for bots
  }

  // Create table if needed (safe to run each submit)
//   await sql`
//     CREATE TABLE IF NOT EXISTS waitlist (
//       id BIGSERIAL PRIMARY KEY,
//       name TEXT NOT NULL,
//       email TEXT NOT NULL,
//       city TEXT NOT NULL,
//       state TEXT NOT NULL,
//       pettype TEXT NOT NULL,
//       ref TEXT,
//       agreed BOOLEAN NOT NULL DEFAULT FALSE,
//       user_agent TEXT,
//       created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//       UNIQUE (email)
//     );
//   `;

  // Insert row (parameterized)
  try {
    const userAgent = (formData.get("userAgent") as string) || null;
    await sql`
      INSERT INTO waitlist (
        name, 
        email, 
        city, 
        state, 
        zip, 
        'pet-type', 
        referral, 
        user_agent
        )
      VALUES (
        ${parsed.data.name}, 
        ${parsed.data.email}, 
        ${parsed.data.city},  
        ${parsed.data.state},
        ${parsed.data.zip},
        ${parsed.data.petType}, 
        ${parsed.data.referral}, 
        ${userAgent})
      ON CONFLICT (email) DO NOTHING;
    `;
    return { ok: true };
  } catch {
    // Optionally check code for duplicate key, etc.
    return { ok: false, message: "Something went wrong saving your signup. Please try again." };
  }
}
