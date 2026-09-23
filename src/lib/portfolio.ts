export type Company = {
  slug: string;
  name: string;
  thesisLine: string;
  weight: number;
  sector: string;
  hq: string;
  founded: string;
  valuation: string;
  valuationNote: string;
  status: string;
  website: string;
  accent: string;
  logoBg: string;
  logoBleed?: boolean;
  overview: string;
  thesis: { title: string; body: string }[];
  catalysts: string[];
  metrics: { label: string; value: string }[];
};

export const FUND = {
  name: "Falcon Vision Fund I",
  shortName: "Falcon Vision Fund",
  tagline: "Pre-IPO  ·  AI  ·  Defense  ·  Robotics  ·  Space",
  cap: "$50M",
  minTicket: "$250,000 / investor",
  classes: [
    {
      id: "Class A",
      who: "Existing Falcon clients",
      feeLabel: "Management fee",
      feeShort: "fee",
      mgmtFee: "0.00%",
      carry: "10.00%",
    },
    {
      id: "Class B",
      who: "Non-Falcon investors",
      feeLabel: "Annual management fee",
      feeShort: "annual fee",
      mgmtFee: "2.00%",
      carry: "15.00%",
    },
  ],
  accounts: "Taxable, Qualified (IRA and Roth IRA)",
  qualified: "Qualified clients",
  qualifiedDef:
    "$1.4 million in assets under management with Falcon or a net worth exceeding $2.7 million (excluding primary residence).",
  custodians: "Schwab, Fidelity",
  tax: "Consolidated K-1",
  composition: "6–10 growth-stage companies mirroring leading venture themes with optimized fee economics.",
  sourcing:
    "Direct secondaries, tender participation, primary rounds, and strategic warehousing where available.",
  focus: "Scaled revenue, clear path to public liquidity, and institutional-grade governance.",
  exec: [
    "Falcon Vision Fund I is a single book of late-stage private companies in artificial intelligence, defense autonomy, robotics, and aerospace.",
    "Each holding is a category leader still in private hands, at the point when access is scarce and a public listing has not yet reset who owns the business.",
    "The mandate is direct ownership of those companies — not a fund of funds, and not a basket of public proxies for the same themes.",
  ],
};

