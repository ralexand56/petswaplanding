import Image from "next/image";
import WaitListForm from "./components/WaitListForm"

export default function Page() {
  return (
    <main>
      {/* Announcement Bar */}
      <div className="bg-brand text-white">
        <div className="container flex items-center justify-center gap-4 py-2.5">
          <div>🎉 Early birds: First 1,000 on the waitlist get 100 points.</div>
          <a href="#waitlist" className="btn btn-secondary">
            Join now
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="py-9">
        <div className="container grid items-center gap-7 md:[grid-template-columns:1.1fr_0.9fr]">
          <div>
            <div className="text-brandDark font-extrabold text-[20px] tracking-wide">
              ThePetSwap
            </div>
            <div className="eyebrow mt-2">Community pet care</div>
            <h1 className="mt-2 text-[clamp(32px,5vw,54px)] leading-[1.05] font-extrabold">
              Swap care, not cash
            </h1>
            <p className="subhead mt-2 text-[clamp(16px,2.4vw,20px)]">
              Pet parents in <strong>major US cities</strong> trade sitting and
              walks with verified neighbors. Earn points when you help, spend
              them when you need a hand.
            </p>
            <div className="badge mt-3">
              ⭐ First 1,000 on the waitlist get 100 points
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn" href="#waitlist">
                Join the waitlist
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                How it works
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-muted">
              <div className="pill">ID-verified members</div>
              <div className="pill">Optional insurance per swap</div>
              <div className="pill">Dogs &amp; cats</div>
              <div className="pill">1,000+ members on Nextdoor</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <Image
              src="/images/petswap-hero.jpeg"
              alt="Two neighbors meeting with their dogs for a PetSwap hand-off"
              width={1200}
              height={900}
              priority
            />
          </div>
        </div>
      </header>

      {/* Social Proof Strip */}
      <div className="border-y border-[#e8efe9] bg-white">
        <div className="container text-center font-semibold text-brandDark py-3.5">
          Trusted by 1,000+ neighbors on Nextdoor — now growing across major US
          cities.
        </div>
      </div>

      {/* Waitlist */}
      <section id="waitlist" className="py-12">
        <div className="container grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
              Get early access
            </h2>
            <p className="text-muted">
              <strong>Early-bird bonus:</strong> The first 1,000 people on the
              waitlist get <strong>100 points</strong> at launch.
            </p>
            <div className="mt-4">
              <WaitListForm />
            </div>
          </div>

          <div className="card">
            <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
              Why PetSwap?
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="card bg-[#f8fbf9] shadow-none">
                <strong>Save big vs. boarding</strong>
                <p className="text-muted">
                  Swap time, not dollars. Use points instead of cash.
                </p>
              </div>
              <div className="card bg-[#f8fbf9] shadow-none">
                <strong>Real neighbors, real trust</strong>
                <p className="text-muted">
                  Every member completes ID verification.
                </p>
              </div>
              <div className="card bg-[#f8fbf9] shadow-none">
                <strong>Flexible points system</strong>
                <p className="text-muted">
                  Earn points for hosting or walks; spend them when you need
                  care.
                </p>
              </div>
              <div className="card bg-[#f8fbf9] shadow-none">
                <strong>Peace of mind</strong>
                <p className="text-muted">
                  Optional insurance per swap, plus meet-and-greet before first
                  sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12">
        <div className="container">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-4">
            How it works
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["1", "Create your profile", "Quick signup + ID check."],
              ["2", "Add your pets", "Routines, notes, meds, quirks."],
              ["3", "Earn points", "Host a pet or do walks."],
              [
                "4",
                "Spend points",
                "Book care when you travel or need a break.",
              ],
            ].map(([n, title, sub]) => (
              <div key={n} className="flex items-start gap-4 card">
                <div className="w-8 h-8 rounded-full bg-brand text-white grid place-items-center font-extrabold">
                  {n}
                </div>
                <div>
                  <strong>{title}</strong>
                  <div className="text-muted">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-12">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
              Built by neighbors
            </h2>
            <p>
              We already run an active{" "}
              <strong>Nextdoor group with 1,000+ members</strong>—swaps, walks,
              and meet-ups happen every week. Join the waitlist to get matched
              in your city.
            </p>
            <p className="mt-3">
              <a
                className="btn btn-secondary"
                href="YOUR_NEXTDOOR_URL"
                target="_blank"
                rel="noopener"
              >
                See the group
              </a>
            </p>
          </div>
          <div className="card">
            <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
              Why we started this
            </h2>
            <p>
              On a Hawaii trip, a neighbor watched our French Bulldog, and later
              we watched their dog in return. It felt fair, friendly, and way
              cheaper than a pet hotel. That’s ThePetSwap—community over fees.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & trust */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
            Safety &amp; trust
          </h2>
          <ul className="grid gap-2 list-none pl-0">
            {[
              "ID verification required for all members",
              "Optional insurance per swap",
              "Meet-and-greet before your first sit",
              "Simple house & pet checklists",
              "Ratings and reviews after each swap",
            ].map((txt) => (
              <li
                key={txt}
                className="text-muted before:content-['•'] before:text-brand before:font-extrabold before:mr-2"
              >
                {txt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3">
            FAQ
          </h2>

          {[
            [
              "Do you already have a community?",
              "Yes—our Nextdoor group has 1,000+ members and counting.",
            ],
            [
              "Where do you launch?",
              "We’re rolling out across major US cities. Join the waitlist with your city and we’ll match you locally as groups go live.",
            ],
            [
              "Do I really get 100 points?",
              "Yes—if you’re among the first 1,000 on the waitlist. Points are credited at launch after ID verification. One bonus per person.",
            ],
            [
              "How do points work?",
              "Earn points by hosting or doing walks. Spend points when you need care. Track your balance in your profile.",
            ],
            [
              "Is insurance required?",
              "It’s optional—add it per swap for extra peace of mind.",
            ],
            ["Is it only dogs?", "Dogs and cats to start."],
          ].map(([q, a]) => (
            <details key={q} className="card rounded-md">
              <summary className="cursor-pointer font-bold">{q}</summary>
              <div className="text-muted mt-2">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="container text-center card">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold">
            Ready to swap care, not cash?
          </h2>
          <p className="text-muted mt-1">
            Join the waitlist and grab your 100-point bonus.
          </p>
          <p className="mt-3">
            <a className="btn" href="#waitlist">
              Join the waitlist
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-muted">
        <div className="container flex flex-wrap justify-between gap-3">
          <div>©️ ThePetSwap. All rights reserved.</div>
          <nav className="flex gap-4">
            <a href="#" className="text-brandDark">
              Privacy
            </a>
            <a href="#" className="text-brandDark">
              Terms
            </a>
            <a href="#" className="text-brandDark">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
