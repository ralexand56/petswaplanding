export default function Safety() {
  const items = [
    {
      main: "Verified members — every member completes an ID check",
    },
    {
      main: "Healthy pets only — vaccination records must be uploaded before your first swap",
      sub: ["Dogs: Rabies + DHPP", "Cats: Rabies + FVRCP"],
    },
    { main: "Optional insurance — add extra peace of mind to any swap" },
    { main: "Build connections — meet-and-greets encouraged before sitting" },
    {
      main: "Clarity & care — simple checklists for house rules and pet routines",
    },
    {
      main: "Trusted community — ratings, reviews, and accountability after every swap",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-3xl font-bold">Safety & trust</h2>
        <ul className="mt-4 grid gap-2 list-none p-0">
          {items.map((item, i) => (
            <li key={i} className="relative pl-5 text-ink">
              <span className="absolute left-0 text-brand font-extrabold">
                •
              </span>
              {item.main}
              {item.sub && (
                <ul className="mt-1 list-disc pl-5">
                  {item.sub.map((subItem, j) => (
                    <li key={j}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
