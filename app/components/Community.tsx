export default function Community() {
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-content gap-6 px-4 md:grid-cols-2">
        {/* Built by neighbors */}
        <div className="rounded-xl bg-card p-6 shadow-soft">
          <h2 className="text-3xl font-bold">Built by neighbors</h2>
          <p className="mt-3">
            We already run an active{" "}
            <strong>Nextdoor group with 1,000+ members</strong>. Swaps, walks,
            and meet-ups happen every week. Join the waitlist to get matched in
            your city.
          </p>
          <p className="mt-4">
            <a
              href="https://nextdoor.com/g/2reim8hzi?share_platform=10&utm_campaign=1758060868551&share_action_id=50997413-d04a-47ed-8938-50b62c7d804f"
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
            I started ThePetSwap because every trip brought the same struggle:
            who will care for our pet? Boarding was pricey, sitters also costly.
            Then I realized so many pet owners face the same problem. What if we
            simply helped each other?
            That’s how ThePetSwap was born — not just an app, but a community
            built on trust, kindness, and the love we all share for our furry
            family.
          </p>
        </div>
      </div>
    </section>
  );
}
