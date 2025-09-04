import { sql } from "@vercel/postgres";
import Link from "next/link";

export const dynamic = "force-dynamic"; // admin pages shouldn't be cached

type Row = {
  id: string;
  name: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  pettype: string;
  referral: string | null;
  userAgent: string | null;
  created: string; // will come as string
};

type SearchParams = {
  page?: string;
  q?: string;
  pettype?: "Dog" | "Cat" | "Other";
  state?: string;
  sort?: "new" | "old" | "name" | "city";
};

const PAGE_SIZE = 20;

function buildOrderBy(sort?: string) {
  switch (sort) {
    case "old":
      return "ORDER BY created ASC";
    case "name":
      return "ORDER BY name ASC, created DESC";
    case "city":
      return "ORDER BY city ASC, created DESC";
    default:
      return "ORDER BY created DESC"; // "new"
  }
}

export default async function AdminWaitlistPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const page = Math.max(1, Number(searchParams.page ?? 1) || 1);
  const q = (searchParams.q ?? "").trim();
  const pettype = searchParams.pettype ?? "";
  const state = (searchParams.state ?? "").trim().toUpperCase();
  const sort = searchParams.sort ?? "new";

  const where: string[] = [];
  const params = [];
  let idx = 1;

  if (q) {
    where.push(
      `(name ILIKE $${idx} OR email ILIKE $${idx} OR city ILIKE $${idx} OR referral ILIKE $${idx})`
    );
    params.push(`%${q}%`);
    idx++;
  }
  if (pettype) {
    where.push(`"pet-type" = $${idx}`);
    params.push(pettype);
    idx++;
  }
  if (state) {
    where.push(`state = $${idx}`);
    params.push(state);
    idx++;
  }

  const whereSQL = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const orderSQL = buildOrderBy(sort);

  const offset = (page - 1) * PAGE_SIZE;

  const countQuery = `
    SELECT COUNT(*)::text as count FROM waitlist ${whereSQL}
  `;

  // total count
  const countRes = await sql.query(countQuery, params);

  // -- ${whereSQL}
  const total = Number(countRes.rows[0]?.count || 0);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const query = `
    SELECT id, name, email, city, state, "pet-type" as pettype, referral, "user-agent" as userAgent, created
    FROM waitlist 
    ${whereSQL}
    ${orderSQL}
    LIMIT ${PAGE_SIZE} OFFSET ${offset}
  `;

  // page rows
  const rowsRes = await sql.query(query, params);

  const rows = rowsRes.rows;

  const qp = (patch: Partial<SearchParams>) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (pettype) sp.set("pettype", pettype);
    if (state) sp.set("state", state);
    if (sort) sp.set("sort", sort);
    const merged = { page: String(page), ...Object.fromEntries(sp), ...patch };
    const out = new URLSearchParams(merged as Record<string, string>);
    return `?${out.toString()}`;
  };

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-2xl font-bold">Waitlist</h1>
        <div className="flex items-center gap-2 text-sm text-muted">
          <span>Total:</span>
          <span className="font-semibold text-ink">{total}</span>
          <Link
            href={`/admin/waitlist/export${qp({})}`}
            prefetch={false}
            className="ml-4 rounded-md border px-3 py-1 hover:bg-gray-50"
          >
            ⬇️ Export CSV
          </Link>
        </div>
      </div>

      {/* Filters */}
      <form className="mb-4 grid gap-3 md:grid-cols-[1fr,160px,120px,160px]">
        <input
          name="q"
          placeholder="Search name, email, city, ref…"
          defaultValue={q}
          className="rounded-md border px-3 py-2"
        />
        <select
          name="pettype"
          defaultValue={pettype}
          className="rounded-md border px-3 py-2"
          aria-label="Pet type"
        >
          <option value="">All pet types</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Other</option>
        </select>
        <input
          name="state"
          placeholder="State (e.g., FL)"
          defaultValue={state}
          className="rounded-md border px-3 py-2"
        />
        <select
          title="sort"
          name="sort"
          defaultValue={sort}
          className="rounded-md border px-3 py-2"
        >
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="name">Name</option>
          <option value="city">City</option>
        </select>

        <div className="md:col-span-4 flex items-center gap-2">
          <button className="rounded-md bg-brand px-3 py-2 text-white">
            Apply
          </button>
          <Link href="/admin/waitlist" className="rounded-md border px-3 py-2">
            Reset
          </Link>
        </div>
      </form>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border bg-white shadow-soft">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr className="border-b">
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Zip</th>
              <th className="px-4 py-3">Pet</th>
              <th className="px-4 py-3">Referral</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="px-4 py-3 text-muted">
                  {new Date(r.created).toLocaleString()}
                </td>
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">
                  <a
                    className="text-brand underline underline-offset-2"
                    href={`mailto:${r.email}`}
                  >
                    {r.email}
                  </a>
                </td>
                <td className="px-4 py-3">{r.city}</td>
                <td className="px-4 py-3">{r.state}</td>
                <td className="px-4 py-3">{r.zip}</td>
                <td className="px-4 py-3">{r.pettype}</td>
                <td className="px-4 py-3">{r.referral ?? "—"}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-muted">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div>
          Page <span className="font-semibold">{page}</span> of{" "}
          <span className="font-semibold">{pages}</span>
        </div>
        <div className="flex gap-2">
          <Link
            aria-disabled={page <= 1}
            className={`rounded-md border px-3 py-1 ${
              page <= 1 ? "pointer-events-none opacity-40" : ""
            }`}
            href={qp({ page: String(page - 1) })}
          >
            ← Prev
          </Link>
          <Link
            aria-disabled={page >= pages}
            className={`rounded-md border px-3 py-1 ${
              page >= pages ? "pointer-events-none opacity-40" : ""
            }`}
            href={qp({ page: String(page + 1) })}
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  );
}
