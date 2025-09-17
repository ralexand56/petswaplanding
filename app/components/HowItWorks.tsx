export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Create your profile", desc: "Sign up in minutes, verify your ID for safety, and build trust from the start." },
    { num: 2, title: "Add your pets", desc: "Share vaccination records, routines, notes, and quirks to keep everyone safe and comfortable." },
    { num: 3, title: "Earn points", desc: "Host a pet or help with walks. Every good care earns you points." },
    { num: 4, title: "Spend points", desc: "Use your points to book trusted pet care whenever you travel or need a break." },
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
