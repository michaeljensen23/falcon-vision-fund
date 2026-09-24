import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { HOLDINGS, WATCHLIST } from "@/lib/portfolio";
import { CoverPage } from "./CoverPage";
import { OverviewPage } from "./OverviewPage";
import { AllocationsPage } from "./AllocationsPage";
import { CompanyPage } from "./CompanyPage";
import { WatchListPage } from "./WatchListPage";
import { CompanyLogo } from "./logos";

const INTRO = 3;
const WATCH_AT = INTRO + HOLDINGS.length;
const TOTAL = WATCH_AT + 1 + WATCHLIST.length;
const SLIDE_W = 1280;
const SLIDE_H = 720;

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

function isFundSlide(index: number) {
  return index < INTRO || index === WATCH_AT;
}

function companySlide(index: number) {
  if (index >= INTRO && index < WATCH_AT) {
    const holdingIndex = index - INTRO;
    return { company: HOLDINGS[holdingIndex]!, holdingIndex, watch: false };
  }
  const watchStart = WATCH_AT + 1;
  if (index >= watchStart && index < TOTAL) {
    const holdingIndex = index - watchStart;
    return { company: WATCHLIST[holdingIndex]!, holdingIndex, watch: true };
  }
  return null;
}

function slideTitle(page: number) {
  if (page === 0) return "Title";
  if (page === 1) return "Fund overview";
  if (page === 2) return "Target allocations";
  if (page === WATCH_AT) return "Watch list";
  return companySlide(page)?.company.name ?? "";
}

export function FundBook() {
  const [page, setPage] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    let frame = 0;
    const fit = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const s = Math.min(el.clientWidth / SLIDE_W, el.clientHeight / SLIDE_H);
        if (!Number.isFinite(s) || s <= 0) return;
        el.style.setProperty("--page-scale", String(s));
      });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        setPage((p) => Math.min(TOTAL - 1, p + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setPage((p) => Math.max(0, p - 1));
      } else if (e.key === "Home") {
        e.preventDefault();
        setPage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setPage(TOTAL - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="book-app">
      <header className="chrome">
        <div className="chrome-brand">
          <img src="/brand/falcon.jpg" alt="" />
          <div>
            <p>Falcon Vision Fund I</p>
            <span>Confidential investor presentation</span>
          </div>
        </div>
        <nav className="chrome-actions" aria-label="Deck controls">
          <a
            className="btn"
            href="/Falcon_Vision_Fund_I_Portfolio.pdf"
            download="Falcon_Vision_Fund_I_Portfolio.pdf"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <Download size={16} strokeWidth={1.75} />
            Download PDF
          </a>
        </nav>
      </header>

      <div className="stage">
        <button
          type="button"
          className="nav-btn prev"
          aria-label="Previous slide"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        <div className="stage-frame" ref={frameRef}>
          <div className="page-scale">
            <Slide index={page} />
          </div>
        </div>

        <button
          type="button"
          className="nav-btn next"
          aria-label="Next slide"
          disabled={page === TOTAL - 1}
          onClick={() => setPage((p) => Math.min(TOTAL - 1, p + 1))}
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>

      <footer className="rail">
        <p className="rail-status">
          <strong>
            {String(page + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </strong>
          <span>{slideTitle(page)}</span>
        </p>
        <ol className="thumbs">
          {Array.from({ length: TOTAL }, (_, i) => (
            <li key={i}>
              <button
                type="button"
                className={[
                  i === page ? "is-active" : "",
                  isFundSlide(i) ? "is-fund" : "",
                ]
                  .filter(Boolean)
                  .join(" ") || undefined}
                onClick={() => setPage(i)}
                aria-label={slideTitle(i)}
                aria-current={i === page ? "page" : undefined}
              >
                {isFundSlide(i) ? (
                  <img src="/brand/falcon.jpg" alt="" className="thumb-falcon" />
                ) : (
                  <CompanyLogo
                    slug={companySlide(i)!.company.slug}
                    className="thumb-logo"
                    compact
                  />
                )}
              </button>
            </li>
          ))}
        </ol>
      </footer>
    </div>
  );
}

function Slide({ index }: { index: number }) {
  if (index === 0) return <CoverPage page={1} total={TOTAL} />;
  if (index === 1) return <OverviewPage page={2} total={TOTAL} />;
  if (index === 2) return <AllocationsPage page={3} total={TOTAL} />;
  if (index === WATCH_AT) return <WatchListPage page={WATCH_AT + 1} total={TOTAL} />;
  const slide = companySlide(index);
  if (!slide) return null;
  return (
    <CompanyPage
      company={slide.company}
      index={slide.holdingIndex}
      page={index + 1}
      total={TOTAL}
      watch={slide.watch}
    />
  );
}

export function PrintBook() {
  return (
    <div className="print-stack">
      <CoverPage page={1} total={TOTAL} />
      <OverviewPage page={2} total={TOTAL} />
      <AllocationsPage page={3} total={TOTAL} />
      {HOLDINGS.map((c, i) => (
        <CompanyPage key={c.slug} company={c} index={i} page={INTRO + i + 1} total={TOTAL} />
      ))}
      <WatchListPage page={WATCH_AT + 1} total={TOTAL} />
      {WATCHLIST.map((c, i) => (
        <CompanyPage
          key={c.slug}
          company={c}
          index={i}
          page={WATCH_AT + 2 + i}
          total={TOTAL}
          watch
        />
      ))}
    </div>
  );
}
