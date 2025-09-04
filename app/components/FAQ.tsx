export default function FAQ() {
  const faqs = [
    {
      q: "Do you already have a community?",
      a: "Yes—our Nextdoor group has 1,000+ members and counting.",
    },
    {
      q: "Where do you launch?",
      a: "We’re rolling out across major US cities. Join the waitlist with your city and we’ll match you locally as groups go live.",
    },
    {
      q: "Do I really get 100 points?",
      a: "Yes—if you’re among the first 1,000 on the waitlist. Points are credited at launch after ID verification. One bonus per person.",
    },
    {
      q: "How do points work?",
      a: "Earn points by hosting or doing walks. Spend points when you need care. Track your balance in your profile.",
    },
    {
      q: "Is insurance required?",
      a: "It’s optional—add it per swap for extra peace of mind.",
    },
    {
      q: "Is it only dogs?",
      a: "Dogs and cats to start.",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="rounded-lg bg-white p-4 shadow-soft [&_summary]:cursor-pointer [&_summary]:font-semibold"
            >
              <summary>{faq.q}</summary>
              <div className="mt-2 text-muted">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
