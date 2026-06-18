export const SITE = {
  name: "KINETIQ",
  tagline: "We engineer digital momentum",
  email: "hello@kinetiq.studio",
  url: "https://kinetiq.studio",
  description:
    "Kinetiq is a digital product studio crafting premium websites, software, and mobile experiences for ambitious teams of every size.",
};

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Labs", href: "/labs" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  /** Expanded narrative shown in the service detail modal */
  overview: string;
  /** Concrete deliverables listed in the service detail modal */
  included: string[];
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Web Design",
    description:
      "Art-directed marketing sites and brand experiences that convert attention into trust. Every pixel placed with intent.",
    overview:
      "We design marketing sites and brand experiences that earn trust in the first three seconds. Strategy, art direction, and motion come together so every scroll feels considered and every message lands — then we hand it to engineering pixel-perfect and production-ready.",
    included: [
      "Brand & visual identity",
      "Art-directed page design",
      "Reusable design system",
      "Motion & micro-interactions",
      "Responsive engineering handoff",
    ],
    tags: ["Creative Direction", "Design Systems", "Motion Design"],
  },
  {
    index: "02",
    title: "Software Development",
    description:
      "Custom platforms and SaaS products engineered for scale. Clean architecture, rigorous testing, zero shortcuts.",
    overview:
      "We build custom platforms and SaaS products engineered to scale from your first user to your millionth. Clean architecture, automated testing, and observability are baked in from day one — not bolted on later — so you ship fast without accruing the kind of debt that stalls a roadmap.",
    included: [
      "Full-stack web applications",
      "API design & integrations",
      "Cloud infrastructure & DevOps",
      "Automated testing & CI/CD",
      "Performance & security hardening",
    ],
    tags: ["SaaS Platforms", "APIs & Integrations", "Cloud Architecture"],
  },
  {
    index: "03",
    title: "Mobile Development",
    description:
      "Native-quality iOS and Android applications that feel inevitable in the hand. From concept to App Store.",
    overview:
      "We ship native-quality iOS and Android apps that feel inevitable in the hand. From prototype to App Store and Play Store, we own the full lifecycle — including release management and post-launch iteration — so your product keeps improving long after launch day.",
    included: [
      "iOS & Android (native)",
      "React Native & Flutter",
      "Offline-first & real-time sync",
      "App Store & Play Store release",
      "Crash monitoring & analytics",
    ],
    tags: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    index: "04",
    title: "UI/UX Design",
    description:
      "Research-driven product design that removes friction and rewards every interaction. Interfaces people remember.",
    overview:
      "We turn research into product design that removes friction and rewards every interaction. We validate with real users early and often, so what we ship is what people actually want to use — measured in adoption and retention, not just applause.",
    included: [
      "User research & interviews",
      "Information architecture",
      "Interactive prototypes",
      "Usability testing",
      "Accessible design (WCAG)",
    ],
    tags: ["Product Design", "Prototyping", "User Research"],
  },
  {
    index: "05",
    title: "Dedicated Teams",
    description:
      "Senior engineers and designers embedded in your organization. Your roadmap, our velocity — no ramp-up tax.",
    overview:
      "We embed senior engineers and designers directly into your organization. You set the roadmap; we bring the velocity — with no ramp-up tax and no juniors learning on your budget. The team flexes with your needs and plugs into the tools and rituals you already run.",
    included: [
      "Senior engineers & designers",
      "Flexible team scaling",
      "Your tools & workflows",
      "Daily collaboration & standups",
      "Knowledge transfer & docs",
    ],
    tags: ["Staff Augmentation", "Team Extension", "Outsourcing"],
  },
  {
    index: "06",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology strategy, and due diligence from people who have shipped at every scale.",
    overview:
      "We provide architecture reviews, technology strategy, and technical due diligence from people who have shipped at every scale. Whether you're de-risking a raise or untangling legacy systems, you get a clear, actionable path forward — and the rationale behind every recommendation.",
    included: [
      "Architecture & code reviews",
      "Technology strategy & roadmaps",
      "Technical due diligence",
      "Scalability & cost audits",
      "Team & process assessment",
    ],
    tags: ["Architecture", "Audits", "Strategy"],
  },
];

/** One section of a project case study, rendered on the project detail page. */
export type CaseStudySection = {
  /** anchor id used by the sticky side-nav (e.g. "context") */
  id: string;
  /** label shown in the side-nav (e.g. "Context") */
  label: string;
  /** body paragraphs, rendered in order */
  body: string[];
};

/**
 * A supporting/secondary image shown in the project gallery. Drop a real
 * file in /public and set `src` to its path (e.g. "/work/helios-grid/1.jpg");
 * when `src` is omitted, a generative placeholder is rendered instead.
 */
export type GalleryItem = {
  src?: string;
  caption: string;
  /** "wide" items span the full width; otherwise they sit in a two-up row */
  span?: "wide" | "half";
};

