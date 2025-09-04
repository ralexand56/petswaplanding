"use client";

import { useState } from "react";

export default function WaitListForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-lg">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Julia I."
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
              />
            </div>

            <div className="grid grid-cols-[1fr,120px] gap-4">
              <div>
                <label htmlFor="city" className="text-sm font-semibold">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  required
                  placeholder="Miami"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
                />
              </div>
              <div>
                <label htmlFor="state" className="text-sm font-semibold">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  required
                  placeholder="FL"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pettype" className="text-sm font-semibold">
                Pet type
              </label>
              <select
                id="pettype"
                name="pettype"
                required
                defaultValue=""
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Both</option>
              </select>
            </div>

            <div>
              <label htmlFor="ref" className="text-sm font-semibold">
                How did you hear about us? (optional)
              </label>
              <input
                id="ref"
                name="ref"
                placeholder="Nextdoor, friend, IG…"
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3"
              />
            </div>

            <div className="flex items-start gap-2">
              <input id="agree" type="checkbox" required className="mt-1" />
              <label htmlFor="agree" className="text-sm">
                I agree to the community rules and ID verification.
              </label>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-soft hover:brightness-95"
            >
              Join the waitlist
            </button>

            <small className="text-muted mt-1 block text-xs">
              Offer limited to first 1,000 valid signups. Points credited at launch after ID
              verification. One per person. No cash value.
            </small>

            {submitted && (
              <p className="mt-2 text-sm text-muted">
                You’re on the list! We’ll email you when your city goes live.
              </p>
            )}
          </form>
        </div>

        {/* Why PetSwap card */}
        <div className="rounded-xl bg-card p-6 shadow-soft">
          <h2 className="text-3xl font-bold">Why PetSwap?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#f8fbf9] p-4">
              <strong>Save big vs. boarding</strong>
              <p className="text-muted">Swap time, not dollars. Use points instead of cash.</p>
            </div>
            <div className="rounded-xl bg-[#f8fbf9] p-4">
              <strong>Real neighbors, real trust</strong>
              <p className="text-muted">Every member completes ID verification.</p>
            </div>
            <div className="rounded-xl bg-[#f8fbf9] p-4">
              <strong>Flexible points system</strong>
              <p className="text-muted">
                Earn points for hosting or walks; spend them when you need care.
              </p>
            </div>
            <div className="rounded-xl bg-[#f8fbf9] p-4">
              <strong>Peace of mind</strong>
              <p className="text-muted">
                Optional insurance per swap, plus meet-and-greet before first sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
