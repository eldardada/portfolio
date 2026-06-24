/**
 * Umnogor case study content. Validated against the CaseStudy schema at build
 * time. Eldar built the web platform at Matriks (2021) as a software engineer.
 * Screenshots: matriks.group/products/umnogor (vendor's public marketing).
 */
export const umnogorData = {
  slug: "umnogor",
  name: "Umnogor",
  kicker: "Matriks · 2021 · Software Engineer",
  tagline: "The web platform for an industrial monitoring system.",
  summary:
    "Umnogor is an industrial monitoring system: it shows utility and water-treatment facilities as live mnemonic schemes, streams technological parameters, and raises alarms through an operational journal and an acknowledgement workflow. At Matriks I worked on its web platform as a software engineer, the management and CRM-style side of it: the React frontend, the Laravel (PHP 8) backend with REST APIs, and the Docker, Git and GitLab CI/CD the team shipped on.",
  stats: [
    { value: "PHP 8", label: "Laravel 8 backend" },
    { value: "React", label: "operator frontend" },
    { value: "REST", label: "APIs for integrations" },
    { value: "CI/CD", label: "Docker · Git · GitLab" },
  ],
  sectors: ["Utilities", "Water treatment", "Industrial monitoring"],
  stack: ["PHP 8", "Laravel 8", "React", "REST API", "Docker", "Git", "GitLab CI/CD"],
  product: [
    {
      title: "Live mnemonic schemes",
      desc: "Facilities (intake, sand traps, aeration tanks, clarifiers) shown as interactive schemes.",
    },
    {
      title: "Operational journal",
      desc: "A real-time log of technological parameters with high and low alarms.",
    },
    {
      title: "Alarm acknowledgement",
      desc: "Operators acknowledge alarms; the system records who acted and when.",
    },
    {
      title: "Equipment tree",
      desc: "Browse sites, nodes and instruments and pick what to monitor.",
    },
    {
      title: "Daily reports",
      desc: "Tabular technological-parameter reports across a day.",
    },
    {
      title: "Multi-site dispatching",
      desc: "Watch several facilities and locations from one console.",
    },
  ],
  contributions: [
    {
      theme: "Frontend (React)",
      items: [
        {
          title: "Built the React operator UI",
          detail:
            "The operator-facing side of the system: the schemes dashboard, the operational journal, parameter pickers and the daily-report tables.",
        },
      ],
    },
    {
      theme: "Backend (Laravel / PHP 8)",
      items: [
        {
          title: "Built and maintained the Laravel backend",
          detail:
            "Business logic and the REST APIs the frontend runs on, plus endpoints for third-party integrations.",
        },
        {
          title: "Upgraded the platform to Laravel 8",
          detail:
            "Moved the codebase onto Laravel 8 for performance and security, and reworked the architecture for scalability.",
        },
      ],
    },
    {
      theme: "Infrastructure & delivery",
      items: [
        {
          title: "Containerized and moved to Git",
          detail:
            "Introduced Docker and migrated the project onto Git from a no-VCS setup.",
        },
        {
          title: "Set up GitLab CI/CD",
          detail:
            "Automated build and deploy so releases stopped being a manual step.",
        },
      ],
    },
  ],
  gallery: [
    { src: "/projects/umnogor/schemes.jpg", alt: "Dashboard of live mnemonic schemes for a treatment facility", caption: "Live mnemonic schemes of a facility" },
    { src: "/projects/umnogor/operational-log.png", alt: "Operational journal with active alarms and equipment tree", caption: "Operational journal with live alarms" },
    { src: "/projects/umnogor/acknowledgement.png", alt: "Alarm acknowledgement log table", caption: "Alarm acknowledgement log" },
    { src: "/projects/umnogor/parameters.png", alt: "Daily technological parameters report table", caption: "Technological parameters, daily report" },
  ],
  link: { label: "Product page", href: "https://matriks.group/products/umnogor" },
  note: "Built at Matriks, the company behind Umnogor. Screenshots are the product's public marketing material.",
};
