export const SITE = {
  name: "EVRION",
  tagline: "Software your business can stand on",
  email: "contact@evrionllc.com",
  url: "https://evrionllc.com",
  // Contact number shown to users, plus the E.164 digits (US +1) used to build
  // the wa.me deep link for the WhatsApp widget.
  phone: "(551) 258-7590",
  whatsapp: "15512587590",
  description:
    "Evrion is a precision software studio crafting premium websites, software, and mobile experiences for ambitious teams of every size.",
};

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  // Blog is hidden for now — the /blog route and its content still exist,
  // it's just unlinked from the nav. Re-add this line to bring it back.
  // { label: "Blog", href: "/blog" },
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
  /** How we work — shown as the "Approach" block in the detail modal */
  approach: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Web Applications",
    description:
      "Thoughtfully designed interfaces and web systems built for clarity, speed, and long-term use.",
    overview:
      "We design and build websites that prioritize structure, usability, and long-term maintainability. Every interface is shaped by clarity, not decoration.",
    included: [
      "Brand & visual identity",
      "Design systems",
      "Responsive engineering handoff",
      "API integration",
      "Performance optimization",
    ],
    approach:
      "We treat web products as systems, not pages—ensuring every layer supports scalability and long-term stability.",
    tags: ["Creative Direction", "Design Systems", "Motion Design"],
  },
  {
    index: "02",
    title: "Custom Software",
    description:
      "Custom platforms and SaaS products engineered for scale, clarity, maintainability, and long-term evolution.",
    overview:
      "We design and build custom software systems that support real business operations (not just prototypes or surface-level applications) and are engineered to scale as you grow.",
    included: [
      "Full-stack architecture",
      "Cloud infrastructure & DevOps",
      "API design & development",
      "Database modeling",
      "Performance & security hardening",
    ],
    approach:
      "We focus on structure and maintainability from day one, ensuring systems remain understandable as they grow.",
    tags: ["SaaS Platforms", "APIs & Integrations", "Cloud Architecture"],
  },
  {
    index: "03",
    title: "Mobile Applications",
    description:
      "Native-quality mobile experiences built for performance, reliability, and consistency.",
    overview:
      "We build native-quality mobile applications that feel natural, responsive, and stable across both iOS and Android environments. We manage release and post-launch iteration—so your product keeps improving long after launch day.",
    included: [
      "iOS & Android development",
      "Cross-platform development (if needed)",
      "UI implementation",
      "Backend integration",
      "Performance optimization",
      "App Store & Play Store release",
    ],
    approach:
      "We prioritize smooth interaction, stability, and long-term maintainability over feature excess.",
    tags: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    index: "04",
    title: "UI/UX Design",
    description:
      "Structured product design focused on clarity, usability, and system-level thinking.",
    overview:
      "We design interfaces that reduce friction and bring structure to complex systems. The goal is clarity at every interaction.",
    included: [
      "User research & product structure",
      "Interactive prototype",
      "High-fidelity UI design",
      "Design systems",
      "Usability testing",
    ],
    approach:
      "We design from systems outward—not screens inward—ensuring consistency and scalability across the product.",
    tags: ["Product Design", "Prototyping", "User Research"],
  },
  {
    index: "05",
    title: "Engineering Support",
    description:
      "Focused engineering support integrated directly into your product development process.",
    overview:
      "We integrate directly into your workflow to support ongoing development, feature work, and system improvements.",
    included: [
      "Feature development",
      "Codebase improvements",
      "Architecture support",
      "Technical maintenance",
      "Collaboration with internal teams",
    ],
    approach:
      "You work directly with the engineers building your product—no layers, no handoffs, no fragmentation.",
    tags: ["Feature Development", "Maintenance", "Architecture Support"],
  },
  {
    index: "06",
    title: "Technical Consulting",
    description:
      "Architecture and product guidance focused on clarity, structure, and long-term decision-making.",
    overview:
      "We provide architecture reviews, technology strategy, and technical due diligence. We help teams make better technical decisions around architecture, scalability, and product direction.",
    included: [
      "Architecture and code review",
      "Technical due diligence",
      "Team & process assessment",
      "Scalability planning",
      "Technology strategy & roadmaps",
      "Product technical strategy",
    ],
    approach:
      "We focus on reducing complexity and improving long-term clarity in technical systems.",
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
    slug: "streaklet",
    title: "Streaklet",
    category: "Mobile App · Habits",
    year: "2025",
    description:
      "A fully offline iOS habit tracker built with SwiftUI and SwiftData — one-tap logging, four frequency modes, streaks and completion rates derived from history, and a heatmap of every day you showed up.",
    hue: "from-blue-500/40 via-indigo-600/20 to-transparent",
    accent: "#3b82f6",
    repo: "https://github.com/Evrionllc/Habit-Tracker-App",
    heroImage: "/work/streaklet/hero.png",
    meta: [
      { label: "Project", value: "Streaklet" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · SwiftUI" },
      { label: "Stack", value: "SwiftUI · SwiftData" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Streaklet is a native iOS habit tracker: create habits to build or break, log them with a single tap, and watch streaks grow. It's built entirely with SwiftUI and SwiftData, with no third-party dependencies and no network anywhere — everything lives on the device.",
          "The whole app is organized around one daily moment: open it, see exactly what's due today, and tick things off in a second.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Habit apps quietly rot when their numbers drift. If a streak or completion rate is stored and then updated by hand, a single missed write or an edited log leaves the stats lying — and a habit tracker that lies about your streak is worse than none.",
          "It also had to respect real life: partial progress, back-dating a missed day, four different frequency rules, and a Today screen that shows only what's actually due — all while staying fast and fully offline.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Streaks, longest streaks, and completion rates are never stored — they're derived on the fly from the log of completions against each habit's frequency. That single decision means the stats can't drift out of sync, because there's nothing to keep in sync.",
          "Logging supports partial progress and back-dating via a week strip, reminders run through local notifications with no server, and the whole thing ships with onboarding templates, dark mode, haptics, a reorderable list, and JSON export.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a complete, offline-first tracker: a Today view that surfaces only what's due, a Stats screen with completion charts and current streaks, and a per-habit detail with a history heatmap and 30-day trend.",
          "Because it's dependency-free and local-first, it launches instantly, works with no signal, and keeps every byte of habit data on the user's phone.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built for iOS with SwiftUI and SwiftData for local persistence, Swift Charts for the trend and heatmap, and UNUserNotificationCenter for offline reminders. Habit and HabitLog are the only stored models; HabitStats is computed, never saved.",
          "Empty and permission-denied states, a completion animation, and a debug demo-seed for screenshots round out a genuinely shippable app.",
        ],
      },
    ],
    gallery: [
      { src: "/work/streaklet/1.png", caption: "Today and Stats — one-tap logging, streaks, and completion", span: "wide" },
      { src: "/work/streaklet/2.png", caption: "Per-habit detail with a history heatmap and 30-day trend" },
      { src: "/work/streaklet/3.png", caption: "Reminders, themes, and JSON data export" },
    ],
  },
  {
    index: "04",
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
    index: "05",
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
    index: "06",
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
    index: "07",
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
      "Tell us what you're building. We respond within 24 hours with initial thoughts and next steps.",
  },
  {
    index: "02",
    title: "Design a demo",
    description:
      "We turn the brief into a clickable demo, so decisions are made from something real, not a concept.",
  },
  {
    index: "03",
    title: "Refine the details",
    description:
      "We review the demo together and refine the details — flows, copy, and edge cases that define how it works.",
  },
  {
    index: "04",
    title: "Build the full project",
    description:
      "Our engineers build it for real, in transparent weekly cycles. You see working software at every step — never a black box, never a surprise at the end.",
  },
  {
    index: "05",
    title: "Security check & polish",
    description:
      "Before launch we harden, test, and review the details — performance, accessibility, and a security pass — so what ships is genuinely solid, not just finished.",
  },
  {
    index: "06",
    title: "Publish & handover",
    description:
      "We deploy, transfer ownership to your accounts, and ensure your team has full access and documentation.",
  },
];

