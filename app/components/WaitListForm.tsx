'use client'

import { useState } from 'react'

export default function WaitListForm() {
  const [ok, setOk] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOk(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-[560px]">
      <div>
        <label htmlFor="name" className="font-semibold text-sm">Full name</label>
        <input id="name" name="name" required placeholder="Julia I."
          className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3" />
      </div>

      <div>
        <label htmlFor="email" className="font-semibold text-sm">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com"
          className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3" />
      </div>

      <div className="grid gap-3 [grid-template-columns:1fr_120px]">
        <div>
          <label htmlFor="city" className="font-semibold text-sm">City</label>
          <input id="city" name="city" required placeholder="Miami"
            className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3" />
        </div>
        <div>
          <label htmlFor="state" className="font-semibold text-sm">State</label>
          <input id="state" name="state" required placeholder="FL"
            className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3" />
        </div>
      </div>

      <div>
        <label htmlFor="pettype" className="font-semibold text-sm">Pet type</label>
        <select id="pettype" name="pettype" required
          className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3">
          <option value="" disabled selected>Choose one</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Both</option>
        </select>
      </div>

      <div>
        <label htmlFor="ref" className="font-semibold text-sm">
          How did you hear about us? (optional)
        </label>
        <input id="ref" name="ref" placeholder="Nextdoor, friend, IG…"
          className="w-full rounded-lg border border-[#d8e6df] bg-white px-3 py-3" />
      </div>

      <label className="flex gap-3 items-start text-sm">
        <input type="checkbox" id="agree" required className="mt-1" />
        <span>I agree to the community rules and ID verification.</span>
      </label>

      <button className="btn" type="submit">Join the waitlist</button>

      <small className="text-muted block mt-1">
        Offer limited to first 1,000 valid signups. Points credited at launch after ID verification.
        One per person. No cash value.
      </small>

      {ok && (
        <p aria-live="polite" className="text-muted mt-2">
          You’re on the list! We’ll email you when your city goes live.
        </p>
      )}
    </form>
  )
}