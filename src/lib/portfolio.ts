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
    "Falcon Vision Fund I is a portfolio of late-stage private companies in artificial intelligence, defense autonomy, robotics, and aerospace.",
    "Each holding is a category leader still in private hands, at the point when access is scarce and a public listing has not yet reset who owns the business.",
    "The mandate is direct ownership of those companies — not a fund of funds, and not a basket of public proxies for the same themes.",
  ],
};

const ROSTER: Company[] = [
  {
    slug: "databricks",
    name: "Databricks",
    thesisLine: "Conviction Data / AI Platform",
    weight: 19,
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
        body: "The Fund’s 19% core compounder: scaled, cash-generative, and the cleanest expression of production AI.",
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
      { label: "Target weight", value: "19%" },
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
    weight: 14,
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
        body: "Anduril is the 14% autonomy standard in the defense sleeve — software that becomes the system of record once it is on the mission.",
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
      { label: "Target weight", value: "14%" },
    ],
  },
  {
    slug: "crusoe",
    name: "Crusoe",
    thesisLine: "Climate-Aligned AI Infrastructure Power",
    weight: 8,
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
      { label: "Target weight", value: "8%" },
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
    weight: 6,
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
      { label: "Target weight", value: "6%" },
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
    weight: 7,
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
        body: "At a 7% portfolio allocation, this is the option on physical AGI. BMW is the de-risking event, not the end state.",
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
      { label: "Target weight", value: "7%" },
    ],
  },
  {
    slug: "lambda",
    name: "Lambda",
    thesisLine: "AI Cloud & GPU Infrastructure",
    weight: 10,
    sector: "Neocloud  ·  AI infrastructure",
    hq: "San Francisco, CA",
    founded: "2012",
    valuation: "$5.4B",
    valuationNote: "Series E, November 2025",
    status: "Private  ·  pre-IPO talks reported",
    website: "lambda.ai",
    accent: "#111111",
    logoBg: "#111111",
    logoBleed: true,
    overview:
      "A neocloud that buys Nvidia graphics processing units (GPUs) and rents them to labs and hyperscalers — including a multi-billion-dollar capacity agreement with Microsoft.",
    thesis: [
      {
        title: "The pick-and-shovel beside the labs",
        body: "Training and inference demand still outruns owned capacity. Lambda sells the cluster, not the model.",
      },
      {
        title: "Contracted demand, not a speculative fleet",
        body: "Microsoft expanded a multi-billion-dollar GPU agreement in November 2025. Debt facilities in 2026 fund chips already spoken for.",
      },
      {
        title: "A public-market path is in view",
        body: "The last priced round was $1.5 billion at a $5.4 billion post-money mark. Reported pre-IPO talks would be the next re-rating, not the underwriting case.",
      },
    ],
    catalysts: [
      "Microsoft GB300 capacity expansion",
      "$1B chip-financing facilities closed in 2026",
      "Reported pre-IPO raise ahead of a 2027 listing window",
    ],
    metrics: [
      { label: "Last priced round", value: "$5.4B" },
      { label: "Series E", value: "$1.5B" },
      { label: "Counterparty", value: "Microsoft" },
      { label: "Target weight", value: "10%" },
    ],
  },
  {
    slug: "saronic",
    name: "Saronic",
    thesisLine: "Autonomous Shipbuilding",
    weight: 9,
    sector: "Maritime autonomy  ·  Defense",
    hq: "Austin, TX",
    founded: "2022",
    valuation: "$9.25B",
    valuationNote: "Series D, March 2026",
    status: "Private  ·  Navy production contract",
    website: "saronic.com",
    accent: "#0c2340",
    logoBg: "#0c2340",
    logoBleed: true,
    overview:
      "Builds autonomous surface vessels in American yards — from the 24-foot Corsair to the 180-foot Marauder — and sells them as a production line, not a prototype.",
    thesis: [
      {
        title: "Shipbuilding is the scarce asset",
        body: "Autonomy software is replicable. A yard that launches hulls in under a year is not. Saronic bought the industrial problem.",
      },
      {
        title: "A program, not a demo",
        body: "The U.S. Navy’s $392 million Corsair production contract is the proof that the small boat is already a program of record.",
      },
      {
        title: "Re-rated with the defense complex",
        body: "Series D raised $1.75 billion at $9.25 billion, more than double the $4 billion Series C a year earlier.",
      },
    ],
    catalysts: [
      "Marauder medium unmanned surface vessel in on-water trials",
      "Franklin yard path to ~20 Marauders a year",
      "Corsair production measured in thousands of hulls",
    ],
    metrics: [
      { label: "Valuation", value: "$9.25B" },
      { label: "Series D", value: "$1.75B" },
      { label: "Navy contract", value: "$392M" },
      { label: "Target weight", value: "9%" },
    ],
  },
  {
    slug: "shield-ai",
    name: "Shield AI",
    thesisLine: "Drone Defense Technology",
    weight: 8,
    sector: "Defense autonomy  ·  Aircraft",
    hq: "San Diego, CA",
    founded: "2015",
    valuation: "$12.7B",
    valuationNote: "Series G, March 2026",
    status: "Private  ·  CCA autonomy provider",
    website: "shield.ai",
    accent: "#1a1a1a",
    logoBg: "#1a1a1a",
    logoBleed: true,
    overview:
      "Hivemind is the autonomy stack that flies aircraft when GPS and the data link are gone. V-BAT is the airframe. The U.S. Air Force Collaborative Combat Aircraft program is the customer.",
    thesis: [
      {
        title: "Autonomy that works when the sky is jammed",
        body: "Hivemind is built for denied navigation. That is the requirement, not a feature, on a modern battlefield.",
      },
      {
        title: "Selected onto the Air Force’s drone wingman",
        body: "Hivemind was named a Collaborative Combat Aircraft autonomy provider in February 2026 — the program that pairs drones with crewed fighters.",
      },
      {
        title: "A full turn of the valuation in a year",
        body: "Series G raised $1.5 billion at a $12.7 billion post-money mark, about 140% above the March 2025 round.",
      },
    ],
    catalysts: [
      "Collaborative Combat Aircraft flight-test cadence",
      "V-BAT production and Coast Guard-class missions",
      "Aechelon simulation acquisition beside Hivemind",
    ],
    metrics: [
      { label: "Valuation", value: "$12.7B" },
      { label: "Series G", value: "$1.5B" },
      { label: "Prior mark", value: "$5.3B (’25)" },
      { label: "Target weight", value: "8%" },
    ],
  },
  {
    slug: "lightmatter",
    name: "Lightmatter",
    thesisLine: "Photonic Interconnect for AI",
    weight: 7,
    sector: "Semiconductors  ·  Photonics",
    hq: "Mountain View, CA",
    founded: "2017",
    valuation: "$4.4B",
    valuationNote: "Series D, October 2024",
    status: "Private  ·  Passage in qualification",
    website: "lightmatter.co",
    accent: "#5b4bff",
    logoBg: "#0e0b1f",
    logoBleed: true,
    overview:
      "Replaces copper between AI chips with light. Passage is a photonic interconnect — an interposer and near-package optics — so GPU clusters can scale without the power and fiber tax of electrical links.",
    thesis: [
      {
        title: "The next bottleneck is the wire",
        body: "Graphics processing units are no longer the only scarce part. Bandwidth and watts between them decide how large a training cluster can get.",
      },
      {
        title: "Passage is a standard, not a science project",
        body: "The L20 module joins the Open CPX ecosystem: bidirectional optics that cut fiber count roughly in half on a large GPU pod.",
      },
      {
        title: "Sized as the semiconductor option",
        body: "At 7%, Lightmatter is the book’s bet that photonics becomes the default interconnect before these companies are public.",
      },
    ],
    catalysts: [
      "Passage L20 evaluation kits targeted for early 2027",
      "GlobalFoundries as the fabrication partner",
      "Secondary marks above the $4.4 billion Series D",
    ],
    metrics: [
      { label: "Series D", value: "$4.4B" },
      { label: "Round size", value: "$400M" },
      { label: "Product", value: "Passage" },
      { label: "Target weight", value: "7%" },
    ],
  },
];

