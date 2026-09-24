import { useState } from "react";
import { COMPANY_RESULTS, companyClassName, companyHeroSrc, HOLDINGS, formatWeight, type Company } from "@/lib/portfolio";
import { CompanyLogo } from "./logos";

export function CompanyPage({
  company,
  index,
  page,
  total,
  watch = false,
}: {
  company: Company;
  index: number;
  page: number;
  total: number;
  watch?: boolean;
}) {
  const results = COMPANY_RESULTS[company.slug];
  const kpis = [
    { label: "Valuation", value: company.valuation },
    { label: "2025 revenue", value: results?.revenue2025 ?? "Not disclosed" },
    { label: "YoY revenue growth", value: results?.growth ?? "Not disclosed" },
  ];
  const hero = companyHeroSrc(company.slug);
  const [failedSlug, setFailedSlug] = useState<string | null>(null);
  const showPhoto = Boolean(hero) && failedSlug !== company.slug;
  const slugClass = companyClassName(company.slug);

  return (
    <article
      className={`slide co-page${slugClass}${company.logoBleed ? " is-bleed" : ""}`}
      data-page={page}
    >
      <div className="co-left">
        <header className="slide-head">
          <div className="slide-head-brand">
            <img src="/brand/falcon.jpg" alt="" className="falcon-mini" />
            <div>
              <p className="brand-name">Falcon Vision Fund I</p>
              <p className="brand-kicker">{company.thesisLine}</p>
            </div>
          </div>
          <p className="page-num">
            <span>{String(page).padStart(2, "0")}</span>
            <em>/ {String(total).padStart(2, "0")}</em>
          </p>
        </header>

        <div className="co-main">
          <div className="co-id">
            <div className="logo-plate" aria-hidden>
              <CompanyLogo slug={company.slug} className="co-logo" compact />
            </div>
            <div className="co-identity">
              <p className="co-kicker">
                {watch
                  ? "Watch list"
                  : `Holding ${String(index + 1).padStart(2, "0")} of ${HOLDINGS.length}`}
                <span aria-hidden> · </span>
                {company.sector}
              </p>
              <h1>{company.name}</h1>
              <p className="co-line">{company.thesisLine}</p>
            </div>
            <div className="weight-mark">
              <span>{watch ? "Status" : "Target weight"}</span>
              <p>{watch ? "Watch" : formatWeight(company.weight)}</p>
            </div>
          </div>

          <p className="co-overview">{company.overview}</p>

          <div className="thesis-block">
            <h2>Investment thesis</h2>
            <ol className="thesis-list">
              {company.thesis.map((t, i) => (
                <li key={t.title}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <dl className="metric-rail">
            {kpis.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="slide-foot">
          <p>
            {company.hq}
            <span aria-hidden> · </span>
            Founded {company.founded}
            <span aria-hidden> · </span>
            {company.valuationNote}
          </p>
          <p>Confidential — qualified clients only.</p>
        </footer>
      </div>

      <aside className="co-photo" style={showPhoto ? undefined : { background: company.accent }}>
        {showPhoto ? (
          <img
            src={hero}
            alt=""
            decoding="async"
            draggable={false}
            onError={() => setFailedSlug(company.slug)}
          />
        ) : (
          <CompanyLogo slug={company.slug} className="co-photo-logo" />
        )}
      </aside>
    </article>
  );
}