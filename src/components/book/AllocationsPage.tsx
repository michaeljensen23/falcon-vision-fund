import { COMPANIES, formatWeight } from "@/lib/portfolio";
import { CompanyLogo } from "./logos";
import { PageShell } from "./PageShell";

export function AllocationsPage({ page, total }: { page: number; total: number }) {
  return (
    <PageShell page={page} total={total} kicker="Target portfolio">
      <div className="alloc-slide">
        <div className="alloc-intro">
          <h2>Target portfolio allocations</h2>
          <p>Concentrated book of 11 late-stage holdings. Weights are targets and will flex with availability, pricing, and deal structure.</p>
        </div>
        <ul className="alloc-grid">
          {COMPANIES.map((c) => (
            <li key={c.slug} className={c.logoBleed ? "is-bleed" : undefined}>
              <span className="alloc-logo" aria-hidden>
                <CompanyLogo slug={c.slug} compact />
              </span>
              <div>
                <strong>{c.name}</strong>
                <p>{c.thesisLine}</p>
              </div>
              <em>{formatWeight(c.weight)}</em>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