const HOLDING_ORDER = [
  "databricks",
  "anduril",
  "stripe",
  "lambda",
  "saronic",
  "shield-ai",
  "crusoe",
  "figure",
  "lightmatter",
  "kalshi",
] as const;

const WATCH_ORDER = ["ramp", "hadrian", "blue-origin", "elevenlabs", "positron"] as const;

function bySlug(order: readonly string[]): Company[] {
  return order.map((slug) => {
    const company = ROSTER.find((item) => item.slug === slug);
    if (!company) throw new Error(`Missing company ${slug}`);
    return company;
  });
}

export const HOLDINGS = bySlug(HOLDING_ORDER);
export const WATCHLIST = bySlug(WATCH_ORDER);
export const COMPANIES = HOLDINGS;

export const TOTAL_WEIGHT = HOLDINGS.reduce((s, c) => s + c.weight, 0);

/** 2025 revenue and year-over-year growth, same format on every company page. */
export const COMPANY_RESULTS: Record<string, { revenue2025: string; growth: string }> = {
  databricks: { revenue2025: "$4.8B", growth: "+55%" },
  anduril: { revenue2025: "$2.2B", growth: "+120%" },
  stripe: { revenue2025: "$6.8B", growth: "+33%" },
  lambda: { revenue2025: "$760M", growth: "+79%" },
  saronic: { revenue2025: "$200M", growth: "+1,500%" },
  "shield-ai": { revenue2025: "$300M", growth: "+12%" },
  crusoe: { revenue2025: "$500M", growth: "+81%" },
  figure: { revenue2025: "Not disclosed", growth: "Not disclosed" },
  lightmatter: { revenue2025: "Not disclosed", growth: "Not disclosed" },
  kalshi: { revenue2025: "$264M", growth: "+998%" },
  ramp: { revenue2025: "$1B", growth: "+110%" },
  hadrian: { revenue2025: "Not disclosed", growth: "Not disclosed" },
  "blue-origin": { revenue2025: "Not disclosed", growth: "Not disclosed" },
  elevenlabs: { revenue2025: "$330M", growth: "+175%" },
  positron: { revenue2025: "Not disclosed", growth: "Not disclosed" },
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HERO_SLUGS = new Set([...HOLDINGS, ...WATCHLIST].map((c) => c.slug));

export function formatWeight(weight: number): string {
  return Number.isInteger(weight) ? `${weight}%` : `${weight.toFixed(1)}%`;
}

/** Allowlisted hero path only — never interpolate an untrusted slug into a URL. */
export function companyHeroSrc(slug: string): string | undefined {
  if (!SLUG_RE.test(slug) || !HERO_SLUGS.has(slug)) return undefined;
  const v = slug === "lambda" || slug === "saronic" || slug === "shield-ai" || slug === "lightmatter" ? "?v=2" : "";
  return `/heroes/${slug}.jpg${v}`;
}

export function companyClassName(slug: string): string {
  if (!SLUG_RE.test(slug) || !HERO_SLUGS.has(slug)) return "";
  return ` co-${slug}`;
}
