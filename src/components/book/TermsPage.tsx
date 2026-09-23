import { FUND } from "@/lib/portfolio";
import { PageShell } from "./PageShell";

const LEFT = [
  ["Fund name", FUND.name],
  ["Strategy", "Late-stage pre-IPO"],
  ["Fund cap", FUND.cap],
  ["Minimum investment", FUND.minTicket],
] as const;

const RIGHT = [
  ["Permitted accounts", FUND.accounts],
  ["Custodians", FUND.custodians],
  ["Tax reporting", FUND.tax],
] as const;

export function TermsPage({ page, total }: { page: number; total: number }) {
  return (
    <PageShell page={page} total={total} kicker="Summary of key terms">
      <div className="terms-slide">
        <section className="terms-lead">
          <h2>Term sheet</h2>
          <p>
            Economics for {FUND.name}. Target weights in this book are approximate and remain subject to
            availability, price, and structure.
          </p>
        </section>

        <div className="share-classes">
          {FUND.classes.map((shareClass) => (
            <article key={shareClass.id}>
              <p>{shareClass.id}</p>
              <h3>{shareClass.who}</h3>
              <dl>
                <div>
                  <dt>{shareClass.feeLabel}</dt>
                  <dd>{shareClass.mgmtFee}</dd>
                </div>
                <div>
                  <dt>Carried interest</dt>
                  <dd>{shareClass.carry}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="terms-sheet">
          <ol>
            {LEFT.map(([k, v]) => (
              <li key={k}>
                <span>{k}</span>
                <strong>{v}</strong>
              </li>
            ))}
          </ol>
          <ol>
            {RIGHT.map(([k, v]) => (
              <li key={k}>
                <span>{k}</span>
                <strong>{v}</strong>
              </li>
            ))}
          </ol>
        </div>

        <p className="qualify">
          <strong>{FUND.qualified}</strong>
          <span>{FUND.qualifiedDef}</span>
        </p>

        <ul className="framework">
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
      </div>
    </PageShell>
  );
}
