import { WATCHLIST } from "@/lib/portfolio";
import { CompanyLogo } from "./logos";
import { PageShell } from "./PageShell";

export function WatchListPage({ page, total }: { page: number; total: number }) {
  return (
    <PageShell page={page} total={total} kicker="Watch list">
      <div className="watch-slide">
        <section className="watch-lead">
          <h2>Watch list</h2>
          <p>
            Names removed from the target book. They stay in the presentation for monitoring, not as
            current allocations.
          </p>
        </section>
        <ul className="watch-grid">
          {WATCHLIST.map((company) => (
            <li key={company.slug}>
              <span className="alloc-logo" aria-hidden>
                <CompanyLogo slug={company.slug} compact />
              </span>
              <div>
                <strong>{company.name}</strong>
                <p>{company.thesisLine}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