export type Project = {
  index: string;
  /** url segment for the detail page: /work/<slug> */
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  hue: string; // tailwind gradient classes for the visual
  accent: string;
  /** Optional real hero image path (in /public); falls back to artwork. */
  heroImage?: string;
  /** Mono meta row shown beneath the title on the detail page. */
  meta: { label: string; value: string }[];
  /** The case-study narrative — drives both the side-nav and the content. */
  sections: CaseStudySection[];
  /** Supporting / secondary imagery shown below the narrative. */
  gallery: GalleryItem[];
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    slug: "helios-grid",
    title: "Helios Grid",
    category: "SaaS Platform · Energy",
    year: "2026",
    description:
      "A real-time analytics platform helping renewable operators forecast output across 4,000+ sites.",
    hue: "from-amber-500/40 via-orange-600/20 to-transparent",
    accent: "#f59e0b",
    meta: [
      { label: "Client", value: "Helios Grid" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "Platform · Data" },
      { label: "Timeline", value: "7 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Helios Grid operates utility-scale solar and wind assets across three continents. As their portfolio grew past 4,000 sites, the spreadsheets and vendor dashboards that once worked became a liability — operators were stitching together forecasts by hand and reacting to grid events hours too late.",
          "They came to us with a clear mandate: one platform, real-time, trusted enough that a control-room operator would bet a dispatch decision on it.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "The hard part was never the charts — it was the data underneath them. Telemetry arrived from dozens of hardware vendors in incompatible formats, at wildly different intervals, with gaps and outliers that would quietly poison any forecast.",
          "On top of that, the interface had to stay legible at a glance under pressure. A control room is not a place for clever visualizations; it's a place where the right number has to be unmistakable in half a second.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We built an ingestion layer that normalizes every vendor feed into a single time-series model, with anomaly detection that flags bad sensor data before it reaches a forecast. Operators see not just the prediction but its confidence — and why.",
          "Design-wise we worked alongside two veteran control-room operators for the entire build, testing every screen against the question: can you read this while three other things are on fire?",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Helios now forecasts portfolio output 48 hours out with a margin tight enough to trade on. Dispatch decisions that used to take a morning of spreadsheet wrangling happen in the platform in minutes.",
          "Eight months after launch the system runs every site they own, and the operations team has stopped asking for the old dashboards back — the highest compliment a tool like this gets.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "A streaming pipeline built on Kafka and TimescaleDB ingests roughly 2 million data points a minute, with a forecasting service in Python feeding a Next.js front end over a typed GraphQL layer.",
          "The whole thing runs on Kubernetes with horizontal autoscaling tuned to grid-event spikes, and every forecast is versioned so an operator can always ask the system to show its work.",
        ],
      },
    ],
    gallery: [
      { caption: "Control-room overview — portfolio output at a glance", span: "wide" },
      { caption: "Per-site forecast with confidence bands" },
      { caption: "Anomaly detection flagging a faulty sensor feed" },
    ],
  },
  {
    index: "02",
    slug: "pulsewear",
    title: "Pulsewear",
    category: "Mobile App · Fitness",
    year: "2025",
    description:
      "A training companion app pairing wearable telemetry with adaptive coaching for 300k athletes.",
    hue: "from-rose-500/40 via-fuchsia-600/20 to-transparent",
    accent: "#f43f5e",
    meta: [
      { label: "Client", value: "Pulsewear" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · Android" },
      { label: "Timeline", value: "5 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Pulsewear makes a heart-rate and motion wearable beloved by serious amateur athletes. The hardware was excellent; the companion app was an afterthought — a glorified data dump that left users to interpret their own training.",
          "With 300,000 active users and a 3.8 App Store rating, they hired us to turn raw telemetry into something that actually coaches.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Adaptive coaching means the app has to feel like it knows you — but most users open it sweaty, mid-session, for two seconds at a time. The intelligence had to disappear into an interface that demanded almost no attention.",
          "We also had to handle the messy reality of wearable data: dropped Bluetooth connections, sensor drift, and workouts that don't fit any tidy category.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We designed around a single adaptive 'next session' card that reads your recent load, recovery, and goals and tells you exactly what to do today — with the reasoning one tap away for the people who want it.",
          "Offline-first sync meant a dropped connection mid-run never loses data, and the coaching model retrains nightly on each athlete's own history rather than a generic population.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The relaunch took the App Store rating from 3.8 to 4.9 and roughly doubled weekly active sessions. Support tickets about 'what do these numbers mean' all but vanished.",
          "More importantly, retention at 90 days climbed by half — the clearest signal that the app finally earns its place on the home screen.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built in React Native with native modules for the Bluetooth and sensor-fusion layers, backed by a real-time sync engine that reconciles offline writes without conflicts.",
          "The adaptive coaching runs on an on-device model for instant feedback, with heavier nightly retraining in the cloud — so the app stays responsive even with no signal.",
        ],
      },
    ],
    gallery: [
      { caption: "The adaptive 'next session' home card", span: "wide" },
      { caption: "Live session view with minimal glance-able metrics" },
      { caption: "Recovery and training-load trends" },
    ],
  },
  {
    index: "03",
    slug: "atlas-freight",
    title: "Atlas Freight",
    category: "Web Platform · Logistics",
    year: "2025",
    description:
      "An end-to-end freight orchestration system moving $2B of cargo through one unified interface.",
    hue: "from-sky-500/40 via-indigo-600/20 to-transparent",
    accent: "#38bdf8",
    meta: [
      { label: "Client", value: "Atlas Freight" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Web Platform" },
      { label: "Timeline", value: "9 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Atlas Freight brokers cargo between shippers, carriers, and ports. Their operation ran on a patchwork of legacy tools, email threads, and a 20-year-old terminal app that only three people fully understood.",
          "They were moving two billion dollars of cargo a year on software that could lose a container in a forwarded reply.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Logistics is unforgiving: a single shipment touches customs, carriers, warehouses, and finance, each with its own system of record. The platform had to orchestrate all of them without ever becoming the bottleneck.",
          "And it had to be adopted by dispatchers who'd used the old terminal for a decade and were, reasonably, skeptical of anything new.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We modeled every shipment as a single timeline that every party reads from and writes to, replacing the email chains with one source of truth. Integrations push and pull from carrier and customs systems automatically.",
          "We rolled it out lane by lane, sitting with dispatchers as they worked, so the platform earned trust on real shipments before it was ever mandated.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Atlas now runs its entire book through one interface. Exceptions that used to surface days late are flagged the moment they happen, and the time to quote and book a complex multi-leg shipment dropped from hours to minutes.",
          "The old terminal app was finally switched off — quietly, with no one mourning it.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "An event-sourced core in Go keeps an immutable history of every shipment, with a Next.js operations console on top and a queue of adapters integrating carrier, customs, and ERP systems.",
          "Idempotent event handling means a flaky third-party API never corrupts a shipment's state — the system simply retries until the world agrees.",
        ],
      },
    ],
    gallery: [
      { caption: "Unified shipment timeline — one source of truth", span: "wide" },
      { caption: "Live exceptions board with automatic flagging" },
      { caption: "Multi-leg quote and booking flow" },
    ],
  },
  {
    index: "04",
    slug: "mira-health",
    title: "Mira Health",
    category: "Product Design · Healthcare",
    year: "2024",
    description:
      "A telehealth experience rebuilt around patients — cutting appointment friction by 62%.",
    hue: "from-emerald-500/40 via-teal-600/20 to-transparent",
    accent: "#34d399",
    meta: [
      { label: "Client", value: "Mira Health" },
      { label: "Year", value: "2024" },
      { label: "Discipline", value: "Product Design" },
      { label: "Timeline", value: "4 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Mira Health offers virtual primary care to patients who often can't easily get to a clinic — older adults, rural communities, people managing chronic conditions. Their existing booking flow was built for the clinic's convenience, not the patient's.",
          "Drop-off before a first appointment was high enough to threaten the whole model.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "The people who needed care most were the ones the interface served worst. Tiny tap targets, clinical jargon, and a ten-step booking funnel turned a simple need into an obstacle course.",
          "Any redesign also had to stay strictly within clinical and privacy compliance — there's no shipping fast and loose with health data.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We rebuilt the journey around the patient's actual goal: see a doctor, soon. The booking flow collapsed from ten steps to three, written in plain language and designed large, high-contrast, and forgiving of mistakes.",
          "We tested every iteration with patients in the target age range, not designers — and let their confusion, not our taste, drive the decisions.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Appointment friction — the time and abandonment between intent and a booked visit — fell by 62%. First-appointment completion rose sharply, especially among the older patients who'd struggled most.",
          "The clinical team noticed too: better-prepared patients arriving at calmer, clearer visits.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Delivered as a fully accessible (WCAG 2.1 AA) design system and component library, validated with assistive technology rather than just an audit checklist.",
          "We handed off a documented, themeable kit so Mira's own team could extend the new patterns across the rest of the product without us.",
        ],
      },
    ],
    gallery: [
      { caption: "The three-step booking flow, in plain language", span: "wide" },
      { caption: "Accessible appointment dashboard" },
      { caption: "High-contrast component library handoff" },
    ],
  },
];

