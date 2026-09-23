import { FUND } from "@/lib/portfolio";
import { PageShell } from "./PageShell";

const TERMS = [
  ["Fund name", FUND.name],
  ["Fund cap", FUND.cap],
  ["Minimum investment", FUND.minTicket],
  ["Permitted accounts", FUND.accounts],
  ["Custodians", FUND.custodians],
  ["Tax reporting", FUND.tax],
] as const;

export function OverviewPage({ page, total }: { page: number; total: number }) {
  return (
    <PageShell page={page} total={total} kicker="Fund overview">
      <div className="overview-slide">
        <section className="overview-exec">
          <h2>Executive summary</h2>
          {FUND.exec.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>

        <section className="panel">
          <h2>Key terms</h2>
          <dl className="term-table">
            {TERMS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ul className="strategy">
          <li>
            <strong>Target composition</strong>
            <p>{FUND.composition}</p>
          </li>
          <li>
            <strong>Sourcing channels</strong>
            <p>{FUND.sourcing}</p>
          </li>
          <li>
            <strong>Core focus</strong>
            <p>{FUND.focus}</p>
          </li>
        </ul>

        <section className="economics">
          <h2>Share classes</h2>
          <div className="class-stack">
            <div className="class-cols" aria-hidden>
              <span />
              <span>Management fee</span>
              <span>Carried interest</span>
            </div>
            {FUND.classes.map((shareClass) => (
              <article key={shareClass.id}>
                <div>
                  <p>{shareClass.id}</p>
                  <h3>{shareClass.who}</h3>
                </div>
                <strong>
                  {shareClass.mgmtFee}
                  {shareClass.feeShort === "annual fee" ? <em>Annual</em> : null}
                </strong>
                <strong>{shareClass.carry}</strong>
              </article>
            ))}
          </div>
          <p className="qualify">
            <strong>{FUND.qualified}</strong>
            <span>{FUND.qualifiedDef}</span>
          </p>
        </section>
      </div>
    </PageShell>
  );
}