export const REASONS = [
  {
    title: "Thoughtful by design",
    description:
      "Every decision across product, design, and engineering is made with intention.",
  },
  {
    title: "Direct collaboration",
    description:
      "You work directly with the people building your product.",
  },
  {
    title: "Built to last",
    description:
      "We build software designed for clarity, stability, and long-term use.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "%", label: "Satisfaction" },
  { value: 5, suffix: "+", label: "Years of experience" },
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
      "We needed buyers to find the right car and reach us without friction. Evrion shipped a storefront where inventory search, the payment calculator, and lead capture just work — plus an admin our staff actually enjoy using.",
    name: "Marcus Chen",
    role: "General Manager, Apex Auto Group",
  },
  {
    quote:
      "Evrion obsessed over the part our customers never see. Every price is settled on the server and every order confirmed by Stripe before a bag ships — fast for shoppers, airtight for us. That's rare craft.",
    name: "Amira Hadid",
    role: "Founder, Emberhaus Coffee",
  },
  {
    quote:
      "Our whole business depends on subscription gates that actually hold. Evrion built access control that's decided on the server every time, with Stripe as the source of truth — members upgrade seamlessly and we stopped worrying about leaks.",
    name: "Sarah Lindqvist",
    role: "Head of Product, Ascend Academy",
  },
  {
    quote:
      "Property is a spatial decision, and Evrion understood that. The synced list-and-map, the filtering, the mortgage math — it all stays in step no matter how our buyers search. It feels like a national portal, not a local site.",
    name: "Daniel Okafor",
    role: "Broker / Owner, Haven & Finch",
  },
  {
    quote:
      "We wanted a weather product that answers the question behind the question, not just the temperature. Evrion delivered a dashboard that's genuinely useful — and polished enough that people keep it open in a tab all day.",
    name: "Elena Rossi",
    role: "Founder, Skyline",
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
    index: "08",
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
    index: "09",
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
    index: "10",
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
    index: "11",
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
    index: "12",
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
    index: "13",
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
    index: "14",
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
  {
    index: "15",
    slug: "basketful",
    title: "Basketful",
    category: "Mobile App · Productivity",
    outcome: "Local-first list that auto-sorts groceries into store aisles",
    year: "2025",
    description:
      "A fast, local-first grocery list app for iPhone and iPad, built in SwiftUI. It auto-sorts items into store aisles as you type, remembers what you buy for one-tap re-adding, and can push a whole recipe onto your list in a single tap.",
    hue: "from-green-500/40 via-emerald-600/20 to-transparent",
    accent: "#22c55e",
    repo: "https://github.com/Evrionllc/Grocery-List-App",
    heroImage: "/work/basketful/hero.png",
    meta: [
      { label: "Project", value: "Basketful" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · SwiftUI" },
      { label: "Stack", value: "SwiftUI · SwiftData" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Basketful is a native grocery list app built around how people actually shop: a persistent add bar sits in thumb reach at the bottom, clears itself after each item, and lets you rattle off a whole list in seconds.",
          "The brief originally described a web app; it was deliberately built as a native iOS app instead, where 'works offline in a basement grocery store' isn't a feature you bolt on — it's just how the app works.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A grocery list is only pleasant if it organizes itself. Making the user pick a category for every item kills the speed that makes a list worth using — but guessing categories wrong is just as annoying.",
          "It also had to be genuinely useful the moment it opens, work with zero connectivity, and survive a force-quit or reboot without losing a single item.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "A built-in dictionary of ~250 common groceries files items into store aisles as you type — 'milk' into Dairy & Eggs, 'salmon' into Seafood — and the add bar previews the detected aisle live. Correct a wrong guess once and the app remembers it for next time.",
          "Every item you add is recorded, so a Buy Again sheet can surface your history by frequency or recency, and saved recipes push all their ingredients onto a list in one tap, each auto-sorted on arrival. All of it persists on-device with SwiftData.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "Basketful ships as a complete local-first app: multiple named lists, quantities and notes without ever becoming a form, a checked-off 'In the cart' section that's recoverable rather than destructive, and starter content on first launch so it's useful immediately.",
          "With no network dependency at all, it launches instantly and keeps working in the one place you actually need it — a store with no signal.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built in SwiftUI for iPhone and iPad, with all data stored on-device in SwiftData (GroceryList, GroceryItem, ItemHistory, Recipe, RecipeIngredient). The categorization engine is a keyword dictionary with per-user learned overrides.",
          "There is no network layer anywhere, which is what makes it inherently offline and privacy-preserving — nothing leaves the device.",
        ],
      },
    ],
    gallery: [
      { src: "/work/basketful/1.png", caption: "The list, auto-sorted into store aisles as you type", span: "wide" },
      { src: "/work/basketful/2.png", caption: "Recipes — push every ingredient onto a list in one tap" },
    ],
  },
  {
    index: "16",
    slug: "ironlog",
    title: "IronLog",
    category: "Mobile App · Fitness",
    outcome: "Live workout logging with routines and a rest timer",
    year: "2025",
    description:
      "A native iOS strength-training logger built with SwiftUI and SwiftData: build routines, run a live workout with per-set weight and reps, a running duration and volume readout, and an exercise library — all offline.",
    hue: "from-orange-500/40 via-red-600/20 to-transparent",
    accent: "#f97316",
    repo: "https://github.com/Evrionllc/Workout-Tracker-App",
    heroImage: "/work/ironlog/hero.png",
    meta: [
      { label: "Project", value: "IronLog" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · SwiftUI" },
      { label: "Stack", value: "SwiftUI · SwiftData" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "IronLog is a strength-training tracker with a single strong identity — a molten-orange accent on a deep OLED-friendly dark theme — built entirely in SwiftUI. You save routines like Push, Pull, and Leg day, then run them as live workouts.",
          "The hard part of a gym app isn't the data model; it's the moment mid-set when you need to log a lift with one hand without breaking rhythm.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A live workout is stateful and long-running: a session can span an hour, the app can be backgrounded between sets, and the user needs their previous numbers, a running timer, and running volume all visible at a glance.",
          "That in-progress session also has to survive — a workout should never be lost because the phone locked or the app was swiped away.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "A dedicated workout-session model drives a full-screen live view that stays up until you finish or discard it, showing each exercise with its previous set, editable weight and reps, and tick-to-complete — with duration and volume ticking up in the header.",
          "The in-progress session is persisted through SwiftData, so it's restored automatically if the app is relaunched. Routines and a searchable exercise library make starting the next session a single tap.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "IronLog delivers the full loop a lifter needs: build a routine, start it, log sets live against your last numbers, and finish — with history and a profile behind it, all working with no account and no connection.",
          "The persisted-session design means a workout in progress is genuinely durable, which is exactly the reliability a training log has to earn.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built for iOS with SwiftUI and SwiftData, using an observable WorkoutSession that's configured with the model context and presented as a full-screen cover whenever a session is running. Sample routines and an exercise library seed on first launch.",
          "Everything is local and offline; the design system is a single hand-built theme with one deliberately distinct accent color.",
        ],
      },
    ],
    gallery: [
      { src: "/work/ironlog/1.png", caption: "Live workout — sets, reps, and a running duration and volume", span: "wide" },
      { src: "/work/ironlog/2.png", caption: "Routines — Push, Pull, and Leg day, ready to start" },
    ],
  },
  {
    index: "17",
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    category: "Mobile App · Fitness",
    outcome: "An offline activity dashboard with rings, trends, and goals",
    year: "2025",
    description:
      "A native iOS fitness dashboard built with SwiftUI and SwiftData: activity rings and daily stats, a workout log, trend charts across 7/30/90 days, and adjustable goals — a high-contrast, OLED-friendly dark experience that runs fully offline.",
    hue: "from-teal-500/40 via-emerald-600/20 to-transparent",
    accent: "#14b8a6",
    repo: "https://github.com/Evrionllc/Fitness-Tracker-App",
    heroImage: "/work/fitness-tracker/hero.png",
    meta: [
      { label: "Project", value: "Fitness Tracker" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · SwiftUI" },
      { label: "Stack", value: "SwiftUI · SwiftData" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Fitness Tracker is an activity and workout dashboard in the vein of a rings app, built natively in SwiftUI with a whole-app dark mode for a high-contrast, OLED-friendly look. It ties together four surfaces: Today, Workouts, Trends, and Goals.",
          "The point is legibility at a glance — the day's progress readable in the half-second before you put the phone back down.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "A dashboard lives or dies on how quickly it communicates. Rings, streaks, and stat cards all have to render instantly from local data and stay honest, with charts that make a week or a quarter of activity readable rather than noisy.",
          "And it had to feel complete and alive from the first launch, without requiring an account, a sync, or a network round-trip.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "The Today screen leads with an activity-ring summary and glanceable stat cards; Trends turns the same underlying logs into calorie and active-minute charts across 7, 30, and 90 days; Goals lets targets be tuned and reflected everywhere.",
          "All data is stored locally with SwiftData and seeded with realistic sample activity on first launch, so the app is immediately populated and fully usable offline.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a coherent, four-tab fitness app: rings and daily stats on Today, a workout log, expressive trend charts, and editable goals — all in a consistent dark theme built around a single fresh-teal accent.",
          "Because it's local-first, it opens instantly and works anywhere, with no dependency on a backend or connection.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built for iOS with SwiftUI and SwiftData; charts are rendered natively and the whole app is pinned to a dark color scheme with a reusable Theme. Sample data seeds from the root view on first launch and is a no-op thereafter.",
          "A clean model layer (Workout, StrengthSet, WeightEntry, GoalSettings) keeps the dashboard's derived summaries fast and testable.",
        ],
      },
    ],
    gallery: [
      { src: "/work/fitness-tracker/1.png", caption: "The dashboard and the workout log", span: "wide" },
      { src: "/work/fitness-tracker/2.png", caption: "Trends — active calories and minutes over time" },
      { src: "/work/fitness-tracker/3.png", caption: "Goals and adjustable targets" },
    ],
  },
  {
    index: "18",
    slug: "floppy-baby",
    title: "Floppy Baby",
    category: "Mobile Game · iOS",
    outcome: "A physics-driven SwiftUI / SpriteKit arcade game",
    year: "2025",
    description:
      "A playful Flappy-Bird-style arcade game for iOS, built with SpriteKit: tap to send a diapered baby up on a puff, dodge the bottles, and chase a high score — with sound, physics, and a cheerful hand-built art style.",
    hue: "from-pink-500/40 via-sky-500/20 to-transparent",
    accent: "#f472b6",
    repo: "https://github.com/Evrionllc/Flappy-Baby-Game",
    heroImage: "/work/floppy-baby/hero.png",
    meta: [
      { label: "Project", value: "Floppy Baby" },
      { label: "Year", value: "2025" },
      { label: "Discipline", value: "iOS · Game" },
      { label: "Stack", value: "SpriteKit · Swift" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        body: [
          "Floppy Baby is a small, self-contained arcade game — the studio's take on the endlessly tappable Flappy-Bird formula, given an original, silly identity: a diapered baby that rises on each tap and drifts back down under gravity.",
          "It's a deliberate change of pace from data-heavy product work — a reminder that game feel, timing, and juice are their own kind of engineering.",
        ],
      },
      {
        id: "challenge",
        label: "Challenge",
        body: [
          "Arcade games are unforgiving about feel. The jump impulse, gravity, obstacle spacing, and collision generosity all have to be tuned until the game is hard but fair — the difference between 'one more go' and a delete.",
          "It also had to run smoothly frame-to-frame, handle its own game states cleanly, and remember your best score between sessions.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "The game is built on SpriteKit with a physics body for the baby and precise contact bit-masks for the bottles, the ground, and the score gates. A small state machine moves between waiting, playing, and game-over, with the baby held still until the first tap.",
          "Clouds drift in procedurally, a sound effect fires on each flap, and the high score is persisted with UserDefaults so there's always a number to beat.",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        body: [
          "The result is a complete, tappable little game with a start prompt, live scoring, a best-score chase, and a bright, wholly original art style — self-contained and ready to run on an iPhone.",
          "It's proof that the same craft we bring to platforms scales down to something whose only job is to be fun.",
        ],
      },
      {
        id: "technical-detail",
        label: "Technical Detail",
        body: [
          "Built for iOS with SpriteKit and Swift: an SKScene drives the physics simulation and game loop, category bit-masks handle collision and scoring, and a dedicated audio helper plays the flap sound.",
          "Game state, obstacle spawning, and the parallax cloud layer are all managed in the scene, with the high score saved to UserDefaults.",
        ],
      },
    ],
    gallery: [
      { src: "/work/floppy-baby/1.png", caption: "Tap to send the baby up — dodge the bottles, chase the high score", span: "wide" },
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
  timeline: string;
  buildPrice: string;
  /** Monthly maintenance fee, or "—" where maintenance doesn't apply */
  maintenanceFee: string;
  /** What the build includes — drives cards and the detail modal */
  included: string[];
  /** Explicitly out of scope (may be empty) */
  notIncluded: string[];
  /** Payment terms for this tier */
  payment: string;
  /** Optional per-tier callouts (e.g. "Good to know", "Timeline note") */
  notes?: { label: string; body: string }[];
  featured?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "Tier 1",
    name: "Technical Consultation",
    summary:
      "One-hour expert session: feasibility, tech decisions, architecture review. Written recommendations included.",
    timeline: "1 hour",
    buildPrice: "$200 flat",
    maintenanceFee: "—",
    included: [
      "60-minute video call with an engineer, not a salesperson",
      "Any topic: is your idea buildable, tech-stack choices, vendor or freelancer evaluation, architecture questions",
      "Written summary with our recommendations within 2 business days",
    ],
    notIncluded: [],
    payment: "Paid at booking.",
    notes: [
      {
        label: "Good to know",
        body: "If you hire us for a project within 30 days, the $200 is credited toward your build. Need a deep review of an existing codebase instead? We offer a full Code & Architecture Audit with a written report — $1,500–$4,000 depending on codebase size, quoted after a quick look.",
      },
    ],
  },
  {
    tier: "Tier 2",
    name: "Landing Page",
    summary:
      "One high-converting page: hero, services, contact form, mobile-ready, basic SEO.",
    timeline: "~1 week",
    buildPrice: "$600 – $1,500",
    maintenanceFee: "$79/mo",
    included: [
      "Single-page design and build",
      "Hero section and services / features section",
      "Contact form with email notifications",
      "Mobile-responsive and SSL",
      "Basic on-page SEO (title, meta, indexing)",
      "Analytics setup and cross-browser testing",
      "2 revision rounds and a 30-day bug-fix guarantee",
    ],
    notIncluded: [
      "Copywriting",
      "Logo / brand design (see the Brand Starter add-on)",
      "Photography",
    ],
    payment: "50% to start, 50% at launch.",
    notes: [
      {
        label: "Timeline note",
        body: "Assumes content and brand assets are delivered before the build starts.",
      },
    ],
  },
  {
    tier: "Tier 3",
    name: "Business Website",
    summary:
      "Up to 5 pages, contact forms, Google Maps & reviews, analytics setup.",
    timeline: "2–3 weeks",
    buildPrice: "$1,800 – $3,500",
    maintenanceFee: "$99/mo",
    included: [
      "Up to 5 pages (e.g. Home, About, Services, Gallery, Contact)",
      "Contact forms",
      "Google Maps and Google Reviews integration",
      "Click-to-call",
      "Analytics and SSL",
      "Basic SEO, mobile-responsive",
      "2 revision rounds and a 30-day guarantee",
    ],
    notIncluded: [
      "Client-editable CMS (that's Tier 4)",
      "Copywriting",
      "Branding",
      "Content migration beyond 5 pages",
    ],
    payment: "50% to start, 50% at launch.",
    featured: true,
  },
  {
    tier: "Tier 4",
    name: "Professional Website + CMS",
    summary:
      "Up to 10 pages you can edit yourself: blog, portfolio, team pages. SEO + performance tuned.",
    timeline: "3–5 weeks",
    buildPrice: "$4,000 – $7,500",
    maintenanceFee: "$149/mo",
    included: [
      "Up to 10 pages",
      "Content management system — edit text, images, blog posts, and portfolio items without us",
      "On-page SEO across all pages",
      "Performance optimization (Core Web Vitals)",
      "A 1-hour training session on editing your own site",
      "2 revision rounds and a 30-day guarantee",
    ],
    notIncluded: [
      "Copywriting",
      "Branding",
      "Migration beyond 10 pages",
      "Custom user accounts (that's Tier 6)",
    ],
    payment: "50% to start, 50% at launch.",
    featured: true,
  },
  {
    tier: "Tier 5",
    name: "E-commerce Store",
    summary:
      "Full online store: catalog, secure checkout, payments, shipping & tax, up to 50 products loaded.",
    timeline: "4–8 weeks",
    buildPrice: "$7,500 – $15,000",
    maintenanceFee: "$199/mo",
    included: [
      "Product catalog",
      "Cart and secure checkout",
      "Payment processing setup (e.g. Stripe or Shopify Payments)",
      "Shipping and tax configuration",
      "Order management and customer accounts",
      "Up to 50 products loaded for you",
      "Email receipt setup",
      "2 revision rounds and a 30-day guarantee",
    ],
    notIncluded: [
      "Product photography and descriptions",
      "Loading beyond 50 products (quoted per batch)",
      "Marketing / ads",
      "Platform subscription fees (e.g. Shopify's plan) and payment-processor fees — billed to you directly by those providers",
    ],
    payment: "50% to start, 50% at launch.",
  },
  {
    tier: "Tier 6",
    name: "Custom Web Application",
    summary:
      "Accounts, dashboards, custom logic, API integrations, database design.",
    timeline: "6–10 weeks",
    buildPrice: "$14,000 – $28,000",
    maintenanceFee: "$299/mo",
    included: [
      "Discovery and a written specification",
      "User accounts and authentication",
      "Custom dashboards and business logic",
      "Third-party API integrations",
      "Database design",
      "Staging environment for your review",
      "Weekly progress updates",
      "2 revision rounds on design and a 30-day guarantee",
    ],
    notIncluded: [
      "Features added after the spec is signed (quoted separately in writing before we build them — never a surprise)",
      "Ongoing feature development (available hourly or via a maintenance upgrade)",
    ],
    payment:
      "50% to start, 50% at launch. On request, larger builds can split 50/25/25, with the middle payment at approval of core functionality.",
    featured: true,
  },
  {
    tier: "Tier 7",
    name: "SaaS MVP",
    summary:
      "Launch-ready first version of your product: auth, billing, admin panel, one core workflow.",
    timeline: "10–14 weeks",
    buildPrice: "$25,000 – $55,000+",
    maintenanceFee: "from $500/mo",
    included: [
      "Authentication",
      "Subscription billing",
      "Admin panel",
      "One core user workflow, defined together in a written feature list before we build",
      "Deployment and monitoring setup",
      "Weekly demos so you see the product grow",
      "30-day guarantee",
    ],
    notIncluded: [],
    payment:
      "50% to start; the remaining 50% is tied to milestones in the feature list (typically 50/25/25).",
    notes: [
      {
        label: "What an MVP means here",
        body: "An MVP is deliberately the smallest version of your product real users can pay for. That's not a limitation of our team — it's how successful products launch. If your vision involves multiple complex workflows or an open-ended roadmap, we'll tell you honestly on the discovery call and scope a realistic first version, or point you to a larger team.",
      },
      {
        label: "Maintenance",
        body: "Custom plan from $500/mo — covers hosting, monitoring, security, and a monthly block of engineering hours sized to your product.",
      },
    ],
  },
  {
    tier: "Tier 8",
    name: "Mobile App (iOS + Android)",
    summary:
      "Cross-platform app from one codebase: up to 6 core screens, accounts, push notifications, store submission.",
    timeline: "8–14 weeks",
    buildPrice: "$18,000 – $45,000",
    maintenanceFee: "from $249/mo",
    included: [
      "One codebase for both platforms (React Native or Flutter)",
      "Up to ~6 core screens",
      "User accounts",
      "Push notifications",
      "App Store and Google Play submission",
      "30-day guarantee",
    ],
    notIncluded: [
      "Apple / Google developer account fees (paid by you — approximately $99/yr and $25 one-time; verify current fees)",
      "Complex features quoted individually (real-time chat, in-app payments, offline sync, hardware integration)",
    ],
    payment:
      "50% to start, 25% at feature-complete build, 25% at store submission.",
    notes: [
      {
        label: "Need a backend too?",
        body: "Combined app + backend projects (custom backend and admin dashboard) typically run $30,000–$65,000+ — quoted after discovery.",
      },
    ],
  },
];

export type PricingSection = {
  title: string;
  body: string[];
};

/**
 * Global terms that apply across every tier — rendered once as expandable
 * panels beneath the pricing table rather than repeated in each modal.
 */
export const PRICING_SECTIONS: PricingSection[] = [
  {
    title: "How payment works",
    body: [
      "Simple and standard: 50% to start, 50% at launch. No hidden fees, no hourly surprises on fixed-scope projects. Larger builds (Custom Apps, SaaS, Mobile) split the final half into milestones — you pay as you see working results, exactly as spelled out in your quote. And before any payment at all, you get a free discovery call and a fixed written quote, so you know precisely what you're buying.",
      "Scope changes: anything outside the signed scope is quoted in writing before we build it. Pauses & cancellation: if a project is cancelled or paused by the client for more than 30 days, completed work is billed at $140/hr against payments made, and resumed projects are re-scheduled into our queue. Timelines assume client feedback within 3 business days; delays on content or feedback extend the schedule, not the price.",
    ],
  },
  {
    title: "What maintenance actually covers",
    body: [
      "Every plan includes managed hosting with SSL, security and compatibility updates, uptime monitoring with same-business-day response, daily backups (30-day retention), and small content edits — up to 2 requests or 30 minutes per month (updating a price, changing hours, swapping a photo, editing a paragraph). Unused time doesn't roll over.",
      "Not covered: new pages, new features, redesigns, or bulk updates — quoted separately or billed at $140/hr (2-hour minimum). Unsure if something is a small edit? Ask — we'll tell you before any charge. Month-to-month, cancel anytime with 30 days' notice; we hand over hosting cleanly.",
    ],
  },
  {
    title: "No logo or brand yet? Covered.",
    body: [
      "We're engineers, and we don't pretend otherwise — so for brand work we partner with vetted professional designers. The Brand Starter add-on covers a logo, color palette, font pairing, and a basic usage guide, managed by us as a single line item on your quote, so you get one point of contact and one bill. Typically $600–$1,500 depending on scope (rate set with our design partner — final figure in your quote).",
      "Already have a logo? Send us the files, colors, and fonts and we'll build around them. Every website also includes our design direction — typography, spacing, color scheme — at no extra cost; that's just part of building it right. Need full brand strategy or naming? That's a branding agency's craft, and we'll happily refer you to one.",
    ],
  },
  {
    title: "The 30-day guarantee & ownership",
    body: [
      "Every project includes a 30-day post-launch guarantee: anything in-scope that breaks, we fix free. And everything we build is yours — code, design files, accounts, domain — fully transferred at launch. No lock-in, ever.",
    ],
  },
];

/** Disclaimer shown alongside the pricing table. */
export const PRICING_DISCLAIMER =
  "Ranges are guidelines — every project gets a fixed written quote before any payment.";

export const VALUES = [
  {
    title: "Taste is a feature",
    description:
      "Good taste isn't about aesthetics alone. It's the judgment to know what belongs, what doesn't, and when something is truly finished.",
  },
  {
    title: "Challenge assumptions",
    description:
      "We ask difficult questions before work begins, not after it's shipped. Better assumptions lead to better decisions—and better software.",
  },
  {
    title: "Write it down",
    description:
      "Decisions should outlast meetings and people. We document the thinking behind the work so knowledge remains accessible long after delivery.",
  },
  {
    title: "Improve the foundation",
    description:
      "Every change should strengthen what's already there. We leave code, designs, and documentation in a better state than we found them.",
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
    title: "Quick reply",
    description:
      "Within 24 hours, a member of our team reads your message and responds with initial thoughts.",
  },
  {
    index: "02",
    title: "Initial conversation",
    description:
      "We'll spend about 30 minutes discussing your goals, constraints, timeline, and any questions you have.",
  },
  {
    index: "03",
    title: "Proposal and process",
    description:
      "We'll prepare a clear proposal outlining the scope, timeline, pricing, and the best way to move forward.",
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
      "Smaller sites kick off as soon as the scope is clear; larger builds start with a short discovery phase to align on scope, architecture, and success metrics. From there we work in transparent cycles with demos along the way — every project is fixed-scope with a written quote, and ongoing support is available once you're live.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Landing pages run $600–$1.5k and business websites $1.8k–$7.5k depending on size and CMS needs. E-commerce stores land between $7.5k and $15k, custom web applications between $14k and $28k, and SaaS MVPs from $25k to $55k+. Mobile apps run $18k–$45k. After one scoping call we'll give you a precise, honest estimate — never a teaser number.",
  },
  {
    question: "How long until we can launch?",
    answer:
      "A landing page ships in about a week, business websites in two to five weeks, and e-commerce stores in four to eight. A custom web application takes six to ten weeks, and a SaaS MVP or mobile app typically runs eight to fourteen, depending on scope. We'd rather give you a real date and hit it than promise magic.",
  },
  {
    question: "Do you work with our in-house team?",
    answer:
      "Yes — when you have an in-house team, we work alongside it. We plug into your repos, standups, and tooling where it helps, and we document everything so your team owns the result, not us.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a 30-day guarantee — anything in-scope that breaks, we fix free. From there, most clients move to a monthly maintenance plan: managed hosting, monitoring, security updates, and small content edits, with larger changes quoted separately by a team that already knows your codebase.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "A short description of what you're building, your timeline, and anything you'd like us to know. You don't need a detailed specification — we'll help define the rest.",
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
  /** Body paragraphs, rendered in order on the post page. */
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "shipping-an-llm-feature-to-real-users",
    category: "AI",
    title: "We shipped an LLM feature to real users. Here's what the demos don't tell you.",
    excerpt:
      "The prototype took an afternoon. The other ninety percent — the part that decides whether people actually trust it — took two months. That gap is the whole story.",
    author: "Halim Luman",
    date: "2026-06-24",
    readingTime: "8 min read",
    body: [
      "The demo that sold everyone on the feature took me an afternoon. Wire up the API, paste in a prompt, stream the tokens into a text box — and there it was, doing something that genuinely felt like magic in a meeting. Then we tried to put it in front of real people, and the afternoon turned into two months. That gap between 'works in a demo' and 'safe to ship' is the part nobody puts in the launch video, which is exactly why it's worth writing about.",
      "The first thing that breaks is your assumption that the model is reliable. In the demo you type the happy-path question and get a great answer. Real users type half a question, a typo, a paste of an entire email, or something adversarial just to see what happens. A frontier model handles most of that gracefully and then, maybe one time in fifty, produces a confident, beautifully formatted, completely wrong answer. One in fifty sounds fine until you multiply it by thousands of sessions and remember that the wrong answers are the ones people screenshot.",
      "So most of the two months went into everything around the model rather than the model itself. We built an evaluation set — a couple hundred real-ish inputs paired with known-good outputs — so that when we changed a prompt we could measure whether we'd actually made things better or just different. Without that, prompt engineering is superstition: you tweak a sentence, the one example you happened to test improves, and you have no idea what you quietly broke everywhere else.",
      "Then there's the plumbing that decides whether it feels good. Streaming the response token by token instead of making people watch a spinner for eight seconds. Timeouts and retries for when the provider has a bad minute. Caching so you're not paying twice to answer the same question. Rate limits so a single user can't run up the bill. None of it is glamorous, and all of it is the difference between a feature that ships and a science project that lives on someone's laptop.",
      "We also got a lot stricter about where the model is even allowed to matter. If a wrong answer is merely annoying — a rough first draft, a suggested tag, a starting point someone will edit anyway — an LLM is a great fit, because a human is right there to catch it. If a wrong answer is expensive or dangerous — anything touching money, permissions, or a claim someone might act on — the model can draft and suggest, but a deterministic check or an actual person makes the final call. 'Let the AI decide' is a design smell every single time the decision genuinely matters.",
      "Cost surprised us in both directions. The per-request price is trivial right up until a feature gets popular, and then it's a real line item you have to design around — shorter prompts, a smaller model for the easy cases, aggressive caching, and the humility to notice when a plain old function would do the same job for free. A surprising number of things marketed as 'AI features' are really a regex wearing a very expensive costume.",
      "The honest summary is that the model is now the easy part. The hard part is the same as it has always been: understanding the actual problem, handling the unhappy paths, being clear with users about what the thing can and can't do, and keeping the failure modes cheap. LLMs are a genuinely new capability and we're excited about them — but the teams getting real value out of them aren't the ones with the cleverest prompt. They're the ones who treated it like production software instead of a party trick.",
    ],
  },
  {
    slug: "the-2026-framework-treadmill",
    category: "News",
    title: "The framework treadmill kept spinning in 2026. We mostly stepped off.",
    excerpt:
      "Server Components everywhere, another router rewrite, three more 'React killers.' The churn is real — here's how we decide what's worth chasing and what's just noise.",
    author: "Evrion Team",
    date: "2026-05-20",
    readingTime: "6 min read",
    body: [
      "If you tried to keep up with front-end frameworks this year, you spent it slightly out of breath. Server Components went from controversial to assumed. There was another routing paradigm, another wave of 'React killers,' another round of takes about whether the whole ecosystem had lost the plot. And somewhere in all that, you were also supposed to have an opinion, migrate everything, and — almost incidentally — ship your actual product.",
      "We mostly stepped off the treadmill, and it's made us faster rather than slower. Not because the new ideas are bad; a lot of them are genuinely good. It's because 'new' and 'better for this client, this quarter' are different questions, and the industry has a real talent for conflating them into the same breathless recommendation.",
      "Our filter is boring on purpose: does this reduce the distance between what we intend and what actually ships? A tool earns adoption when it removes a category of bug, deletes a pile of glue code, or makes the fast path the default one. Signals-based reactivity, for example, genuinely kills a class of stale-state bugs — that's a real win worth paying a migration for. A framework that's fifteen percent faster in a benchmark none of your users will ever hit is not, no matter how good the launch thread was.",
      "It also helps to separate the load-bearing choices from the reversible ones. Your language, your data model, your auth, your hosting — those are expensive to change, so we stay conservative and pick things with a long, boring track record. Your animation library or your table component is a Tuesday-afternoon decision you can rip out whenever you like, so we're happy to experiment there. Most 'should we adopt X' anxiety evaporates the moment you ask which of those two buckets X actually falls into.",
      "This year we did adopt plenty — React 19's improvements, Tailwind v4, better server rendering across the board — because each one paid for its own migration in code we got to delete afterward. And we passed on plenty more, not out of stubbornness but because the honest answer to 'what would this fix for us right now?' was 'nothing yet.' A lot of promising tools are one release away from being obviously worth it, and there's no prize for being early and wrong.",
      "The uncomfortable truth underneath all of it is that products almost never fail because they picked React instead of the framework of the month. They fail because the thing was slow, or confusing, or solved a problem nobody had. A boring, well-understood stack frees up exactly the attention those problems demand. The framework churn is fun to watch, and mostly a very well-produced distraction from the work that actually decides whether you win.",
    ],
  },
  {
    slug: "local-first-is-finally-practical",
    category: "Innovation",
    title: "Local-first software grew up — and it quietly raises the bar for everyone",
    excerpt:
      "Offline that actually works, instant interfaces, and real-time sync you no longer have to hand-roll. The sync-engine era is here, and users are about to start expecting it.",
    author: "Halim Luman",
    date: "2026-04-29",
    readingTime: "7 min read",
    body: [
      "There's a particular kind of magic in an app that just works when the wifi doesn't. You're in a tunnel, or on a plane, or in a basement café with aggressively hostile guest wifi, and the thing keeps responding instantly — you make your changes, and when you resurface everything is quietly, correctly in sync. For years that experience was so expensive to build that almost nobody bothered. In 2026, that's finally changing, and it's one of the more exciting shifts in how apps get made.",
      "The old way to add 'offline support' was to bolt it on: a queue of pending requests, a pile of conflict-resolution code you wrote and re-wrote yourself, and a long tail of edge cases that eventually corrupted someone's data at the worst possible moment. It was miserable enough that most teams shipped a spinner and an error banner and called it done. The whole category had a reputation for being a tar pit, and the reputation was thoroughly earned.",
      "What changed is that the genuinely hard part — merging concurrent edits without a central referee — got packaged up. CRDTs went from research-paper curiosity to libraries you can actually pull into a project, and a wave of sync engines now handle the plumbing underneath. Your app reads and writes a local store that feels instant, and the engine takes care of syncing to the server and reconciling everyone's changes in the background. The thing that used to be a six-month project is now much closer to a dependency you install.",
      "We've been leaning into this on a personal project — an offline-first trip planner — precisely because it's the kind of constraint that teaches you things no tutorial can. Every map, note, and booking has to work with no signal and then reconcile cleanly the moment it comes back. What you learn wrestling with that pays off directly the next time a client needs an app that can't assume a perfect connection, which turns out to be far more of them than you'd guess.",
      "The interesting part isn't really the offline support itself — it's what falls out of it almost for free. When the source of truth is a local store that syncs, you get instant UI because a click doesn't wait on a round trip, you get real-time collaboration because everyone is simply syncing the same data, and you get resilience because a dropped request becomes a non-event. Features that each used to be their own separate project start showing up together, as side effects of the architecture.",
      "None of this is free, and pretending otherwise would be dishonest. Local-first adds real complexity to your data model, it's a poor fit for anything that must be strongly consistent the instant it's written — inventory counts, seat availability, a bank balance — and it forces genuinely hard questions about what 'delete' even means when copies of the data live on devices you don't control. It is emphatically not the right default for every app.",
      "But the bar is moving underneath all of us. Once enough products feel instant and keep working offline, that stops being a delight and starts being an expectation — the same way nobody thanks you anymore for a site that loads quickly, they just quietly abandon the ones that don't. Local-first is graduating from a niche philosophy into a plain competitive baseline, and the teams paying attention now are the ones who won't be scrambling to catch up later.",
    ],
  },
  {
    slug: "cross-document-view-transitions",
    category: "Tech",
    title: "Cross-document View Transitions took away the SPA's last excuse",
    excerpt:
      "For years the big reason to ship a heavy single-page app was smooth page transitions. The browser just does that now — and it's quietly changing how we architect sites.",
    author: "Evrion Team",
    date: "2026-03-18",
    readingTime: "6 min read",
    body: [
      "For the better part of a decade, one of the strongest arguments for building a heavyweight single-page app was almost embarrassingly cosmetic: smooth transitions between pages. A regular website blinks white and snaps to the top when you click a link; an SPA can cross-fade and slide and generally feel like a native app. That single difference pushed an enormous number of teams into shipping far more JavaScript than their content ever actually needed.",
      "That argument has basically evaporated. Cross-document View Transitions — the browser animating between two full page loads — moved from experiment to something you can genuinely reach for in production. You navigate to a new URL the old-fashioned way, the server sends HTML, and the browser tweens between the outgoing page and the incoming one. No client-side router, no rehydration tax, no framework required for the effect itself.",
      "The mental model is refreshingly simple. You tag the elements that should feel continuous across a navigation — a hero image, a card that expands into its own detail page — with a shared name, and the browser works out the in-between frames. A card sitting in a grid can visually morph into the header of the page it links to, an effect that used to require a small pile of choreography and now takes a couple of lines of CSS and an opt-in.",
      "What this really changes is the default you reach for. You can build a mostly-static, server-rendered site — fast to load, trivial to cache, friendly to search engines — and still get the fluid, app-like feel that used to be the whole justification for all that client-side machinery. The humble multi-page architecture, long treated as the boring and slightly embarrassing choice, quietly picked up the one feature it was missing.",
      "It isn't a total free lunch, and saying otherwise would be dishonest. You're animating real navigations now, so anything that makes those slow — a heavy server response, an uncached page — shows straight through the transition. And like any motion on the web, it has to respect people who've asked for less of it; honoring the reduced-motion preference isn't a nice-to-have, it's the line between a pleasant touch and an accessibility bug you shipped on purpose.",
      "There's still a real place for single-page apps — genuinely stateful, interaction-dense products where the page is a workspace rather than a document. But the reflexive reach for an SPA 'so the transitions feel nice' is finally over. When the platform grows a feature that lets you delete an entire category of code, that's almost always the right trade to take, and this is one of the clearest examples the web has handed us in years.",
    ],
  },
  {
    slug: "the-server-is-the-only-source-of-truth",
    category: "Engineering",
    title: "The server is the only source of truth",
    excerpt:
      "Most security holes we find aren't exotic. They're a price, a permission, or an identity that someone trusted the browser to report honestly.",
    author: "Evrion Team",
    date: "2026-06-04",
    readingTime: "7 min read",
    body: [
      "Most of the security problems we find during code reviews aren't exotic. There's no clever cryptography to break and no zero-day to chain together. It's almost always the same quiet mistake wearing slightly different clothes: a value that decides money or access — a price, a permission, an identity — was trusted because it arrived from the browser looking official.",
      "The pattern is easy to fall into precisely because the insecure version is genuinely less code. The cart already knows the total, so why recompute it on the server? The user's role is right there in the response, so why check it again? The checkout redirect fires after payment, so surely that means they paid? Each shortcut works flawlessly in the demo, which is exactly what makes it so dangerous — the failure only surfaces when someone opens the developer console and edits the number for themselves.",
      "We reviewed a storefront once where the client sent the price of each item up with the order. Change a value in the request and you could buy anything for a single cent. Nobody had been malicious enough to notice yet, which is the worst kind of secure: not actually safe, just not yet attacked. The fix wasn't a patch, it was a principle — the server reads prices from the database at checkout and treats the incoming cart as a suggestion, never a fact.",
      "The same principle covers most of the greatest hits. Access should be derived from the authenticated session on the server, never read from a field the client filled in — that's how you stop one user from loading another's data by editing an ID in the URL. A payment isn't confirmed by the page the browser happens to land on; it's confirmed by a signature-verified webhook from the payment provider, checked against the raw request body. Multi-tenant queries get scoped to the current organization so that a foreign ID simply matches zero rows instead of quietly leaking a competitor's data.",
      "What ties all of it together is a single stance: the browser is an untrusted narrator of its own state. It's a wonderful place to make things fast and pleasant, and a terrible place to make any decision that matters. Everything consequential gets re-derived and re-checked somewhere the user's console can't reach.",
      "The reason this is worth building as a habit rather than a checklist is that checklists get forgotten under deadline pressure — and that's precisely the moment the shortcut is most tempting. When the architecture is arranged so the secure path is the only path — prices come from the database, access comes from the session, payment comes from the webhook — a forgotten check fails closed instead of open. You stop depending on everyone remembering to be careful, because the system is careful by construction.",
      "None of this is advanced, and that's really the whole point. The gap between a safe product and a breach is rarely sophistication; it's usually one place where someone trusted the client because it was Tuesday and the deadline was Friday. Getting the boring fundamentals right is most of security, and it's the part that never makes it into the conference talks.",
    ],
  },
  {
    slug: "performance-is-a-feature-you-can-feel",
    category: "Performance",
    title: "Performance is a feature you can feel",
    excerpt:
      "Nobody files a bug that says the app feels slightly heavy. They just trust it a little less, and they can't quite tell you why.",
    author: "Halim Luman",
    date: "2026-02-12",
    readingTime: "6 min read",
    body: [
      "Performance almost never fails loudly. A page that takes an extra second to become interactive doesn't throw an error or break a flow. It just quietly costs you — a few people bounce, a few more trust the product a little less, and not one of them files a bug that reads 'this felt slightly heavy.' The damage is entirely real and almost completely invisible in your issue tracker.",
      "That's why we treat speed as a design constraint rather than a cleanup task for the week before launch. The decisions that actually determine how fast a page feels are made early and are expensive to reverse: how much JavaScript ships to the browser, what renders on the server versus the client, which fonts and images sit on the critical path, whether an animation runs on the GPU or fights the main thread. Try to fix those after the fact and you're renovating the foundations; decide them up front and the fast version is simply the one you built.",
      "It helps to be concrete about what 'fast' even means, because 'it feels fine on my machine' is not a metric — it's a confession. We watch the numbers that map to how a real person experiences a page: how quickly the main content paints, how much the layout lurches around while it loads, and how promptly it responds to that first tap. That last one matters more than it used to; the industry moved to measuring interaction responsiveness directly, and it turned out a lot of sites that scored beautifully on paper felt sluggish the instant you actually touched them.",
      "A useful discipline is to test on the hardware your users actually hold, not the flagship laptop you happened to build the site on. A mid-range phone on a flaky connection is the real world for a huge share of traffic, and it is ruthless about exposing the heavy JavaScript bundle you never noticed because your machine chewed through it without complaint. The gap between a developer's setup and a user's setup is where most performance problems spend their entire lives hiding.",
      "The good news is that the platform keeps quietly handing us wins. Server rendering means less code shipped to the client in the first place. Modern image formats and native lazy-loading cut page weight with almost no effort. The heavy hero video that used to be the only way to feel premium can increasingly be a lightweight, scroll-driven scene instead. A lot of performance work in 2026 is less about clever optimization and more about simply declining to opt into the bloat.",
      "None of this is about shaving milliseconds for a leaderboard. It's that a product which responds the instant you touch it feels considered, and one that hesitates feels improvised — regardless of how much craft went into everything else. Speed is the most invisible way a product can say that someone sweated the details, which is exactly why it's worth the sweat.",
    ],
  },
  {
    slug: "ship-the-boring-version-first",
    category: "Process",
    title: "Ship the boring version first",
    excerpt:
      "The fastest way to learn whether an idea works is to build the least clever thing that could possibly test it — then earn the right to add the magic.",
    author: "Evrion Team",
    date: "2026-01-22",
    readingTime: "5 min read",
    body: [
      "Every team we meet has a backlog full of clever ideas and a roadmap that quietly assumes all of them are correct. They rarely are. The expensive mistake is almost never building the wrong feature — it's building the polished, animated, edge-case-handled version of the wrong feature before anyone has confirmed it solves a real problem for a real person.",
      "So we start boring on purpose. The first version of almost anything we build does the smallest job that could prove the idea is worth pursuing: a single hard-coded flow instead of a configurable system, a plain table instead of a dashboard, an email instead of a notification service. It feels unsatisfying to ship something that modest. It is also the cheapest information you will ever buy about whether the idea is any good.",
      "Boring-first is not the same as sloppy, and the distinction is the whole game. The foundations — data model, auth, deployment, the parts that are genuinely expensive to change later — get built properly from day one. What we defer is the polish layered on top of unproven assumptions, not the structure underneath them. You're cutting speculative features, never corners.",
      "The payoff arrives the moment real people touch the thing. Half the clever ideas turn out to solve problems nobody actually had, and you're quietly grateful you didn't spend three weeks perfecting them. The other half get sharper, because now there's evidence behind the decisions instead of a confident hunch from a meeting room. The roadmap rewrites itself, and it rewrites itself toward reality.",
      "This is also, quietly, the more respectful way to spend a client's money. Shipping the boring version fast means they're reacting to something they can click within days, not squinting at a slide deck and hoping. Being wrong on a small, cheap version is a Tuesday; being wrong on a big, polished one is a crisis with a budget attached. We would rather have the cheap Tuesdays, every time.",
      "Once the boring version has earned its keep, polish stops being a gamble and becomes an investment — you're making something better that you now know people actually want. That's the version worth being proud of, and it's usually nothing like the impressive-looking thing you'd have built if you had started with the magic instead of earning your way to it.",
    ],
  },
];

/**
 * Permanent 1-based index for each article, assigned by publication order
 * (oldest = 1). It stays stable as newer articles are added, so the highest
 * number always equals the total number of published articles — a running
 * count of "where we started and how many we have."
 */
const ARTICLE_ORDER: Record<string, number> = Object.fromEntries(
  [...ARTICLES]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((article, i) => [article.slug, i + 1])
);

/** Zero-padded chronological number for an article card, e.g. "01". */
export function articleNumber(slug: string): string {
  return String(ARTICLE_ORDER[slug] ?? 0).padStart(2, "0");
}