/**
 * Labs — the "building in public" page. Entries are demos, works-in-progress,
 * and experiments, grouped by `group`. An entry with a `detail` opens an
 * on-site modal; an entry with only an `href` links straight out to a live URL.
 * (When both exist, the modal carries a "Visit live" button.)
 */
export type LabStatusTone = "live" | "progress" | "beta" | "internal" | "idea";

export type LabEntry = {
  id: string;
  group: "demo" | "ongoing" | "experiment";
  title: string;
  /** short category line, e.g. "Demo · Healthcare" */
  kind: string;
  type: "Personal" | "Client" | "Studio";
  status: { label: string; tone: LabStatusTone };
  blurb: string;
  tags: string[];
  hue: string;
  accent: string;
  /** when it last moved, e.g. "Jun 2026" */
  updated?: string;
  /** external live/demo URL (opens in a new tab) */
  href?: string;
  /** on-site write-up shown in the Labs modal */
  detail?: { overview: string[]; bullets?: string[] };
};

export const LAB_ENTRIES: LabEntry[] = [
  // ---- Live demos ----------------------------------------------------------
  {
    id: "meridian-clinic",
    group: "demo",
    title: "Meridian Clinic",
    kind: "Demo · Healthcare",
    type: "Studio",
    status: { label: "Live", tone: "live" },
    blurb:
      "A booking-first website concept for a private clinic — calm, fast, and built to turn a visit into an appointment.",
    tags: ["Next.js", "Booking UX", "Motion"],
    hue: "from-emerald-500/40 via-teal-600/20 to-transparent",
    accent: "#34d399",
    updated: "May 2026",
    // TODO: replace with the real live demo URL
    href: "#",
  },
  {
    id: "aurora-store",
    group: "demo",
    title: "Aurora Store",
    kind: "Demo · E-commerce",
    type: "Studio",
    status: { label: "Live", tone: "live" },
    blurb:
      "A headless storefront playground with edge-rendered product pages and an instant, no-reload cart.",
    tags: ["Headless", "Edge", "Commerce"],
    hue: "from-fuchsia-500/40 via-purple-600/20 to-transparent",
    accent: "#d946ef",
    updated: "Apr 2026",
    // TODO: replace with the real live demo URL
    href: "#",
  },
  {
    id: "motion-lab",
    group: "demo",
    title: "Motion Lab",
    kind: "Demo · Interaction",
    type: "Studio",
    status: { label: "Live", tone: "live" },
    blurb:
      "A running gallery of the scroll-driven and WebGL transitions we reuse across client builds.",
    tags: ["GSAP", "WebGL", "Scroll"],
    hue: "from-sky-500/40 via-indigo-600/20 to-transparent",
    accent: "#38bdf8",
    updated: "Jun 2026",
    // TODO: replace with the real live demo URL
    href: "#",
    detail: {
      overview: [
        "Motion Lab is where we prototype the interactions that later show up — quietly — in client work. Page transitions, scroll-pinned storytelling, cursor effects, and the odd shader, all in one place we can point to instead of describe.",
        "Treat it as a menu: if something here feels right for your product, we already know it performs and degrades gracefully, because it's been living in the open.",
      ],
      bullets: [
        "Scroll-driven section reveals",
        "WebGL image transitions",
        "View-Transitions page morphs",
        "Reduced-motion-safe by default",
      ],
    },
  },

  // ---- On the bench (in progress) ------------------------------------------
  {
    id: "kinetiq-os",
    group: "ongoing",
    title: "Kinetiq OS",
    kind: "Internal tooling",
    type: "Studio",
    status: { label: "In progress", tone: "progress" },
    blurb:
      "Our own project-ops dashboard — demos, timelines, and client updates living in one place instead of five.",
    tags: ["Next.js", "Postgres", "Internal"],
    hue: "from-amber-500/40 via-orange-600/20 to-transparent",
    accent: "#f59e0b",
    updated: "Jun 2026",
    detail: {
      overview: [
        "We got tired of stitching together status across Slack, a spreadsheet, and three repos, so we're building the tool we wished existed: one place that shows every active engagement, what shipped this week, and what's next.",
        "It's also a testbed — new patterns get dogfooded here before they ever reach a client project.",
      ],
    },
  },
  {
    id: "trailhead",
    group: "ongoing",
    title: "Trailhead",
    kind: "Personal · Travel",
    type: "Personal",
    status: { label: "In progress", tone: "progress" },
    blurb:
      "A weekend project — an offline-first trip planner, mostly an excuse to go deep on local-first sync.",
    tags: ["React Native", "Local-first", "Maps"],
    hue: "from-lime-500/40 via-green-600/20 to-transparent",
    accent: "#84cc16",
    updated: "Jun 2026",
    detail: {
      overview: [
        "Trailhead is a personal build: plan a multi-day trip, then have every map, note, and booking work with no signal in the mountains. It's the kind of constraint that teaches you more than any tutorial.",
        "Whatever we learn about conflict-free sync here tends to pay off the next time a client needs an app that can't assume connectivity.",
      ],
    },
  },
  {
    id: "client-analytics",
    group: "ongoing",
    title: "Logistics analytics platform",
    kind: "Client · under wraps",
    type: "Client",
    status: { label: "Private beta", tone: "beta" },
    blurb:
      "A real-time analytics platform for a logistics client, currently in private beta. Specifics are under NDA.",
    tags: ["Confidential"],
    hue: "from-cyan-500/40 via-teal-600/20 to-transparent",
    accent: "#22d3ee",
    updated: "May 2026",
    detail: {
      overview: [
        "We can't show this one yet — it's a client platform in private beta and the details sit under an NDA. We're including it because honesty about what's in flight beats a suspiciously tidy portfolio.",
        "Once it's public we'll write it up properly. In the meantime, happy to talk about the approach under a mutual NDA.",
      ],
    },
  },
  {
    id: "ledgerlight",
    group: "ongoing",
    title: "Ledgerlight",
    kind: "Personal · Fintech",
    type: "Personal",
    status: { label: "Beta", tone: "beta" },
    blurb:
      "A deliberately tiny personal-finance app — one screen, zero dashboards, just where the money actually went.",
    tags: ["SwiftUI", "On-device", "Beta"],
    hue: "from-violet-500/40 via-indigo-600/20 to-transparent",
    accent: "#8b5cf6",
    updated: "Apr 2026",
    // TODO: replace with the real TestFlight / beta link
    href: "#",
    detail: {
      overview: [
        "Most budgeting apps drown you in charts. Ledgerlight is the opposite bet: a single calm screen that answers one question honestly. It's a personal project, currently in a small TestFlight beta.",
        "It doubles as a study in on-device privacy — nothing leaves the phone — which is increasingly what clients ask for too.",
      ],
    },
  },

  // ---- Experiments & features ----------------------------------------------
  {
    id: "ai-copy-assistant",
    group: "experiment",
    title: "AI copy assistant",
    kind: "Feature experiment",
    type: "Studio",
    status: { label: "Prototype", tone: "idea" },
    blurb:
      "An in-house tool that drafts on-brand UI copy from a component and a one-line intent.",
    tags: ["LLM", "Tooling"],
    hue: "from-rose-500/40 via-fuchsia-600/20 to-transparent",
    accent: "#f43f5e",
    detail: {
      overview: [
        "A prototype that takes a component and a sentence of intent and proposes microcopy that already sounds like the brand — empty states, buttons, error messages, the stuff that usually gets written last and worst.",
        "Early days, but promising enough that it's already saving us a pass on placeholder text.",
      ],
    },
  },
  {
    id: "scroll-3d-hero",
    group: "experiment",
    title: "Scroll-driven 3D hero",
    kind: "Feature experiment",
    type: "Studio",
    status: { label: "Experiment", tone: "idea" },
    blurb:
      "Replacing heavy hero video with a lightweight WebGL scene driven entirely by scroll.",
    tags: ["WebGL", "Performance"],
    hue: "from-sky-500/40 via-blue-600/20 to-transparent",
    accent: "#38bdf8",
  },
  {
    id: "view-transitions",
    group: "experiment",
    title: "Cross-document View Transitions",
    kind: "Feature experiment",
    type: "Studio",
    status: { label: "Exploring", tone: "idea" },
    blurb:
      "Native multi-page transitions that make a regular site feel like a single-page app.",
    tags: ["View Transitions", "UX"],
    hue: "from-amber-500/40 via-orange-600/20 to-transparent",
    accent: "#f59e0b",
  },
  {
    id: "edge-personalization",
    group: "experiment",
    title: "Edge personalization",
    kind: "Feature experiment",
    type: "Studio",
    status: { label: "Research", tone: "idea" },
    blurb:
      "Per-visitor content variants rendered at the edge — no client-side flash, no slow first paint.",
    tags: ["Edge", "Personalization"],
    hue: "from-emerald-500/40 via-teal-600/20 to-transparent",
    accent: "#34d399",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

/**
 * Client-facing engagement flow shown on the Services page — the short story
 * of how a project goes from first hello to handover. (The full delivery
 * methodology lives on the Process page.)
 */
export const SERVICE_FLOW: ProcessStep[] = [
  {
    index: "01",
    title: "Get in touch",
    description:
      "Tell us what you're building. A senior team member replies within 24 hours with honest first thoughts — no sales scripts, no gatekeepers.",
  },
  {
    index: "02",
    title: "Design a demo",
    description:
      "We turn the brief into a clickable demo quickly, so you're reacting to something real instead of a slide deck — and you see the direction before committing to a full build.",
  },
  {
    index: "03",
    title: "Refine the details",
    description:
      "We walk the demo together and tune it — copy, flows, edge cases, the small things that decide whether it feels right. Nothing moves forward until the plan is one you're happy with.",
  },
  {
    index: "04",
    title: "Build the full project",
    description:
      "Senior designers and engineers build it for real, in transparent weekly cycles. You see working software at every step — never a black box, never a surprise at the end.",
  },
  {
    index: "05",
    title: "Security check & polish",
    description:
      "Before launch we harden, test, and sweat the details — performance, accessibility, and a security pass — so what ships is genuinely solid, not just finished.",
  },
  {
    index: "06",
    title: "Publish & handover",
    description:
      "We deploy, hand everything over in your own accounts, and make sure your team knows the ropes. The product is fully yours — no lock-in, no hostages.",
  },
];

export const REASONS = [
  {
    title: "Senior-only craft",
    description:
      "No juniors learning on your budget. Every project is staffed by engineers and designers with a decade of shipped work behind them.",
  },
  {
    title: "Dedicated teams",
    description:
      "A stable, embedded team that learns your domain deeply — not a rotating cast of strangers billing hours.",
  },
  {
    title: "Velocity without debt",
    description:
      "We move fast because our foundations are disciplined. Clean architecture today is speed tomorrow.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 14, suffix: "", label: "Industries served" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kinetiq operates like a senior product team that happens to sit outside our building. They challenged our assumptions, then shipped a platform our users genuinely love.",
    name: "Sarah Lindqvist",
    role: "VP of Product, Helios Grid",
  },
  {
    quote:
      "We interviewed nine agencies. Kinetiq was the only one that talked about our business model before talking about technology. They've been our team ever since.",
    name: "Marcus Chen",
    role: "CEO, Atlas Freight",
  },
  {
    quote:
      "The level of polish is absurd. Every interaction in the app feels considered. Our App Store rating went from 3.8 to 4.9 after the relaunch.",
    name: "Amira Hadid",
    role: "Founder, Pulsewear",
  },
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Google Cloud",
  "Kubernetes",
  "Terraform",
  "Figma",
  "WebGL",
];

/**
 * Archive entries are full case studies too — they carry everything a
 * `Project` does (so they reuse the same detail page) plus the one-line
 * `outcome` shown in the archive table.
 */
export type ArchiveProject = Project & {
  outcome: string;
};

export const WORK_ARCHIVE: ArchiveProject[] = [
  {
    index: "05",
    slug: "northwind-capital",
    title: "Northwind Capital",
    category: "Fintech · Design System",
    outcome: "Design-to-dev handoff cut from weeks to days",
    year: "2026",
    description:
      "A unified design system and component library that pulled six fragmented fintech products into one coherent language.",
    hue: "from-violet-500/40 via-indigo-600/20 to-transparent",
    accent: "#8b5cf6",
    meta: [
      { label: "Client", value: "Northwind Capital" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "Design System" },
      { label: "Timeline", value: "6 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Northwind Capital had grown by acquisition, and it showed. Six products built by six teams meant six button styles, three date pickers, and a brand that fractured the moment a customer moved between tools.",
          "They asked us to build the connective tissue — one design system that every team could build on without slowing down.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A design system only works if people actually use it. The hard part wasn't drawing the components; it was making the system the path of least resistance for teams who already had deadlines and their own way of doing things.",
          "It also had to hold up under fintech's accessibility and compliance bar, where an ambiguous control isn't just ugly — it's a liability.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We audited every existing interface, distilled the patterns worth keeping, and rebuilt them as a single tokenized library shared between Figma and code so design and engineering never drift apart.",
          "Crucially, we shipped it with migration guides and paired with each product team for their first adoption, so the system spread by being useful rather than mandated.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Design-to-dev handoff dropped from weeks to days, because a screen is now assembled from components engineers already trust. New features ship in the brand's voice by default.",
          "A year on, all six products draw from the same system, and onboarding a new designer or engineer takes a fraction of the time it used to.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Design tokens are the single source of truth, generated once and consumed by both Figma variables and a typed React component library published as a versioned package.",
          "Every component ships with accessibility baked in and visual-regression tests, so a change to a token can't silently break a screen three products away.",
        ],
      },
    ],
    gallery: [
      { caption: "The token-driven component library", span: "wide" },
      { caption: "Before / after of a fragmented product surface" },
      { caption: "Figma-to-code parity documentation" },
    ],
  },
  {
    index: "06",
    slug: "veyra",
    title: "Veyra",
    category: "E-commerce · Headless Storefront",
    outcome: "+41% conversion after replatforming",
    year: "2025",
    description:
      "A headless storefront replatform for a fashion brand whose growth had outrun its monolithic commerce stack.",
    hue: "from-fuchsia-500/40 via-purple-600/20 to-transparent",
    accent: "#d946ef",
    meta: [
      { label: "Client", value: "Veyra" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Headless Commerce" },
      { label: "Timeline", value: "4 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Veyra is a fast-growing fashion label whose store ran on an aging all-in-one platform. Page loads crept past four seconds on mobile, and every campaign spike risked taking the whole site down.",
          "They wanted the speed and flexibility of a modern storefront without losing the merchandising tools their team relied on daily.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Replatforming a live store is open-heart surgery: orders can't stop, SEO can't tank, and the catalog of thousands of variants has to migrate without a single broken link.",
          "The merchandising team also wasn't going to trade a friendly admin for raw developer tooling — the new stack had to keep them fully in control.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We went headless: a fast Next.js storefront in front of a commerce backend that kept the team's familiar catalog and order tools intact. Product imagery and content moved to a CMS the marketing team could drive themselves.",
          "We launched behind a careful redirect map and ran the new front end in parallel before cutting over, so the switch was invisible to shoppers.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Conversion rose 41% after replatforming, led almost entirely by mobile, where the faster, smoother storefront stopped losing impatient shoppers at the cart.",
          "Campaign traffic spikes that used to mean white-knuckle monitoring are now non-events, and the team ships landing pages in hours instead of filing tickets.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "A statically generated Next.js storefront pulls product data over a commerce API and content from a headless CMS, served from the edge with incremental revalidation so prices and stock stay fresh.",
          "Checkout stays on the battle-tested commerce backend, giving the brand modern performance up front without re-implementing payments and tax from scratch.",
        ],
      },
    ],
    gallery: [
      { caption: "The rebuilt mobile storefront", span: "wide" },
      { caption: "Edge-rendered product detail page" },
      { caption: "Merchandising tools the team kept" },
    ],
  },
  {
    index: "07",
    slug: "cartographer",
    title: "Cartographer",
    category: "SaaS · Data Visualization",
    outcome: "Seed to Series A in 14 months",
    year: "2025",
    description:
      "A data-visualization SaaS that turns sprawling operational datasets into maps decision-makers can actually read.",
    hue: "from-cyan-500/40 via-teal-600/20 to-transparent",
    accent: "#22d3ee",
    meta: [
      { label: "Client", value: "Cartographer" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "SaaS · Dataviz" },
      { label: "Timeline", value: "5 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Cartographer was a seed-stage startup with a sharp idea: let operations teams see their data on a map instead of in a spreadsheet. They had a prototype that demoed well and fell over the moment real data hit it.",
          "They needed a product solid enough to put in front of enterprise buyers — and investors.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Mapping millions of points in a browser without it grinding to a halt is genuinely hard, and the interface had to stay fluid enough that exploring data felt like play, not like waiting.",
          "As a young team chasing a raise, they couldn't afford to build something that would need rewriting the day after Series A.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We rebuilt the rendering layer around GPU-accelerated mapping that stays smooth at millions of points, and designed an interface where filtering and drilling into data feels instantaneous.",
          "We architected for scale from day one — multi-tenant, observable, secure — so the same codebase that won the demo could carry them through their first enterprise contracts.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Cartographer went from seed to Series A in fourteen months, with the platform front and center in every pitch. The product that closed enterprise deals is the one we shipped, not a rewrite.",
          "Their team has since extended it confidently — a sign the foundations held.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "WebGL-based rendering (via deck.gl) draws large point and polygon layers on the GPU, fed by a tiled data service that only ships what's in view.",
          "A multi-tenant backend with row-level security keeps each customer's data isolated, and the whole platform is instrumented so performance regressions surface before customers feel them.",
        ],
      },
    ],
    gallery: [
      { caption: "GPU-rendered map with millions of live points", span: "wide" },
      { caption: "Instant filtering and drill-down" },
      { caption: "Multi-layer comparison view" },
    ],
  },
  {
    index: "08",
    slug: "bloomline",
    title: "Bloomline",
    category: "Marketing Site · AgTech",
    outcome: "Awwwards Honorable Mention",
    year: "2024",
    description:
      "An award-winning marketing site for an AgTech startup making precision farming feel human and hopeful.",
    hue: "from-lime-500/40 via-green-600/20 to-transparent",
    accent: "#84cc16",
    meta: [
      { label: "Client", value: "Bloomline" },
      { label: "Year", value: "2024" },
      { label: "Discipline", value: "Web Design" },
      { label: "Timeline", value: "3 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Bloomline builds sensors and software that help farms use less water and fewer chemicals. Their technology was impressive; their old site made it sound like a tax form.",
          "They wanted a marketing site that captured the optimism of what they do — feeding the world more gently — and earned the trust of both farmers and investors.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "The site had to speak to two very different audiences at once: pragmatic growers who care about yield, and climate-minded investors who care about impact — without alienating either.",
          "And it had to be genuinely beautiful, because in AgTech a polished site is a credibility signal that the technology behind it is just as considered.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We art-directed the whole thing around natural motion — fields, light, growth — using restrained scroll-driven animation that supports the story instead of showing off.",
          "Copy and structure were built to let each audience find its own path quickly, with hard numbers for the skeptics and a clear sense of mission for everyone.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The site earned an Awwwards Honorable Mention and, more importantly, became the centerpiece of Bloomline's fundraising and sales conversations.",
          "Inbound demo requests climbed, and the team finally had a home online that matched the ambition of the product.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built on Next.js with GSAP and a smooth-scroll layer driving the scene transitions, all tuned to a strict performance budget so the motion never costs load time.",
          "Everything respects reduced-motion preferences and degrades gracefully, so the experience stays elegant on a tractor's phone and a partner's laptop alike.",
        ],
      },
    ],
    gallery: [
      { caption: "Scroll-driven hero set in the field", span: "wide" },
      { caption: "Impact metrics for investors" },
      { caption: "Product story for growers" },
    ],
  },
  {
    index: "09",
    slug: "fieldnote",
    title: "Fieldnote",
    category: "Mobile App · Productivity",
    outcome: "Featured by the App Store at launch",
    year: "2024",
    description:
      "A note-taking app for people who think on the move — fast, offline, and quietly intelligent.",
    hue: "from-blue-500/40 via-indigo-600/20 to-transparent",
    accent: "#3b82f6",
    meta: [
      { label: "Client", value: "Fieldnote" },
      { label: "Year", value: "2024" },
      { label: "Discipline", value: "iOS · Android" },
      { label: "Timeline", value: "4 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Fieldnote set out to make a note app for field researchers, journalists, and anyone who captures thoughts away from a desk. The market is crowded, so the bar for feel and speed was unforgiving.",
          "They came to us with a strong concept and the ambition of an App Store feature at launch.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A note app lives or dies on the moment between an idea and capturing it. Any friction — a slow launch, a sync spinner, a fiddly editor — and people drift back to whatever's already on their home screen.",
          "It also had to work flawlessly offline, since the whole point is using it where signal is unreliable.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We obsessed over the capture path: the app opens straight into a cursor, syncs invisibly, and never makes you wait. Organization happens after the thought is safely down, never before.",
          "On-device intelligence quietly links related notes and surfaces past context, so the app feels helpful without ever feeling like it's in the way.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Fieldnote was featured by the App Store at launch, and early reviews kept returning to the same word: fast. That single quality became its reputation.",
          "Day-one retention landed well above category norms, validating the bet on capture speed over feature count.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "An offline-first local store is the source of truth, with a conflict-free sync engine reconciling changes across devices whenever a connection appears.",
          "The linking and context features run on-device, so suggestions are instant and private — nothing leaves the phone to make the app feel smart.",
        ],
      },
    ],
    gallery: [
      { caption: "Instant capture — straight to the cursor", span: "wide" },
      { caption: "Quietly linked related notes" },
      { caption: "Offline-first sync status" },
    ],
  },
  {
    index: "10",
    slug: "arcadia",
    title: "Arcadia",
    category: "Booking Platform · Travel",
    outcome: "3× booking volume in the first season",
    year: "2023",
    description:
      "A booking platform for boutique stays that turned a manual, email-driven operation into a real-time marketplace.",
    hue: "from-amber-500/40 via-orange-600/20 to-transparent",
    accent: "#fb923c",
    meta: [
      { label: "Client", value: "Arcadia" },
      { label: "Year", value: "2023" },
      { label: "Discipline", value: "Web Platform" },
      { label: "Timeline", value: "6 months" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Arcadia curates boutique cabins and lodges that don't fit the big booking sites. Reservations were handled by hand — emails, phone calls, and a shared calendar that double-booked more than anyone admitted.",
          "Growth was capped not by demand but by how many bookings a small team could process manually.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Real-time availability across dozens of independent hosts is deceptively hard: every booking, hold, and cancellation has to stay consistent or you sell the same weekend twice.",
          "The experience also had to feel as considered as the properties themselves — generic booking-engine UI would have undercut the entire brand.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "We built a real-time availability engine that hosts and guests share, eliminating double-bookings, and wrapped it in an editorial, image-led interface that makes browsing stays feel like daydreaming.",
          "Payments, holds, and confirmations were automated end to end, freeing the team to focus on curation instead of calendar admin.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Booking volume tripled in the first season, handled by the same small team — because the platform, not a person, now did the coordinating.",
          "Double-bookings effectively disappeared, and hosts started asking to join, turning operations from a bottleneck into a growth engine.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "A transactional availability service with proper locking guarantees a date can only be sold once, even under concurrent bookings, with holds that expire automatically.",
          "Payments run through Stripe with automated payouts to hosts, and the image-heavy front end is optimized hard so the editorial feel never comes at the cost of speed.",
        ],
      },
    ],
    gallery: [
      { caption: "Editorial, image-led property browsing", span: "wide" },
      { caption: "Real-time availability calendar" },
      { caption: "Automated host payouts dashboard" },
    ],
  },
];

