export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Create your profile", desc: "Quick signup + ID check." },
    { num: 2, title: "Add your pets", desc: "Routines, notes, meds, quirks." },
    { num: 3, title: "Earn points", desc: "Host a pet or do walks." },
    { num: 4, title: "Spend points", desc: "Book care when you travel or need a break." },
  ];

  return (
    <section id="how-it-works" className="py-12">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-3xl font-bold">How it works</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-soft"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand font-extrabold text-white">
                {step.num}
              </div>
              <div>
                <strong>{step.title}</strong>
                <div className="text-muted">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
