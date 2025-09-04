export default function Safety() {
  const items = [
    "ID verification required for all members",
    "Optional insurance per swap",
    "Meet-and-greet before your first sit",
    "Simple house & pet checklists",
    "Ratings and reviews after each swap",
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
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
