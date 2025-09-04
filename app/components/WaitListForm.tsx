"use client";

import { useFormState, useFormStatus } from "react-dom";
import { joinWaitlist, WaitlistResult } from "@/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-soft hover:brightness-95 disabled:opacity-60"
    >
      {pending ? "Joining…" : "Join the waitlist"}
    </button>
  );
}

const initialState: WaitlistResult = { ok: false, message: "", fieldErrors: [] };

export default function WaitlistForm() {
  const [state, formAction] = useFormState(joinWaitlist, initialState);

  return (
    <section id="waitlist" className="py-12">
      <div className="mx-auto grid max-w-content gap-8 px-4 md:grid-cols-2">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold">Get early access</h2>
          <p className="mt-2 text-muted">
            <strong>Early-bird bonus:</strong> The first 1,000 people on the waitlist get{" "}
            <strong>100 points</strong> at launch.
          </p>

          <form action={formAction} className="mt-6 grid gap-4 max-w-lg">
            {/* Honeypot (hidden) */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            {/* Include user agent (optional) */}
            <input type="hidden" name="userAgent" value={typeof navigator !== "undefined" ? navigator.userAgent : ""} />

            <div>
              <label htmlFor="name" className="text-sm font-semibold">Full name</label>
              <input id="name" name="name" required placeholder="Julia I."
                     className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3" />
              {state?.fieldErrors?.name && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@email.com"
                     className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3" />
              {state?.fieldErrors?.email && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.email}</p>}
            </div>

            <div className="grid grid-cols-[1fr,120px] gap-4">
              <div>
                <label htmlFor="city" className="text-sm font-semibold">City</label>
                <input id="city" name="city" required placeholder="Miami"
                       className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3" />
                {state?.fieldErrors?.city && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.city}</p>}
              </div>
              <div>
                <label htmlFor="state" className="text-sm font-semibold">State</label>
                <input id="state" name="state" required placeholder="FL"
                       className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3" />
                {state?.fieldErrors?.state && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.state}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="pettype" className="text-sm font-semibold">Pet type</label>
              <select id="pettype" name="pettype" required defaultValue=""
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3">
                <option value="" disabled>Choose one</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Both</option>
              </select>
              {state?.fieldErrors?.pettype && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.pettype}</p>}
            </div>

            <div>
              <label htmlFor="ref" className="text-sm font-semibold">How did you hear about us? (optional)</label>
              <input id="ref" name="ref" placeholder="Nextdoor, friend, IG…"
                     className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3" />
            </div>

            <div className="flex items-start gap-2">
              <input id="agree" name="agree" type="checkbox" required className="mt-1" />
              <label htmlFor="agree" className="text-sm">I agree to the community rules and ID verification.</label>
              {state?.fieldErrors?.agree && <p className="text-sm text-red-600 mt-1">{state.fieldErrors.agree}</p>}
            </div>

            <SubmitButton />

            <small className="text-muted mt-1 block text-xs">
              Offer limited to first 1,000 valid signups. Points credited at launch after ID verification. One per person. No cash value.
            </small>

            {state?.ok && <p className="mt-2 text-sm text-green-600">You’re on the list! We’ll email you when your city goes live.</p>}
            {!state?.ok && "message" in (state ?? {}) && state.message && (
              <p className="mt-2 text-sm text-red-600">{state.message}</p>
            )}
          </form>
        </div>

        {/* Right-hand “Why PetSwap?” card stays the same */}
        {/* ... */}
      </div>
    </section>
  );
}
