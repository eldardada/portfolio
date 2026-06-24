/**
 * VALT case study content. Validated against the CaseStudy schema at build time.
 * Facts: forasoft.com/projects/valt and ipivs.com. Contribution: Eldar's own
 * four years on the project as lead developer.
 */
export const valtData = {
  slug: "valt",
  name: "VALT",
  kicker: "Fora Soft · 2022 to 2026 · Lead Developer",
  tagline: "Enterprise video capture and evidence management at national scale.",
  summary:
    "VALT is a browser-based video recording and surveillance platform used by 770+ organizations across the United States (law enforcement, medical simulation programs, and child advocacy centers) to live-stream IP cameras, record encrypted evidence, and manage it through a point-and-click interface that needs no training. I spent four years on it as the lead developer, working across the Vue frontend, the Symfony backend, and even the Java streaming layer.",
  stats: [
    { value: "50,000+", label: "active users" },
    { value: "770+", label: "organizations" },
    { value: "2,500+", label: "components migrated" },
    { value: "~20x", label: "faster builds" },
  ],
  sectors: [
    "Law enforcement",
    "Medical simulation (HIPAA)",
    "Child advocacy centers",
  ],
  stack: [
    "Vue 2 to Vue 3",
    "Composition API",
    "TypeScript",
    "Vite",
    "Symfony (PHP)",
    "Java (Wowza)",
    "AWS Transcribe",
    "LDAP",
  ],
  product: [
    {
      title: "Full HD multi-camera live streaming",
      desc: "Up to 9 IP cameras on one screen with pan, tilt, zoom and two-way audio.",
    },
    {
      title: "Encrypted recording and instant playback",
      desc: "AV-synced multi-camera recording over SSL/RTMPS, with clipping and export.",
    },
    {
      title: "Markers, annotations and PDF reports",
      desc: "Mark moments in footage, search them, and export reports for review.",
    },
    {
      title: "Role-based access and LDAP",
      desc: "Granular permissions and directory integration for enterprise deployments.",
    },
    {
      title: "Scheduling and PTZ presets",
      desc: "Recurring recording schedules and remote camera control with position presets.",
    },
    {
      title: "Admin dashboard with analytics",
      desc: "Access control, retention policy, and customizable department usage reports.",
    },
  ],
  contributions: [
    {
      theme: "Architecture & leadership",
      items: [
        {
          title: "Led development across the full stack",
          detail:
            "Lead developer on VALT for four years, owning features end to end across the Vue frontend and the Symfony (PHP) backend, not just one side of the wire.",
        },
        {
          title: "Proposed and rolled out a new application architecture",
          detail:
            "Once the product had piled up a lot of varied functionality, I proposed a cleaner architecture: a DDD-style design split into layers with a hexagonal (ports and adapters) structure. I wrote the core documentation for it, aligned it with the team, and drove the adoption. It also untangled duplication I had spotted between the internal API and the public API that customers built on. Alongside it I established a testing discipline on the frontend, introducing unit tests where there had been none and integration tests as a standard.",
        },
        {
          title: "Set the conventions and reviewed the client's engineers",
          detail:
            "Worked directly with the US client's engineering team. Their developers sent their code to me for review, and I assessed it regularly, flagged what to fix and how to do it properly, and authored the conventions the whole project was built to.",
        },
        {
          title: "Drove test coverage across the app",
          detail:
            "Established end-to-end and functional tests across the product, on top of the unit and integration discipline the new architecture introduced.",
        },
      ],
    },
    {
      theme: "Frontend at scale",
      items: [
        {
          title: "Led the Vue 2 to Vue 3 migration of 2,500+ components",
          detail:
            "Drove the full migration in place, moving the codebase off the class-based style (vue-class-component / vue-property-decorator) onto the Composition API, without freezing feature delivery. Optimized runtime performance along the way.",
        },
        {
          title: "Cut production build time roughly 20x (10 minutes to 30 seconds)",
          detail:
            "Led the Webpack to Vite migration and simplified the toolchain config, so the whole team shipped faster every day.",
        },
        {
          title: "Contributed to the UI/UX redesign",
          detail:
            "Helped rework the interface in a redesign that measurably improved usability.",
        },
      ],
    },
    {
      theme: "Real-time media",
      items: [
        {
          title: "Patched the Java-based Wowza streaming module",
          detail:
            "When real-time streaming broke deep in the media layer, I went into the Java Wowza module myself and fixed it. Not a language I live in, but the problem needed solving and I owned it.",
        },
        {
          title: "Killed accumulating audio latency in talk-to-camera",
          detail:
            "Older IP cameras had no real-time audio protocol (VoIP) for talking back into them, so audio was pushed over HTTP and the delay piled up until it was unusable. I moved audio capture and encoding off the main thread into an AudioWorklet, ran the format conversion right there in that dedicated audio thread on the frontend, then handed the processed stream to the module that sends it to the camera. The drift was gone and audio stayed in sync.",
        },
      ],
    },
    {
      theme: "Product features",
      items: [
        {
          title: "Built the commenting and marker system from scratch",
          detail:
            "Designed and built it end to end, the Symfony API and the Vue UI, and integrated it cleanly into the existing recording architecture.",
        },
        {
          title: "Built the reporting and analytics module",
          detail:
            "Backend aggregation in Symfony plus the Vue dashboards, delivering detailed usage statistics and department reports to administrators.",
        },
      ],
    },
  ],
  gallery: [
    { src: "/projects/valt/live-multicam.avif", alt: "Full HD multi-camera live surveillance grid", caption: "Full HD multi-camera live view" },
    { src: "/projects/valt/player-markers.avif", alt: "Recording player with colored markers on the timeline", caption: "Playback with timeline markers" },
    { src: "/projects/valt/analytics.avif", alt: "Admin analytics dashboard", caption: "Admin dashboard and analytics" },
    { src: "/projects/valt/markers.avif", alt: "Marker list on a recording", caption: "Markers and annotations" },
    { src: "/projects/valt/settings-users.avif", alt: "Users and groups settings screen", caption: "Users, groups and permissions" },
    { src: "/projects/valt/scheduling.avif", alt: "Recording scheduling timeline", caption: "Automated scheduling" },
    { src: "/projects/valt/rooms-cameras.avif", alt: "Rooms and cameras configuration screen", caption: "Rooms and cameras setup" },
    { src: "/projects/valt/recordings.avif", alt: "List of recordings", caption: "Recordings library" },
  ],
  link: { label: "Visit the product", href: "https://www.ipivs.com/products/valt-software" },
  source: { label: "Original case study", href: "https://www.forasoft.com/projects/valt" },
};
