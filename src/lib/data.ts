export const SITE = {
  name: "EVRION",
  tagline: "We engineer digital momentum",
  email: "hello@evrion.studio",
  url: "https://evrion.studio",
  description:
    "Evrion is a digital product studio crafting premium websites, software, and mobile experiences for ambitious teams of every size.",
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
  /** Public source repository (rendered as a "View source" link). */
  repo?: string;
  /** Optional live deployment URL (rendered as a "Visit live" link). */
  liveUrl?: string;
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
    slug: "skyline",
    title: "Skyline",
    category: "Web App · Weather Analytics",
    year: "2026",
    description:
      "A single-page weather analytics dashboard with live forecasts, an animated precipitation radar, and insights derived from raw data the API never exposes directly.",
    hue: "from-sky-500/40 via-blue-600/20 to-transparent",
    accent: "#38bdf8",
    repo: "https://github.com/Evrionllc/Weather-Website",
    heroImage: "/work/skyline/hero.png",
    meta: [
      { label: "Project", value: "Skyline" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "Web App · Data Viz" },
      { label: "Stack", value: "React · TS · Vite" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Most weather apps tell you the temperature and stop there. Skyline set out to be the one that actually answers the question behind the question — is it a good day to run, how strong is the UV, what does this front actually mean for the next few hours.",
          "It's a single-page dashboard pulling live data from the Open-Meteo API: current conditions, a 24-hour hourly forecast, a 10-day outlook, air quality, and sun-and-moon data, all in one calm, adaptive surface.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A weather dashboard is mostly asynchronous state — every panel is a separate request that can load, fail, or arrive empty, and the page has to stay composed through all of it rather than flashing spinners and layout shifts.",
          "The more interesting challenge was the radar: overlaying live precipitation tiles on a map with a play/pause timeline and a frame scrubber, performant enough to feel like animation rather than a slideshow.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Data, logic, and UI are kept cleanly separated — `src/api`, `src/lib`, and `src/hooks` know nothing about React rendering — so the same core could later power a Tauri desktop or Expo mobile build without a rewrite.",
          "On top of the raw feed sits a small insights layer: a running-conditions score and UV-exposure guidance computed from fields the API doesn't surface directly, plus a one-line natural-language summary of what the numbers actually mean. The whole palette shifts with the weather and time of day.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Skyline ships as a polished, production-shaped dashboard: live forecasts and charts, an animated RainViewer radar with proper attribution, air-quality breakdowns, geolocation with autocomplete search, and persisted favorites and unit preferences.",
          "Every async surface handles loading, error, and success states explicitly, and the adaptive theming respects reduced-motion — the kind of finish that separates a demo from something you'd actually keep open in a tab.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "React 19 + TypeScript on Vite, with TanStack Query handling fetching, caching, and retries, Recharts for the temperature and precipitation graphs, and Leaflet driving the animated map radar over OpenStreetMap tiles.",
          "Framer Motion handles the adaptive transitions, derived insights live in pure, testable functions under `src/lib`, and the moon phase is computed locally rather than fetched — a small touch that keeps the dashboard fast and self-contained.",
        ],
      },
    ],
    gallery: [
      { src: "/work/skyline/1.png", caption: "The weather dashboard — conditions, forecast & derived insights", span: "wide" },
      { src: "/work/skyline/2.png", caption: "Hourly forecast and temperature chart" },
      { src: "/work/skyline/3.png", caption: "Air quality, radar, and sun & moon data" },
    ],
  },
  {
    index: "02",
    slug: "apex-auto",
    title: "Apex Auto Group",
    category: "Web Platform · Automotive",
    year: "2026",
    description:
      "A full-stack car dealership site: searchable inventory with server-side filtering, lead capture, a payment calculator, and a complete admin area for listings, photos, and leads.",
    hue: "from-red-500/40 via-orange-600/20 to-transparent",
    accent: "#f97316",
    repo: "https://github.com/Evrionllc/Car-Dealer-Website",
    heroImage: "/work/apex-auto/hero.png",
    meta: [
      { label: "Project", value: "Apex Auto Group" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "Full-Stack Web" },
      { label: "Stack", value: "Next.js · Prisma · SQLite" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "A dealership website lives or dies on one thing: can a buyer find the right car and get in touch without friction. Apex Auto Group is a complete, production-shaped storefront built around exactly that flow — browse, compare, calculate, inquire.",
          "Behind the public storefront sits a full admin area, so the whole thing is a real two-sided product rather than a static brochure: staff manage inventory, photos, and the lead inbox; buyers never see any of it.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Inventory search has a lot of moving parts — make, model, price, year, mileage, body type, fuel, transmission — and it all has to stay shareable and back-button friendly. State that lives only in component memory breaks the moment someone copies a URL.",
          "On the back of the house, lead capture has to resist spam without punishing real buyers, and the admin area has to be genuinely protected, not just hidden behind an unlinked page.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Every facet of the search — filters, sort, keyword, pagination — lives in the URL and runs server-side, so results are fast, shareable, and indexable. Vehicle pages get a photo gallery with lightbox, full specs, tap-to-call, and tabbed inquiry / test-drive / trade-in forms.",
          "Leads are validated on both client and server with Zod, stored, and emailed to the dealership, with a honeypot and per-IP rate limiting holding back spam. The admin area is locked behind JWT cookie auth with bcrypt-hashed passwords, enforced in middleware.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result runs end-to-end out of the box: seed the SQLite database and you have a browsable showroom with featured vehicles, browse-by-body-type, a clearly-labeled payment estimator, side-by-side compare of up to three cars, and saved favorites.",
          "Admins get full vehicle CRUD with available/pending/sold and featured toggles, multi-image upload with reorder and set-primary, and a lead inbox with a new → contacted → closed workflow. SEO is wired throughout — per-vehicle metadata, schema.org Car data, sitemap, and robots.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 16 (App Router) with TypeScript and Tailwind CSS v4, backed by Prisma 7 over SQLite for a zero-config local database. External services — Resend for email, Cloudinary for images, maps — are wired with real integrations that fall back to sensible local behavior when no keys are set.",
          "Auth is hand-rolled on `jose` JWTs in httpOnly cookies with bcrypt hashing, and every admin route is gated in middleware so protection doesn't depend on the UI hiding a link.",
        ],
      },
    ],
    gallery: [
      { src: "/work/apex-auto/1.png", caption: "Inventory with server-side filtering, sort & search", span: "wide" },
      { src: "/work/apex-auto/2.png", caption: "Vehicle detail — gallery, specs, and inquiry forms" },
      { src: "/work/apex-auto/3.png", caption: "Financing & payment calculator" },
    ],
  },
  {
    index: "03",
    slug: "emberhaus",
    title: "Emberhaus",
    category: "E-commerce · Storefront",
    year: "2026",
    description:
      "A production-shaped coffee storefront with a real Stripe checkout — where the amount charged is computed on the server and orders are confirmed by a signature-verified webhook, never the browser.",
    hue: "from-amber-500/40 via-orange-700/20 to-transparent",
    accent: "#f59e0b",
    repo: "https://github.com/Evrionllc/E-commerce-Website",
    heroImage: "/work/emberhaus/hero.png",
    meta: [
      { label: "Project", value: "Emberhaus" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "E-commerce" },
      { label: "Stack", value: "Next.js · Stripe · Postgres" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Emberhaus is a storefront for a small-batch coffee roaster — browse products, fill a cart, and check out with Stripe in test mode. On the surface it's a clean, fast shop.",
          "The real point of the project is the part a shopper never sees: doing the money correctly. Plenty of demo stores trust the browser for prices and call a redirect a sale. This one deliberately doesn't.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "The single most common e-commerce vulnerability is trusting client-supplied prices or treating the post-checkout redirect as proof of payment. Both are exploitable, and both are tempting because they're easier.",
          "The challenge was to build the storefront so that the secure path is the only path — the server is the sole authority on what something costs and whether it was actually paid for.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Every amount is recomputed on the server from the database at checkout time; the cart in the browser is a convenience, never a source of truth. Payment runs through the Stripe Payment Element in test mode.",
          "Order fulfillment is driven entirely by a signature-verified Stripe webhook against the raw request body — the browser redirect just says 'thanks', while the webhook is what actually marks an order paid. Auth.js handles credentials, JWT sessions, and roles.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Emberhaus is a complete, end-to-end commerce flow — catalog, cart, checkout, order confirmation, and an account view — that's honest about where trust lives. No real money moves, but the architecture is the one you'd ship if it did.",
          "Even the product imagery is self-generated SVG and every brand name invented, so the whole thing runs cleanly with no licensing baggage.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 16 (App Router) + React 19 in TypeScript, Tailwind CSS v4, PostgreSQL via Prisma 6, and Auth.js (NextAuth v5) for credentials-based auth with roles. Cart state is held in Zustand.",
          "Stripe runs in test mode behind the Payment Element, with the webhook verifying signatures against the raw body before it confirms anything — the load-bearing detail that makes the whole flow trustworthy.",
        ],
      },
    ],
    gallery: [
      { src: "/work/emberhaus/1.png", caption: "The storefront — the roaster's product catalog", span: "wide" },
      { src: "/work/emberhaus/2.png", caption: "Product detail — House Blend" },
      { src: "/work/emberhaus/3.png", caption: "Product detail — Nightfall Dark Roast" },
    ],
  },
  {
    index: "04",
    slug: "haven-finch",
    title: "Haven & Finch",
    category: "Web Platform · Real Estate",
    year: "2025",
    description:
      "A real-estate listings platform with a list/map split, a multi-stage filtering pipeline, mortgage estimates, saved favorites, and an authenticated admin area for CRUD and image upload.",
    hue: "from-emerald-500/40 via-teal-600/20 to-transparent",
    accent: "#34d399",
    repo: "https://github.com/Evrionllc/Real-Estate-Listing-Website",
    heroImage: "/work/haven-finch/hero.png",
    meta: [
      { label: "Project", value: "Haven & Finch" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Full-Stack Web" },
      { label: "Stack", value: "React · Express · SQLite" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Browsing property is a fundamentally spatial task — people want to see where a listing actually is, not just read its address. Haven & Finch is built around a list-and-map split where the two stay in sync as you search.",
          "It's a full product: browse and filter listings, open detail pages with a gallery, compare options, estimate a mortgage, save favorites, and submit an inquiry — plus an authenticated admin side for managing the catalog.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Real-estate filtering is deceptively deep: price, beds, baths, type, and location all compose, and the map and the list have to reflect the same filtered set without drifting out of sync or re-fetching the world on every keystroke.",
          "It also needed a clean separation between a public browsing experience and a protected admin area that can create, edit, and upload images for listings — two very different surfaces over one dataset.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "The client runs a single filtering pipeline that feeds both the list and the MapLibre GL map, so panning, filtering, and selecting all operate on one consistent result set. Favorites and compare are first-class, and a mortgage estimator turns a price into a monthly number on the spot.",
          "The server is a focused Express API over SQLite that seeds 45 listings and an admin user on first run, with JWT auth protecting the admin routes and multer handling image uploads. The two halves run together with one command.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The platform delivers the whole loop a property site needs: search and filter, a synced list/map view, rich detail pages with galleries, favorites, compare, mortgage math, and inquiries — backed by an admin who can manage everything behind a login.",
          "Because it seeds itself on first run, the entire two-workspace app comes up with realistic data from a single `npm run dev`.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Client: React + Vite, Tailwind CSS v4, React Router, and MapLibre GL JS for the interactive map. Server: Node + Express with SQLite via better-sqlite3, JWT auth, and multer for uploads.",
          "A workspace setup wires the two together — `concurrently` runs the API on :4000 and the Vite client on :5173, with the client proxying `/api` and `/uploads` to the server.",
        ],
      },
    ],
    gallery: [
      { src: "/work/haven-finch/1.png", caption: "List & map split, kept in sync as you search", span: "wide" },
      { src: "/work/haven-finch/2.png", caption: "Property detail with gallery & mortgage estimate" },
      { src: "/work/haven-finch/3.png", caption: "Saved favorites" },
    ],
  },
  {
    index: "05",
    slug: "ascend-academy",
    title: "Ascend Academy",
    category: "SaaS Platform · Education",
    year: "2026",
    description:
      "A paid subscription learning platform with server-side tier gating, Stripe checkout, billing portal, and webhooks — where access is always decided on the server, never the client.",
    hue: "from-violet-500/40 via-indigo-600/20 to-transparent",
    accent: "#8b5cf6",
    repo: "https://github.com/Evrionllc/Education-Website",
    heroImage: "/work/ascend-academy/hero.png",
    meta: [
      { label: "Project", value: "Ascend Academy" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "SaaS · Subscriptions" },
      { label: "Stack", value: "Next.js · Prisma · Stripe" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Ascend Academy is a complete paid-membership education platform: a sequenced curriculum across nine pillars, downloadable resources, a live-session hub, and tiered access from a free explorer plan up to 1:1 mentorship.",
          "The interesting part of any subscription product isn't the content — it's getting access control right so that paying gates actually hold. That's the spine the whole build is organized around.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Tier gating is one of those features that's easy to fake and hard to get right. Hide a lesson with a CSS class and anyone can read it in devtools; trust the post-checkout redirect and a refund or a lapsed card still leaves the door open.",
          "Access had to be the user's effective, current tier — honoring subscription status and period end — and it had to be enforced on the server for every protected page, with Stripe webhooks as the source of truth.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Every protected page calls `getCurrentUser()` and `canAccess(user, requiredTier)` on the server before rendering. A subscription only counts if it's active or trialing and hasn't lapsed past its current period end — the tier is computed, not stored blindly.",
          "Stripe Checkout, Billing, and the Customer Portal handle the money, and signature-verified, idempotent webhooks (deduped through a ProcessedEvent table) are the authority on who can access what — not the redirect the browser lands on.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The platform runs out of the box with zero external services — SQLite plus a built-in demo-mode checkout — and upgrades to real Stripe test mode the moment you paste in keys. Seeded demo accounts cover the free, member, and premium tiers.",
          "What ships is a genuinely complete membership product: a member dashboard, gated curriculum, downloadable worksheets, a live-session hub, and the full set of public and legal pages, all sitting on access control that's enforced where it actually matters.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 16 (App Router) + React 19 + TypeScript with server components and server actions, Tailwind CSS, and Prisma over SQLite in dev (a one-line swap to Postgres for production). Auth is bcrypt plus a signed JWT in an httpOnly cookie, edge-verified in middleware and authoritatively re-checked server-side.",
          "Payments run through Stripe Checkout, Billing, the Customer Portal, and webhooks, with a clean fall-back to demo mode when no keys are present — so the security model is demonstrable even with nothing configured.",
        ],
      },
    ],
    gallery: [
      { src: "/work/ascend-academy/1.png", caption: "The curriculum across nine pillars", span: "wide" },
      { src: "/work/ascend-academy/2.png", caption: "Tiered subscription pricing" },
      { src: "/work/ascend-academy/3.png", caption: "About the academy" },
    ],
  },
  {
    index: "06",
    slug: "physics-lab",
    title: "Physics·Lab",
    category: "Web App · Interactive Simulation",
    year: "2025",
    description:
      "An interactive physics simulator: five classical-mechanics models running in real time on a shared fixed-timestep RK4 integrator, each with live charts, adjustable parameters, and selectable planetary gravity.",
    hue: "from-cyan-500/40 via-teal-600/20 to-transparent",
    accent: "#22d3ee",
    repo: "https://github.com/Evrionllc/Physics-Simulator-Website",
    heroImage: "/work/physics-lab/hero.png",
    meta: [
      { label: "Project", value: "Physics·Lab" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Simulation · Data Viz" },
      { label: "Stack", value: "React · Vite · RK4" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Physics·Lab turns the browser into a working mechanics lab. Five classical simulations — a damped spring, projectile motion, energy in a bouncing ball, a double pendulum, and orbital mechanics — run live, each with adjustable parameters, preset scenarios, and charts that update as the system evolves.",
          "It's the kind of thing that's easy to fake with canned animations and genuinely hard to do right: real numerical integration that stays stable, conserves what it should, and reveals chaos where it should.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Naive physics integration drifts — energy leaks, orbits spiral, and chaotic systems become frame-rate-dependent nonsense. A double pendulum integrated carelessly will give a different answer on a 60Hz screen than a 144Hz one, which defeats the entire point.",
          "And rendering: pushing every physics substep into a chart would either choke the UI or melt memory, so the visualization had to stay smooth without dropping the fidelity of the simulation underneath it.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "All five models share one fixed-timestep RK4 integrator, so the chaotic and orbital systems stay stable and reproducible regardless of frame rate. The physics lives in pure, framework-agnostic functions — state to derivatives to RK4 — completely separate from rendering, which makes it unit-testable and reusable across every sim.",
          "Charts read from rolling, throttled buffers that keep memory bounded and avoid re-rendering on every substep, and the canvases are high-DPI and responsive. Each sim can even run under a different planet's gravity.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The undamped spring validates the integrator against the known analytic solution; orbital mechanics conserves energy and angular momentum and traces clean Kepler ellipses; twin double-pendulum runs visibly diverge to demonstrate deterministic chaos. The physics is correct, not just pretty.",
          "Because the math is isolated in pure functions, it's covered by tests and could be lifted straight into another project — a small simulation engine that happens to ship with a polished dashboard around it.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "React + Vite with React Router and Recharts. The core is a pure RK4 integrator with one math module per model under `src/physics`, unit-tested in isolation; custom hooks handle the fixed-timestep animation loop, responsive canvas sizing, throttled chart buffers, and cross-sim stats.",
          "Planetary gravity data is fetched with a cache and an offline fallback, so swapping the gravity constant per simulation never blocks the render.",
        ],
      },
    ],
    gallery: [
      { src: "/work/physics-lab/1.png", caption: "Projectile motion against the ideal vacuum parabola", span: "wide" },
      { src: "/work/physics-lab/2.png", caption: "Double pendulum — twin runs revealing chaos" },
      { src: "/work/physics-lab/3.png", caption: "Orbital mechanics — conserved energy & angular momentum" },
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
    id: "evrion-os",
    group: "ongoing",
    title: "Evrion OS",
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
      "Evrion operates like a senior product team that happens to sit outside our building. They challenged our assumptions, then shipped a platform our users genuinely love.",
    name: "Sarah Lindqvist",
    role: "VP of Product, Helios Grid",
  },
  {
    quote:
      "We interviewed nine agencies. Evrion was the only one that talked about our business model before talking about technology. They've been our team ever since.",
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
    index: "07",
    slug: "taskhaus",
    title: "Taskhaus",
    category: "SaaS · Team Productivity",
    outcome: "Server-enforced multi-tenancy, with Postgres RLS as a backstop",
    year: "2026",
    description:
      "A multi-tenant team task and project manager built to demonstrate the hard part of SaaS done right: authentication, multi-tenancy, and role-based authorization enforced on the server.",
    hue: "from-indigo-500/40 via-blue-600/20 to-transparent",
    accent: "#6366f1",
    repo: "https://github.com/Evrionllc/Task-Project-Managment-Webapp",
    heroImage: "/work/taskhaus/hero.png",
    meta: [
      { label: "Project", value: "Taskhaus" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "SaaS · Auth & Tenancy" },
      { label: "Stack", value: "Next.js · Prisma · Postgres" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Taskhaus looks like a team task board — organizations, projects, tasks, roles, invitations — but the board is the easy part. The project exists to show the plumbing underneath it: authentication, multi-tenancy, and authorization that actually holds.",
          "Anyone can draw a Kanban column. The interesting question is whether a user from one organization can reach another organization's data — and here the answer is a hard no, enforced in several independent ways.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Multi-tenant authorization is where SaaS products quietly leak. Trust a client-supplied org id, forget a `where` clause, or lean on the UI to hide a button, and you've shipped an IDOR that hands one customer another customer's data.",
          "The goal was a model where authorization is re-derived from the trusted session on every request, and where even a forgotten filter fails closed rather than open.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Identity comes from a Better Auth session cookie; the active org is resolved from the URL slug only after confirming the user is a member — a non-member gets a 404, so the app won't even admit the org exists. Every mutating action runs a `can(role, action)` check, and every tenant query is org-scoped so a foreign id simply matches zero rows.",
          "Postgres Row-Level Security sits underneath as a database-level backstop: data queries run through a non-superuser role with a transaction-local org id, so even a query that forgot its filter returns nothing across tenants.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a working task manager whose real value is its security posture: four layers of tenant isolation — membership checks, permission checks, org-scoped queries, and RLS — each of which independently fails closed.",
          "Better Auth owns only the dangerous primitives (password hashing, sessions, cookies); the organization, membership, role, and permission logic is written by hand and out in the open, which is the entire point.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 16 (App Router) + React 19 + TypeScript, PostgreSQL 16 via Prisma 7 on the `@prisma/adapter-pg` driver adapter, Better Auth for primitives, and Tailwind CSS 4. Tenancy, roles, and the `can()` permission layer live in `src/lib/permissions.ts` and `src/lib/tenancy.ts`.",
          "RLS policies in `prisma/sql/rls.sql` filter every row by a transaction-local `app.current_org_id` set through `withTenant()`, and the suite is covered by Vitest.",
        ],
      },
    ],
    gallery: [
      { src: "/work/taskhaus/1.png", caption: "The kanban board with optimistic create / move", span: "wide" },
      { src: "/work/taskhaus/2.png", caption: "Projects across the workspace" },
      { src: "/work/taskhaus/3.png", caption: "Members & role management" },
    ],
  },
  {
    index: "08",
    slug: "ledgerly",
    title: "Ledgerly",
    category: "Web App · Personal Finance",
    outcome: "Money stored as integer cents; every query scoped to the user",
    year: "2026",
    description:
      "A production-ready budgeting web app: track income and expenses, set budgets, automate recurring transactions, chart spending, and reach savings goals — with money stored as integer cents, never floats.",
    hue: "from-emerald-500/40 via-green-600/20 to-transparent",
    accent: "#10b981",
    repo: "https://github.com/Evrionllc/Budgeting-WebApp-App",
    heroImage: "/work/ledgerly/hero.png",
    meta: [
      { label: "Project", value: "Ledgerly" },
      { label: "Year", value: "2026" },
      { label: "Discipline", value: "Full-Stack Web" },
      { label: "Stack", value: "Next.js · Supabase · Prisma" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Ledgerly is a cloud-backed personal budgeting app: log income and expenses, set per-category budgets, automate recurring transactions, watch the charts, and work toward savings goals from any browser on any device.",
          "It's designed to be the unglamorous-but-correct kind of finance software — the sort where the details that don't show up in a screenshot are the ones that matter most.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Money and time are the two things finance apps get subtly wrong. Floating-point math quietly corrupts totals over thousands of transactions, and naive date handling reports the wrong month the moment a user crosses a timezone.",
          "On top of that, a multi-user finance app has zero tolerance for data leaking between accounts — every read and write has to be scoped to the authenticated user, without exception.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Every amount is stored as an integer in minor units — cents, never floats — and all month and timezone logic is computed in the user's own timezone, so the dashboard's 'this month' is genuinely theirs. The client never touches the database directly.",
          "Each API route calls `requireUser()` to verify the Supabase JWT and scopes every query to that user. Domain logic — money, dates, stats, recurring rules, validation — lives in a dedicated `lib` layer behind Zod validation, kept honest by tests.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Ledgerly ships the full feature set you'd expect and several you might not: a monthly dashboard with category breakdowns and trend charts, per-category budgets with rollover and over-budget alerts, recurring transactions posted by a daily cron with catch-up, savings goals, multiple wallets, and CSV import/export.",
          "It also covers the basics properly — email verification, password reset, dark mode, localization, and real accessibility — and is built to run for $0 on free tiers.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js (App Router) + TypeScript + Tailwind CSS over a clean JSON API, so a future mobile or desktop client can reuse the same backend. Supabase provides managed Postgres and Auth, with Prisma as the ORM and TanStack Query and Table on the front end.",
          "Every route enforces per-user scoping after verifying the Supabase JWT, and the money/date/stats/recurring logic is isolated in `lib` so the rules that matter are tested in one place.",
        ],
      },
    ],
    gallery: [
      { src: "/work/ledgerly/1.png", caption: "The product landing — track, budget, and save", span: "wide" },
      { src: "/work/ledgerly/2.png", caption: "Secure sign in" },
      { src: "/work/ledgerly/3.png", caption: "Create a free account" },
    ],
  },
  {
    index: "09",
    slug: "ripple",
    title: "Ripple",
    category: "Web App · Real-time Chat",
    outcome: "Live 1:1 and group chat with presence and reconnect recovery",
    year: "2025",
    description:
      "A full-stack real-time chat app: 1:1 and group conversations, persistent history, live presence, typing indicators, unread counts, optimistic send, and recovery after a dropped connection.",
    hue: "from-rose-500/40 via-fuchsia-600/20 to-transparent",
    accent: "#f43f5e",
    repo: "https://github.com/Evrionllc/Real-time-Chat-Webapp",
    heroImage: "/work/ripple/hero.png",
    meta: [
      { label: "Project", value: "Ripple" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Real-time Web" },
      { label: "Stack", value: "React · Socket.IO · Postgres" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Ripple is a real-time chat app with the features people actually expect from one: direct and group conversations, persistent history, presence, typing indicators, and unread counts that stay correct as you move between rooms.",
          "Chat is one of those deceptively simple-looking products — easy to demo, hard to make feel solid once the network gets involved.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Real-time UIs have to feel instant while staying truthful. A message should appear the moment you hit send, but it also has to reconcile with what the server actually persisted — and the whole thing has to survive a dropped connection without losing or duplicating messages.",
          "Presence and typing indicators add live, ephemeral state that needs to scale across many sockets without hammering the database for every keystroke.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Sends are optimistic — the message shows immediately and reconciles against the server's confirmation — and the client recovers gracefully after a reconnect, catching up on anything it missed while offline. History is persisted in Postgres so conversations survive restarts.",
          "Live, ephemeral signals like presence and typing run over Socket.IO with Redis coordinating state across connections, keeping the volatile data off the primary database.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Ripple delivers the complete real-time loop: instant optimistic sends, live updates across rooms, presence, typing indicators, accurate unread counts, and clean reconnect recovery — the details that decide whether a chat app feels trustworthy or flaky.",
          "It's split into a clear client/server architecture, so the real-time layer and the React app each stay focused on one job.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "React + Vite on the client; Node/Express with Socket.IO on the server, backed by PostgreSQL for persistent history and Redis for presence and cross-socket coordination. JWT auth secures the API and socket connections.",
          "The server exposes a REST API alongside the socket layer, with a SQL schema and migration step, so message history and live events share one coherent backend.",
        ],
      },
    ],
    gallery: [
      { src: "/work/ripple/1.png", caption: "A direct conversation with persisted history", span: "wide" },
      { src: "/work/ripple/2.png", caption: "A group conversation room" },
      { src: "/work/ripple/3.png", caption: "Conversations with last-message previews" },
    ],
  },
  {
    index: "10",
    slug: "osteria-fiorella",
    title: "Osteria Fiorella",
    category: "Marketing Site · Restaurant",
    outcome: "Mobile-first restaurant site with rich, indexable JSON-LD",
    year: "2025",
    description:
      "A complete, mobile-first website for a modern Italian trattoria: menu, online order, reservations, gallery, and contact — with the menu rendered as real, indexable HTML and full schema.org structured data.",
    hue: "from-amber-500/40 via-red-600/20 to-transparent",
    accent: "#ef4444",
    repo: "https://github.com/Evrionllc/Restaurant-Website",
    heroImage: "/work/osteria-fiorella/hero.png",
    meta: [
      { label: "Project", value: "Osteria Fiorella" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Web Design · SEO" },
      { label: "Stack", value: "Next.js · TS · Tailwind" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Osteria Fiorella is a full marketing site for a fictional modern Italian trattoria in Carroll Gardens, Brooklyn — built end to end through a real design, architecture, and code workflow rather than dropped into a template.",
          "It covers everything a restaurant actually needs online: a hero and story, a real menu, online ordering, reservations, a gallery, and contact details that a search engine can read as cleanly as a human.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Most restaurant sites bury their menu in a PDF, which is invisible to search and miserable on a phone. The menu here had to be real, structured HTML that's indexable, accessible, and the single source of truth for both the page and its structured data.",
          "And the interactive flows — ordering, reservations, contact — had to feel real and complete without taking real payments or collecting card data in a portfolio context.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "The restaurant's details and menu live in typed data files that drive both the rendered pages and the schema, so the menu, prices, and dietary flags can never drift out of sync with the JSON-LD. Ordering and reservations are realistic mock flows — client-side state with simulated confirmation — clearly scoped so no real payment ever happens.",
          "The whole thing is mobile-first and accessible by construction: semantic HTML, a skip link, visible focus rings, ≥44px tap targets, and reduced-motion support, with meaning never carried by color alone.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The site delivers rich SEO out of the box — per-page metadata, Open Graph, sitemap, robots, and deep JSON-LD: Restaurant plus a full Menu and MenuItem graph and site-wide AggregateRating, with a FAQPage on contact.",
          "It's documented with a clear 'going live' path to wire in real ordering, reservations, and payments — a portfolio piece that's genuinely deploy-ready rather than a mockup.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, deployable to Vercel. A single `restaurant.ts` holds name, hours, geo, and rating; a structured `menu.ts` drives both the menu page and its schema.",
          "Pages are real, indexable HTML throughout — the menu especially — so the SEO benefits aren't bolted on but fall out of how the content is modeled.",
        ],
      },
    ],
    gallery: [
      { src: "/work/osteria-fiorella/1.png", caption: "The menu as real, indexable HTML", span: "wide" },
      { src: "/work/osteria-fiorella/2.png", caption: "The story & about page" },
      { src: "/work/osteria-fiorella/3.png", caption: "The reservation flow" },
    ],
  },
  {
    index: "11",
    slug: "klok",
    title: "Klok",
    category: "Marketing Site · SaaS",
    outcome: "Conversion-focused landing with a zero-weight CSS hero mockup",
    year: "2025",
    description:
      "A production-quality landing page for a SaaS time-tracking product aimed at freelance designers — a study in design-systems thinking, accessibility, and front-end restraint.",
    hue: "from-violet-500/40 via-purple-600/20 to-transparent",
    accent: "#7c5cfc",
    repo: "https://github.com/Evrionllc/SaaS-Landing-Page",
    heroImage: "/work/klok/hero.png",
    meta: [
      { label: "Project", value: "Klok" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Web Design" },
      { label: "Stack", value: "Next.js · React · TS" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Klok is a landing page for a deliberately narrow audience: freelance designers and small studios who bill by the hour. The whole page is organized around one promise — track billable hours without breaking your flow, then bill them in a click.",
          "A narrow audience makes every decision sharper, from the copy to the mockup to the pricing tiers, and that focus is the point of the piece.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "When your audience is designers, the page itself has to look designed — there's nowhere to hide. It needed real craft: a disciplined type scale, consistent spacing rhythm, and a clear visual hierarchy that always points to the primary action.",
          "It also had to be fast and razor-sharp on any display, which ruled out the usual approach of dropping in a screenshot for the hero product mockup.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "A single reserved violet accent is used only for CTAs and emphasis against a warm off-white and near-black ink, so visitors always know where the primary action is. The layout leans on generous whitespace, a 4/8px spacing rhythm, soft layered shadows, and a Plus Jakarta Sans / Inter type pairing.",
          "The hero product mockup is built entirely in HTML and CSS rather than an image — so it stays sharp at any resolution, adds zero image payload, and sidesteps licensing entirely. Each section follows the same headline → benefit → proof → action rhythm.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a fully responsive, accessible, conversion-focused landing page that demonstrates front-end fundamentals and design-systems thinking — every brand, quote, and statistic invented, with licensing documented in CREDITS.",
          "It's the kind of page that proves a point: restraint, hierarchy, and a single well-used accent often beat decoration.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js + React + TypeScript with a tight, hand-built design system — reserved accent, fixed spacing scale, and a constrained type ramp — rather than a UI kit.",
          "The zero-weight CSS hero mockup is the signature technical choice: a believable product UI rendered in markup, keeping the page light and crisp everywhere.",
        ],
      },
    ],
    gallery: [
      { src: "/work/klok/1.png", caption: "The full landing page, top to bottom", span: "wide" },
      { src: "/work/klok/2.png", caption: "Feature sections with the reserved violet accent" },
      { src: "/work/klok/3.png", caption: "Pricing — Solo to Collective" },
    ],
  },
  {
    index: "12",
    slug: "techconsult-pro",
    title: "TechConsult Pro",
    category: "Marketing Site · Consulting",
    outcome: "Booking-driven consulting site with Calendly and Resend",
    year: "2025",
    description:
      "A professional services website for a software-consulting firm: a dark, credible marketing site that converts visitors into booked consultations through an embedded Calendly scheduler and a serverless contact form.",
    hue: "from-blue-500/40 via-cyan-600/20 to-transparent",
    accent: "#0ea5e9",
    repo: "https://github.com/Evrionllc/Consulting-Website-Booking-Scheduling-Website-",
    heroImage: "/work/techconsult-pro/hero.png",
    meta: [
      { label: "Project", value: "TechConsult Pro" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Web Design · Lead Gen" },
      { label: "Stack", value: "Next.js · Calendly · Resend" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "TechConsult Pro is a marketing site for a technical software-consulting firm, with one job: present services credibly, build trust, and turn a visitor into a booked consultation.",
          "It spans the full set of pages a real firm needs — Home, Services with six data-driven sub-pages, About, Case Studies, Pricing, and Contact — in a dark, professional theme.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A lead-gen site is only as good as its conversion path. Booking and contact had to be frictionless and reliable, but a portfolio build can't assume API keys are configured — so the site needed to degrade gracefully rather than break when nothing is wired up.",
          "It also had to stay clean of third-party logos, stock photography, and trademarks while still looking polished and trustworthy.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Conversion runs on two paths: an embedded Calendly scheduler — inline on Contact and as popup 'Book a Consultation' buttons sitewide — and a serverless contact form that validates input, blocks spam with a honeypot, and forwards submissions by email through Resend.",
          "Crucially, the site runs fine with no environment variables: the contact form returns a clear 'not configured' message and the booking widgets show a friendly 'coming soon' fallback, so it's always demonstrable. All imagery is CSS gradients and custom SVG patterns plus MIT-licensed icons.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a responsive, accessible, Vercel-ready consulting site whose entire structure is built to move a visitor toward a booked call — with SEO handled through per-page metadata, a sitemap, robots, and semantic HTML.",
          "Because every visual is original and every integration falls back cleanly, it deploys and demos without any setup, then turns on real booking and email the moment keys are added.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Next.js 15 (App Router) + React 19 and Tailwind CSS v4, with `react-calendly` for scheduling and Resend for transactional email, deployed on Vercel. The six service sub-pages are data-driven from a single source.",
          "The recipient address and Calendly URLs live in environment variables, and every integration is written to no-op gracefully when those vars are absent.",
        ],
      },
    ],
    gallery: [
      { src: "/work/techconsult-pro/1.png", caption: "The data-driven services overview", span: "wide" },
      { src: "/work/techconsult-pro/2.png", caption: "Case studies" },
      { src: "/work/techconsult-pro/3.png", caption: "Pricing & engagement tiers" },
    ],
  },
  {
    index: "13",
    slug: "lumen-notes",
    title: "Lumen Notes",
    category: "Desktop App · Productivity",
    outcome: "Fast, vault-based markdown editor with a custom CodeMirror theme",
    year: "2025",
    description:
      "A lightweight, fast markdown note-taking editor for the desktop: point it at a folder and every note appears in a sidebar tree, with a CodeMirror 6 editor, live preview, autosave, and optional Vim keybindings.",
    hue: "from-slate-400/40 via-blue-600/20 to-transparent",
    accent: "#64748b",
    repo: "https://github.com/Evrionllc/Note-Taking-Desktop-App",
    heroImage: "/work/lumen-notes/hero.png",
    meta: [
      { label: "Project", value: "Lumen Notes" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "Desktop App" },
      { label: "Stack", value: "Electron · React · CodeMirror" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Lumen Notes is a desktop markdown editor built around a simple idea: your notes are just files. Point it at a folder and every `.md` and `.txt` file shows up in a sidebar tree — no proprietary database, no lock-in, no sync account required.",
          "It's a focused, fast writing tool with the editor at the center and everything else kept out of the way.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A file-backed editor has to coexist with the rest of the system rather than own its data. That means handling files edited outside the app, saving often enough that nothing is ever lost but not so often that it thrashes the disk, and never clobbering a user's unsaved work when a file changes underneath it.",
          "On top of that, a code-grade editing experience — syntax highlighting, search, optional Vim mode — needed to feel instant inside a desktop shell.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "The editor is CodeMirror 6 with live markdown highlighting, line numbers, word wrap, and optional Vim keybindings, paired with a markdown-it live preview that syntax-highlights code blocks and offers Edit / Split / Preview modes. Autosave debounces writes 600ms after you stop typing.",
          "External-change detection reloads files edited elsewhere automatically — but only when there's no unsaved work to protect. File and folder management (create, inline rename, delete to system trash) all happens from the sidebar.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Lumen Notes ships as a complete, themeable desktop app: light, dark, and system themes with a custom-built CodeMirror theme, and a settings panel for font, size, tab width, keybindings, default view, line numbers, and word wrap — all persisted between sessions.",
          "It packages to native installers for macOS, Windows, and Linux, so it's a real distributable application rather than a web demo in a window.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Electron + React + CodeMirror 6, bundled with electron-vite (HMR in dev) and packaged via electron-builder. State is held in Zustand, settings persist through electron-store, and chokidar watches the vault for external changes.",
          "Markdown rendering uses markdown-it with highlight.js for code blocks, and the CodeMirror theme is hand-built so the editing surface matches the app's light/dark modes exactly.",
        ],
      },
    ],
    gallery: [
      { src: "/work/lumen-notes/1.png", caption: "Split view — CodeMirror editor and live preview", span: "wide" },
      { src: "/work/lumen-notes/2.png", caption: "Another note open from the vault" },
      { src: "/work/lumen-notes/3.png", caption: "Markdown with syntax-highlighted code blocks" },
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
    author: "Evrion Team",
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
    author: "Evrion Team",
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
    author: "Evrion Team",
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
