export default function Community() {
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-content gap-6 px-4 md:grid-cols-2">
        {/* Built by neighbors */}
        <div className="rounded-xl bg-card p-6 shadow-soft">
          <h2 className="text-3xl font-bold">Built by neighbors</h2>
          <p className="mt-3">
            We already run an active{" "}
            <strong>Nextdoor group with 1,000+ members</strong>—swaps, walks, and meet-ups happen
            every week. Join the waitlist to get matched in your city.
          </p>
          <p className="mt-4">
            <a
              href="YOUR_NEXTDOOR_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#eaf5f0] px-5 py-3 font-semibold text-brand shadow-soft hover:brightness-95"
            >
              See the group
            </a>
          </p>
        </div>

        {/* Why we started this */}
        <div className="rounded-xl bg-card p-6 shadow-soft">
          <h2 className="text-3xl font-bold">Why we started this</h2>
          <p className="mt-3">
            On a Hawaii trip, a neighbor watched our French Bulldog, and later we watched their dog
            in return. It felt fair, friendly, and way cheaper than a pet hotel. That’s ThePetSwap—
            community over fees.
          </p>
        </div>
      </div>
    </section>
  );
}
