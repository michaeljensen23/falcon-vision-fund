import type { ReactNode } from "react";

export function PageShell({
  children,
  page,
  total,
  kicker = "Pre-IPO portfolio",
}: {
  children: ReactNode;
  page: number;
  total: number;
  kicker?: string;
}) {
  return (
    <article className="slide" data-page={page}>
      <header className="slide-head">
        <div className="slide-head-brand">
          <img src="/brand/falcon.jpg" alt="" className="falcon-mini" />
          <div>
            <p className="brand-name">Falcon Vision Fund I</p>
            <p className="brand-kicker">{kicker}</p>
          </div>
        </div>
        <p className="page-num">
          <span>{String(page).padStart(2, "0")}</span>
          <em>/ {String(total).padStart(2, "0")}</em>
        </p>
      </header>
      <div className="slide-body">{children}</div>
      <footer className="slide-foot">
        <p>Confidential — qualified clients only. Not an offer to sell securities.</p>
        <p>Target allocations are approximate and subject to availability.</p>
      </footer>
    </article>
  );
}