export const COMPANIES: Company[] = [
  {
    slug: "databricks",
    name: "Databricks",
    thesisLine: "Conviction Data / AI Platform",
    weight: 15,
    sector: "Data Intelligence  ·  Enterprise AI",
    hq: "San Francisco, CA",
    founded: "2013",
    valuation: "$188–190B",
    valuationNote: "Coatue-led round, summer 2026",
    status: "Private  ·  IPO window 2026–27",
    website: "databricks.com",
    accent: "#FF3621",
    logoBg: "#ffffff",
    overview:
      "The data-and-AI operating layer for the enterprise — lakehouse architecture that unifies analytics, governance, and production AI on open data across every major cloud.",
    thesis: [
      {
        title: "The system of record for enterprise AI",
        body: "Already sits on the customer’s data estate, so AI products convert existing consumption — no rip-and-replace.",
      },
      {
        title: "Public-market comparable, still private",
        body: "$7B+ of annual recurring revenue, ~80% growth, 140%+ NDR — a Snowflake-class franchise re-rated to ~$190B.",
      },
      {
        title: "Highest-conviction weight in the book",
        body: "The Fund’s 15% core compounder: scaled, cash-generative, and the cleanest expression of production AI.",
      },
    ],
    catalysts: [
      "Confidential S-1 / listing window as mega-cap AI IPOs clear",
      "AI product mix expanding toward a $1.4B+ run-rate",
      "Lakebase and warehousing segments compounding above 100% YoY",
    ],
    metrics: [
      { label: "Annual recurring revenue", value: "$7B+" },
      { label: "YoY growth", value: "~80%" },
      { label: "NDR", value: "140%+" },
      { label: "Target weight", value: "15%" },
    ],
  },
  {
    slug: "stripe",
    name: "Stripe",
    thesisLine: "Fintech Infrastructure & Payments Leader",
    weight: 12,
    sector: "Payments  ·  Financial infrastructure",
    hq: "South San Francisco, CA",
    founded: "2010",
    valuation: "$159B",
    valuationNote: "Feb 2026 employee tender",
    status: "Private  ·  profitable  ·  tenders",
    website: "stripe.com",
    accent: "#635BFF",
    logoBg: "#ffffff",
    overview:
      "The financial operating system of the internet — the default way software companies collect, route, and reconcile money, now expanding into the metered economics of AI.",
    thesis: [
      {
        title: "Tollbooth on digital commerce",
        body: "Every new software business that charges a customer is a potential Stripe merchant — $1.9T of total payment volume in 2025.",
      },
      {
        title: "AI becomes a payments problem",
        body: "Token billing, Metronome, and OpenRouter put Stripe on both sides of AI economics.",
      },
      {
        title: "Liquidity without waiting for an IPO",
        body: "Institutional tenders provide access now, with a cash-rich issuer and a deep public buyer universe later.",
      },
    ],
    catalysts: [
      "Software/Revenue suite approaching a $1B run-rate",
      "Stablecoin volume doubled to ~$400B in 2025",
      "OpenRouter positions Stripe as AI commerce rails",
    ],
    metrics: [
      { label: "Total payment volume", value: "$1.9T" },
      { label: "Valuation", value: "$159B" },
      { label: "Volume growth", value: "+34%" },
      { label: "Target weight", value: "12%" },
    ],
  },
  {
    slug: "anduril",
    name: "Anduril",
    thesisLine: "Defense Autonomy & Hardware Standard",
    weight: 12,
    sector: "Defense autonomy  ·  Dual-use hardware",
    hq: "Costa Mesa, CA",
    founded: "2017",
    valuation: "$61B",
    valuationNote: "Series H, May 2026",
    status: "Private  ·  IPO path 1–3 years",
    website: "anduril.com",
    accent: "#7a8068",
    logoBg: "#ffffff",
    overview:
      "The software-defined defense company the primes were never structured to become. Lattice — its command-and-control software — sits on finished product and $2.2B of 2025 revenue.",
    thesis: [
      {
        title: "Category standard for autonomous defense",
        body: "Once Lattice, Anduril’s command software, runs the mission, replacing it is as hard as replacing an operating system.",
      },
      {
        title: "Re-rating of the defense-tech complex",
        body: "Series H at $61B doubled the June 2025 mark. The multiple is venture; the backlog is sovereign.",
      },
      {
        title: "Aligned with the Fund’s defense sleeve",
        body: "Paired with Hadrian and Blue Origin, Anduril is the 12% autonomy standard inside the book.",
      },
    ],
    catalysts: [
      "$20B / 10-year U.S. Army contract for Lattice",
      "CCA Fury unmanned combat aircraft in production",
      "International programs of record (incl. Royal Australian Navy)",
    ],
    metrics: [
      { label: "2025 revenue", value: "$2.2B" },
      { label: "Series H", value: "$5.0B" },
      { label: "Valuation", value: "$61B" },
      { label: "Target weight", value: "12%" },
    ],
  },
  {
    slug: "crusoe",
    name: "Crusoe",
    thesisLine: "Climate-Aligned AI Infrastructure Power",
    weight: 10,
    sector: "AI cloud  ·  Energy infrastructure",
    hq: "Denver, CO",
    founded: "2018",
    valuation: "~$30B",
    valuationNote: "Series F, September 2026",
    status: "Private  ·  IPO discussions underway",
    website: "crusoe.ai",
    accent: "#E48047",
    logoBg: "#111111",
    overview:
      "Turns stranded and underused energy into AI compute for OpenAI, Microsoft, Meta, and Oracle — including a $13B contract for graphics processing units (GPUs) with Jane Street.",
    thesis: [
      {
        title: "Own the bottleneck",
        body: "Labs can buy graphics processing units. They cannot conjure megawatts, interconnect, and permitted campuses on a two-year clock.",
      },
      {
        title: "Hyperscaler-grade counterparties",
        body: "OpenAI, Microsoft, Meta, and Jane Street are not a science project. The 2026 round is 3× the 2025 mark.",
      },
      {
        title: "Climate alignment without a concession",
        body: "Flared and stranded energy is a permitting advantage and an ESG-eligible sleeve for AI infrastructure.",
      },
    ],
    catalysts: [
      "$13B Jane Street cloud contract",
      "Banker conversations (GS / MS) on a near-term IPO",
      "Campus pipeline for Oracle / OpenAI-class deployments",
    ],
    metrics: [
      { label: "Valuation", value: "$30B" },
      { label: "Latest round", value: "$3B+" },
      { label: "Prior mark", value: "$10B (’25)" },
      { label: "Target weight", value: "10%" },
    ],
  },
  {
    slug: "ramp",
    name: "Ramp",
    thesisLine: "AI-Native Corporate Finance Platform",
    weight: 9,
    sector: "Fintech  ·  Spend  ·  AI ops",
    hq: "New York, NY",
    founded: "2019",
    valuation: "$44B",
    valuationNote: "Series F, June 2026; $60B talks",
    status: "Private  ·  free-cash-flow positive",
    website: "ramp.com",
    accent: "#E8FF3A",
    logoBg: "#E8FF3A",
    logoBleed: true,
    overview:
      "The AI finance operating system for 70,000 businesses — cards, bill pay, procurement, accounting, and the expense CFOs did not budget: tokens.",
    thesis: [
      {
        title: "The system of record for how companies spend",
        body: "Once Ramp sees every swipe, invoice, and vendor, it becomes the default place to apply policy and AI.",
      },
      {
        title: "AI spend is the new T&E",
        body: "Tokens are a budget line with no incumbent owner. Ramp is building the controls CFOs now need.",
      },
      {
        title: "Profitable growth at venture scale",
        body: "Free-cash-flow positive above $1B of revenue, with 170% growth in total payment volume, is a public-quality print.",
      },
    ],
    catalysts: [
      "Accounting / mid-market practice distribution",
      "Reported talks at a ~$60B valuation",
      "AI token cost-management as a new SKU",
    ],
    metrics: [
      { label: "Annual recurring revenue", value: "$1.5B+" },
      { label: "Customers", value: "70,000+" },
      { label: "Valuation", value: "$44B" },
      { label: "Target weight", value: "9%" },
    ],
  },
  {
    slug: "hadrian",
    name: "Hadrian",
    thesisLine: "Advanced Defense Manufacturing",
    weight: 9,
    sector: "Defense industrial  ·  Physical AI",
    hq: "Torrance, CA",
    founded: "2020",
    valuation: "~$7.9B",
    valuationNote: "Series D, August 2026",
    status: "Private  ·  scaling factories",
    website: "hadrian.co",
    accent: "#c4a05a",
    logoBg: "#ffffff",
    overview:
      "The factories America forgot how to build — AI, robotics, and the Opus operating system turning automation into design-agnostic production for munitions, aerostructures, and Navy work.",
    thesis: [
      {
        title: "The pick-and-shovel of rearmament",
        body: "Primes can design. They cannot produce at the required tempo. Hadrian sells factories-as-a-service.",
      },
      {
        title: "Software margins on a hardware base",
        body: "Opus is the control software. Each new factory raises switching costs without Hadrian becoming an original equipment manufacturer.",
      },
      {
        title: "Complement, not overlap, with Anduril",
        body: "Anduril designs autonomy. Hadrian machines the physical world those systems require.",
      },
    ],
    catalysts: [
      "Navy submarine component production in Alabama",
      "Army advanced manufacturing at Red River Depot",
      "Series D ($1.37B) funds the next factory wave",
    ],
    metrics: [
      { label: "Valuation", value: "$7.9B" },
      { label: "Series D", value: "$1.37B" },
      { label: "Footprint", value: "~3M sq ft" },
      { label: "Target weight", value: "9%" },
    ],
  },
  {
    slug: "blue-origin",
    name: "Blue Origin",
    thesisLine: "Commercial Spaceflight & Aerospace",
    weight: 8,
    sector: "Launch  ·  Lunar  ·  Space infrastructure",
    hq: "Kent, WA",
    founded: "2000",
    valuation: "$130B",
    valuationNote: "First external round, 2026",
    status: "Private  ·  first outside capital",
    website: "blueorigin.com",
    accent: "#0054A6",
    logoBg: "#f4f7fb",
    overview:
      "New Glenn for heavy lift, Blue Moon for NASA Artemis, Blue Ring for beyond-Earth logistics. After two decades of balance-sheet patience, 2026 is the first institutional round.",
    thesis: [
      {
        title: "The second source launch requires",
        body: "National security and Amazon Leo cannot underwrite a SpaceX monopoly. New Glenn is the other U.S. heavy lift.",
      },
      {
        title: "Lunar, logistics, and constellation optionality",
        body: "Artemis lander work and satellite-internet ambitions turn Blue from a rocket company into infrastructure.",
      },
      {
        title: "Access that did not previously exist",
        body: "For 25 years this was a single-owner asset. An 8% primary in the first outside round is structurally rare.",
      },
    ],
    catalysts: [
      "New Glenn return-to-flight from LC-36",
      "Artemis III Blue Moon MK2 path",
      "Amazon Leo + NSSL launch cadence",
    ],
    metrics: [
      { label: "Valuation", value: "$130B" },
      { label: "External raise", value: "$10B" },
      { label: "Founded", value: "2000" },
      { label: "Target weight", value: "8%" },
    ],
  },
  {
    slug: "kalshi",
    name: "Kalshi",
    thesisLine: "Regulated Prediction Markets",
    weight: 8,
    sector: "Event contracts  ·  Market infrastructure",
    hq: "New York, NY",
    founded: "2018",
    valuation: "$22B",
    valuationNote: "Series F 2026; $40B talks",
    status: "Private  ·  designated contract market",
    website: "kalshi.com",
    accent: "#00C805",
    logoBg: "#00C805",
    logoBleed: true,
    overview:
      "The first U.S. exchange overseen by the Commodity Futures Trading Commission where anyone can trade an event — elections, the economy, weather, and sports. That 2021 license is the moat.",
    thesis: [
      {
        title: "A new exchange, not a new app",
        body: "A regulated derivatives exchange compounds like the Chicago Mercantile Exchange. The license to run it is the barrier.",
      },
      {
        title: "Distribution is already built",
        body: "Robinhood routing and a CNN partnership mean Kalshi does not have to buy its way into the mass market.",
      },
      {
        title: "Asymmetric regulatory asset",
        body: "A multi-year head start under the Commodity Futures Trading Commission is the position to own if event contracts stay federal derivatives.",
      },
    ],
    catalysts: [
      "World Cup and sports as a permanent volume pillar",
      "Reported raise targeting ~$40B",
      "Federal pre-emption outcomes vs. state gaming law",
    ],
    metrics: [
      { label: "Last round", value: "$22B" },
      { label: "Talks", value: "~$40B" },
      { label: "Regulator", value: "U.S. CFTC" },
      { label: "Target weight", value: "8%" },
    ],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    thesisLine: "Voice AI Application Layer",
    weight: 6,
    sector: "Voice AI  ·  Application layer",
    hq: "London, United Kingdom",
    founded: "2022",
    valuation: "$11B",
    valuationNote: "Series D, February 2026",
    status: "Private  ·  IPO-oriented",
    website: "elevenlabs.io",
    accent: "#e0c078",
    logoBg: "#ffffff",
    overview:
      "Synthetic speech indistinguishable from a human, expanded into a full audio stack — agents, dubbing, sound effects, and voice design. $330M of annual recurring revenue in 2025.",
    thesis: [
      {
        title: "Voice is how agents meet the world",
        body: "The interface that works in cars, clinics, games, and call centers — the application-layer pick in this book.",
      },
      {
        title: "Already a real software company",
        body: "$330M of annual recurring revenue within three years, with media, gaming, and enterprise partners — not a research lab.",
      },
      {
        title: "Right-sized satellite, not a core risk",
        body: "At 6%, ElevenLabs adds consumer-adjacent AI convexity without threatening the Fund’s late-stage identity.",
      },
    ],
    catalysts: [
      "Conversational agents beyond voice (video)",
      "International expansion (India, Japan, LatAm)",
      "UMG and media partnerships as distribution",
    ],
    metrics: [
      { label: "Annual recurring revenue", value: "$330M+" },
      { label: "Series D", value: "$500M" },
      { label: "Valuation", value: "$11B" },
      { label: "Target weight", value: "6%" },
    ],
  },
  {
    slug: "positron",
    name: "Positron AI",
    thesisLine: "AI Inference Hardware Acceleration",
    weight: 6,
    sector: "Inference silicon  ·  Systems",
    hq: "Reno, NV",
    founded: "2023",
    valuation: "$5B",
    valuationNote: "Series C, September 2026",
    status: "Private  ·  shipping to hyperscale",
    website: "positron.ai",
    accent: "#5EEAD4",
    logoBg: "#071014",
    overview:
      "Inference computers that skip the wait for high-bandwidth memory. Atlas is already installed — more than 50 server racks at Oracle Cloud, a production deployment at a major cloud, not a lab demo.",
    thesis: [
      {
        title: "Inference is where the bill lives",
        body: "Training is occasional; answering users is the permanent cost. The design avoids shortages of high-bandwidth memory (HBM) and chip-on-wafer-on-substrate (CoWoS) packaging, the step that bonds that memory to the chip.",
      },
      {
        title: "Shipped, not slidecked",
        body: "Atlas has been in customer hands since 2024. The $875M Series C at $5B funds tapeout, not a science experiment.",
      },
      {
        title: "Sovereign silicon in a defense-aware book",
        body: "U.S. design and assembly is a feature alongside Anduril and Hadrian — dual-use with a commercial first customer.",
      },
    ],
    catalysts: [
      "Asimov tapeout on TSMC N3P (YE 2026)",
      "Titan production ramp 2H 2027",
      "Expansion beyond the Oracle beachhead",
    ],
    metrics: [
      { label: "Valuation", value: "$5B" },
      { label: "Series C", value: "$875M" },
      { label: "Racks at Oracle", value: "50+" },
      { label: "Target weight", value: "6%" },
    ],
  },
  {
    slug: "figure",
    name: "Figure AI",
    thesisLine: "Autonomous Humanoid Robotics",
    weight: 5,
    sector: "Humanoid robotics  ·  Physical AI",
    hq: "San Jose, CA",
    founded: "2022",
    valuation: "$39B",
    valuationNote: "Series C, September 2025",
    status: "Private  ·  factory deployments live",
    website: "figure.ai",
    accent: "#d4d4d4",
    logoBg: "#111111",
    logoBleed: true,
    overview:
      "A general-purpose humanoid and Helix, the vision-language-action (VLA) model that pilots it. Figure 02 spent 11 months in BMW’s Spartanburg plant building more than 30,000 X3s — BMW’s compact sport-utility vehicle.",
    thesis: [
      {
        title: "The form factor that fits the world as built",
        body: "Factories, warehouses, and homes were designed for humans. A humanoid that uses existing aisles can sell into a larger total addressable market.",
      },
      {
        title: "Helix is the software company inside",
        body: "Owning the vision-language-action model — rather than renting it — is the difference between a contract manufacturer and a platform.",
      },
      {
        title: "Sized for convexity, not concentration",
        body: "At a 5% portfolio allocation, this is the option on physical AGI. BMW is the de-risking event, not the end state.",
      },
    ],
    catalysts: [
      "Figure 03 BMW logistics expansion",
      "BotQ manufacturing scale-up",
      "$3.5B Nscale compute commitment for Helix",
    ],
    metrics: [
      { label: "Valuation", value: "$39B" },
      { label: "Series C", value: ">$1B" },
      { label: "BMW X3s built", value: "30,000+" },
      { label: "Target weight", value: "5%" },
    ],
  },
];

export const TOTAL_WEIGHT = COMPANIES.reduce((s, c) => s + c.weight, 0);

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HERO_SLUGS = new Set(COMPANIES.map((c) => c.slug));

export function formatWeight(weight: number): string {
  return Number.isInteger(weight) ? `${weight}%` : `${weight.toFixed(1)}%`;
}

/** Allowlisted hero path only — never interpolate an untrusted slug into a URL. */
export function companyHeroSrc(slug: string): string | undefined {
  if (!SLUG_RE.test(slug) || !HERO_SLUGS.has(slug)) return undefined;
  return `/heroes/${slug}.jpg`;
}

export function companyClassName(slug: string): string {
  if (!SLUG_RE.test(slug) || !HERO_SLUGS.has(slug)) return "";
  return ` co-${slug}`;
}