/**
 * Build/maintenance pricing tiers shown on the Services page. Prices are
 * published as general guidelines — exact figures are scoped per project.
 * Tiers flagged `featured` surface in the three highlight cards.
 */
export type PricingTier = {
  tier: string; // e.g. "Tier 3"
  name: string;
  /** One-line scope summary for cards and the list row */
  summary: string;
  /** Core features, broken out for the detail modal */
  scope: string[];
  /** Summarized ideal audience */
  idealFor: string;
  timeline: string;
  buildPrice: string;
  maintenance: {
    name: string;
    scope: string;
    fee: string;
  };
  /** Services typically involved at this tier (can vary per project) */
  services: string[];
  featured?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "Tier 1",
    name: "Landing Page / Single-Page Site",
    summary:
      "A single scrolling page with hero, about, features, and a contact CTA.",
    scope: [
      "Single scrolling page with hero header",
      "About section & short features section",
      "Simple contact form / CTA",
      "Social icons",
    ],
    idealFor:
      "Local service businesses, quick product validations, and event pages.",
    timeline: "3–7 days",
    buildPrice: "$600 – $1,200",
    maintenance: {
      name: "Basic Hosting & Security",
      scope:
        "Standard cloud hosting, SSL certificate monitoring, and annual domain-renewal tracking.",
      fee: "$29 – $49/mo",
    },
    services: ["Web Design", "UI/UX Design"],
  },
  {
    tier: "Tier 2",
    name: "Premium Landing Page (High-Conversion)",
    summary:
      "A high-conversion single page with custom UI, animations, and lead capture.",
    scope: [
      "High-end single page with advanced copywriting",
      "Custom UI elements & basic animations",
      "Newsletter integration (Mailchimp)",
      "Tracking pixels",
    ],
    idealFor:
      "Startups launching a single product, course creators, and conversion-focused marketing campaigns.",
    timeline: "1–2 weeks",
    buildPrice: "$1,500 – $2,500",
    maintenance: {
      name: "Analytics & Lead Optimization",
      scope:
        "Everything in Tier 1, plus monthly tracking-pixel verification, form-delivery tests, and database cleanup.",
      fee: "$49 – $79/mo",
    },
    services: ["Web Design", "UI/UX Design", "Technical Consulting"],
  },
  {
    tier: "Tier 3",
    name: "Multi-Page Brochure Website",
    summary: "A 3–5 page brochure site with SEO, a contact form, and maps.",
    scope: [
      "3–5 core pages (Home, About, Services, Contact)",
      "Clean typography & standard contact form",
      "Basic SEO setup",
      "Google Maps integration",
    ],
    idealFor:
      "Small businesses, local clinics, consulting practices, and legal firms that want a polished, credible online presence.",
    timeline: "2–3 weeks",
    buildPrice: "$2,500 – $4,000",
    maintenance: {
      name: "Standard Essentials",
      scope:
        "Shared/core hosting, plugin & theme updates (anti-hack), broken-link checks, and monthly full backups.",
      fee: "$79 – $149/mo",
    },
    services: ["Web Design", "UI/UX Design", "Technical Consulting"],
    featured: true,
  },
  {
    tier: "Tier 4",
    name: "CMS-Driven Website (Content-Heavy)",
    summary: "A 5–10 page CMS site with a dynamic blog and easy client updates.",
    scope: [
      "5–10 pages on a CMS (WordPress / Webflow)",
      "Dynamic blog & service catalogs",
      "Team bios & portfolio grid",
      "Easy client-side content updates",
    ],
    idealFor:
      "Real estate agents, creative agencies, news blogs, and teams needing frequent content updates.",
    timeline: "3–4 weeks",
    buildPrice: "$4,000 – $6,500",
    maintenance: {
      name: "Content & CMS Management",
      scope:
        "Everything in Tier 3, plus CMS updates, database optimization, and 1 hr of content support (swapping photos/text).",
      fee: "$150 – $249/mo",
    },
    services: ["Web Design", "UI/UX Design", "Software Development"],
  },
  {
    tier: "Tier 5",
    name: "Interactive & Advanced Contact Portals",
    summary:
      "A multi-page site with smart intake forms, uploads, and booking.",
    scope: [
      "Conditional-logic intake forms",
      "Multi-step questionnaires",
      "Document upload",
      "Basic booking-calendar syncing",
    ],
    idealFor:
      "Medical intake, home contractors needing detailed quotes, recruiting agencies, and consulting firms.",
    timeline: "3–5 weeks",
    buildPrice: "$4,500 – $7,000",
    maintenance: {
      name: "API & Form Compliance",
      scope:
        "Everything in Tier 4, plus data-encryption verification, webhook health monitoring, and form spam-filter tuning.",
      fee: "$199 – $349/mo",
    },
    services: [
      "Web Design",
      "UI/UX Design",
      "Software Development",
      "Technical Consulting",
    ],
    featured: true,
  },
  {
    tier: "Tier 6",
    name: "E-Commerce Storefront",
    summary: "A full storefront with catalog, cart, checkout, and payments.",
    scope: [
      "Full online store (up to 50 products)",
      "Product catalog, cart & checkout",
      "Payment gateway (Stripe / PayPal)",
      "Automated email receipts & basic inventory",
    ],
    idealFor:
      "Boutique retail brands, local artists selling merchandise, and direct-to-consumer brands.",
    timeline: "4–6 weeks",
    buildPrice: "$6,000 – $12,000",
    maintenance: {
      name: "E-Com Growth & Security",
      scope:
        "High-performance commerce server, daily automated backups, payment-gateway API updates, and checkout optimization.",
      fee: "$299 – $499/mo",
    },
    services: [
      "Web Design",
      "UI/UX Design",
      "Software Development",
      "Technical Consulting",
    ],
  },
  {
    tier: "Tier 7",
    name: "Membership / Gated Portal Site",
    summary:
      "A membership portal with logins, gated content, and subscriptions.",
    scope: [
      "User registration, login & profiles",
      "Protected content / courses",
      "Subscription billing & dashboards",
      "Community / forum elements",
    ],
    idealFor:
      "Coaching networks, private training sites, premium content creators, and member organizations.",
    timeline: "4–8 weeks",
    buildPrice: "$7,500 – $15,000",
    maintenance: {
      name: "User Database Care",
      scope:
        "Premium hosting layer, customer-account database management, subscription-logic testing, and isolated security monitoring.",
      fee: "$399 – $699/mo",
    },
    services: [
      "Web Design",
      "UI/UX Design",
      "Software Development",
      "Mobile Development",
      "Technical Consulting",
    ],
    featured: true,
  },
  {
    tier: "Tier 8",
    name: "Full-Scale Web Application (SaaS / MVP)",
    summary:
      "A custom web app with complex backend, dashboards, and real-time data.",
    scope: [
      "Custom web app with complex backend logic",
      "Database architecture & real-time data",
      "User-generated dashboards",
      "Heavy API integrations",
    ],
    idealFor:
      "Tech startups building an MVP and companies seeking bespoke internal operational tools.",
    timeline: "8–12+ weeks",
    buildPrice: "$15,000 – $45,000+",
    maintenance: {
      name: "Bespoke DevOps & SLA",
      scope:
        "Dedicated cloud setup (AWS / DigitalOcean), continuous uptime tracking, bug patching, horizontal scaling, and a custom SLA.",
      fee: "$750 – $2k+/mo",
    },
    services: [
      "Software Development",
      "Dedicated Teams",
      "Technical Consulting",
      "Mobile Development",
    ],
  },
];

export const VALUES = [
  {
    title: "Taste is a feature",
    description:
      "Polish isn't decoration — it's the difference between software people tolerate and software people recommend.",
  },
  {
    title: "Disagree, then commit",
    description:
      "We'll challenge your assumptions before we write a line of code. Then we'll back the decision like it was ours.",
  },
  {
    title: "Write it down",
    description:
      "Decisions, architecture, tribal knowledge — documented as we go, so your team never depends on our memory.",
  },
  {
    title: "Leave it better",
    description:
      "Every codebase, design file, and process we touch should be cleaner when we leave than when we arrived.",
  },
];

export type ContactStep = {
  index: string;
  title: string;
  description: string;
};

export const CONTACT_STEPS: ContactStep[] = [
  {
    index: "01",
    title: "A real reply, fast",
    description:
      "Within 24 hours a senior team member — never a sales bot — reads your message and responds with honest first thoughts.",
  },
  {
    index: "02",
    title: "A scoping call",
    description:
      "Forty-five minutes on your goals, constraints, and timeline. We'll tell you plainly if we're not the right fit.",
  },
  {
    index: "03",
    title: "A proposal in days",
    description:
      "A precise estimate with scope, team, and dates — never a teaser number that doubles after kickoff.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "How do engagements typically work?",
    answer:
      "Smaller sites kick off as soon as the scope is clear; larger builds start with a short discovery phase to align on scope, architecture, and success metrics. From there we work in transparent cycles with demos along the way — fixed-scope for well-defined builds, or a dedicated team retainer for evolving products.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Simple landing pages start around $600, most marketing, brochure, and e-commerce sites land between $1.5k and $15k, and full web apps or SaaS/MVP builds run from $15k to $45k+ depending on complexity. Dedicated teams are priced per specialist per month. After one scoping call we'll give you a precise, honest estimate — never a teaser number.",
  },
  {
    question: "How long until we can launch?",
    answer:
      "A simple landing page can ship in under a week, and most marketing, brochure, and e-commerce sites in two to eight weeks. A full web app or SaaS/MVP typically takes two to three months or more, depending on scope. We'd rather give you a real date and hit it than promise magic — our on-time delivery rate is the stat we protect most.",
  },
  {
    question: "Do you work with our in-house team?",
    answer:
      "Constantly. About half our engagements are embedded collaborations — we plug into your repos, standups, and tooling, and we document everything so your team owns the result, not us.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every build includes a stabilization period, then most clients move to an optimization retainer: performance monitoring, iteration on real usage data, and a standing team that already knows your codebase.",
  },
  {
    question: "Can you sign an NDA before we talk?",
    answer:
      "Of course. Send yours or use our mutual NDA — we can have it signed the same day so the first call can go deep.",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  /** Body paragraphs, rendered in order inside the reader modal. */
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "ship-the-boring-version-first",
    category: "Process",
    title: "Ship the boring version first",
    excerpt:
      "The fastest way to learn whether an idea works is to build the least clever thing that could possibly test it — then earn the right to add the magic.",
    author: "Kinetiq Team",
    date: "2026-05-28",
    readingTime: "5 min read",
    body: [
      "Every product team we meet has a backlog full of clever ideas and a roadmap that quietly assumes all of them are correct. They rarely are. The expensive mistake isn't building the wrong feature — it's building the polished, animated, edge-case-handled version of the wrong feature before anyone has confirmed it solves a real problem.",
      "So we start boring on purpose. The first version of almost anything we build does the smallest job that proves the idea is worth pursuing: a single hard-coded flow, a plain table instead of a dashboard, an email instead of a notification system. It feels unsatisfying to ship. It is also the cheapest information you will ever buy.",
      "Boring-first is not the same as sloppy. The foundations — data model, auth, deployment — are built properly from day one, because those are the parts that are genuinely expensive to change later. What we defer is polish on top of unproven assumptions, not the structure underneath them.",
      "Once real people touch the boring version, the roadmap rewrites itself. Half the clever ideas turn out to be solving problems nobody had, and the other half get sharper because now there's evidence behind them. That's when polish becomes an investment instead of a gamble — and that's the version worth being proud of.",
    ],
  },
  {
    slug: "senior-only-is-a-feature-not-a-flex",
    category: "Studio",
    title: "Senior-only is a feature, not a flex",
    excerpt:
      "Staffing every project with people who've shipped for a decade isn't about ego. It's the cheapest way we've found to protect a timeline.",
    author: "Kinetiq Team",
    date: "2026-04-15",
    readingTime: "4 min read",
    body: [
      "When we tell people every engagement is staffed senior-only, the usual reaction is that it sounds expensive. On a day-rate basis, sure. On a project basis, it's almost always the opposite — because the cost of software isn't the hours spent typing, it's the hours spent undoing decisions that should never have been made.",
      "Experience mostly shows up as things that don't happen. The migration that didn't corrupt data. The architecture that didn't need a rewrite six months in. The integration that didn't quietly break under load. None of these appear on a status report, which is exactly why they're easy to underprice.",
      "There's a communication dividend too. Senior people are comfortable saying 'this requirement doesn't make sense' on the first call instead of the last. That single habit removes more wasted work than any process or tool we've ever adopted.",
      "This is the one rule we started with and won't bend on. Small and senior beats large and layered for the kind of work we want to do — and we'd rather keep a client for the long haul than win a pitch on headcount.",
    ],
  },
  {
    slug: "design-and-engineering-shouldnt-be-a-handoff",
    category: "Craft",
    title: "Design and engineering shouldn't be a handoff",
    excerpt:
      "The seam between a design file and a codebase is where most products lose their polish. The fix is to stop treating it as a seam.",
    author: "Kinetiq Team",
    date: "2026-03-02",
    readingTime: "6 min read",
    body: [
      "The traditional pipeline treats design and engineering as two departments connected by a document. Designers produce a perfect static artifact, throw it over the wall, and engineers reconstruct it in code — losing a little fidelity at every step. By launch, the thing that ships is a faded photocopy of the thing that was approved.",
      "We don't run it that way. Designers and engineers sit on the same project from the first sketch, which means design decisions are pressure-tested against real constraints while they're still cheap to change. An interaction that looks effortless in a prototype but would cost three weeks to build correctly gets caught in a conversation, not a sprint review.",
      "It also means the details survive. Motion, empty states, loading behavior, the way a layout breaks on a narrow screen — these are the things that make software feel considered, and they're exactly the things that evaporate in a handoff because nobody owns them. When the same small team owns both sides, nothing falls through the gap, because there is no gap.",
      "The result isn't just a prettier product. It's a faster one to build, because the most expensive bugs — the ones where the design and the implementation quietly disagree — never get created in the first place.",
    ],
  },
];
