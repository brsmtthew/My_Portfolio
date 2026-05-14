export const profile = {
  name: "Boris Matthew Dairo",
  mark: "BD",
  role: "Full Stack and AI Automation",
  location: "Davao Core Node PH",
  email: "hello@example.com",
  summary:
    "I design full stack web systems, AI automations, and polished interfaces that help teams remove manual work, move faster, and ship with confidence.",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Resume", href: "#" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "History", href: "#history" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "50+", label: "Builds Shipped" },
  { value: "200+", label: "Automated Runs" },
  { value: "5+", label: "Years Experience" },
];

export const heroSignals = [
  "React + Vite builds",
  "AI workflow automation",
  "Mobile first interfaces",
];

export const heroInsights = [
  { value: "01", label: "Discovery" },
  { value: "02", label: "Interface" },
  { value: "03", label: "Automation" },
];

export const heroCapabilities = [
  "Landing pages",
  "Dashboards",
  "Workflow systems",
  "API bridges",
];

export const services = [
  {
    eyebrow: "Product Design",
    title: "Portfolio and Landing Pages",
    description:
      "Modern responsive pages that present your brand clearly, load fast, and guide visitors toward action.",
  },
  {
    eyebrow: "Automation",
    title: "AI Workflow Systems",
    description:
      "Practical automations for leads, reports, notifications, content workflows, and repetitive daily tasks.",
  },
  {
    eyebrow: "Full Stack",
    title: "Web App Development",
    description:
      "Interactive dashboards, forms, and tools built around real workflows, clean data, and smooth user experience.",
  },
  {
    eyebrow: "Integration",
    title: "API and Toolchain Bridges",
    description:
      "Reliable connections between CRMs, databases, spreadsheets, AI tools, email platforms, and internal systems.",
  },
];

export const stack = [
  { icon: "https://cdn.simpleicons.org/react/61DAFB", label: "React", group: "Frontend" },
  { icon: "https://cdn.simpleicons.org/vite/646CFF", label: "Vite", group: "Build Tool" },
  { icon: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JavaScript", group: "Language" },
  { icon: "https://cdn.simpleicons.org/python/3776AB", label: "Python", group: "Automation" },
  { icon: "https://cdn.simpleicons.org/n8n/EA4B71", label: "n8n", group: "Workflow" },
  { icon: "https://cdn.simpleicons.org/supabase/3FCF8E", label: "Supabase", group: "Backend" },
  { icon: "https://cdn.simpleicons.org/postgresql/4169E1", label: "Postgres", group: "Database" },
  { icon: "https://cdn.simpleicons.org/openai/10A37F", label: "OpenAI", group: "AI Systems" },
  { icon: "https://cdn.simpleicons.org/swagger/85EA2D", label: "REST APIs", group: "Integration" },
  { icon: "https://cdn.simpleicons.org/github/FFFFFF", label: "GitHub", group: "Versioning" },
  { icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", label: "Tailwind", group: "Styling" },
  { icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", label: "Next.js", group: "Framework" },
  { icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", label: "Node.js", group: "Runtime" },
  { icon: "https://cdn.simpleicons.org/firebase/FFCA28", label: "Firebase", group: "Backend" },
  { icon: "https://cdn.simpleicons.org/docker/2496ED", label: "Docker", group: "DevOps" },
  { icon: "https://cdn.simpleicons.org/cloudflare/F38020", label: "Cloudflare", group: "Deploy" },
];

export const coreStack = stack.slice(0, 8);
export const carouselStack = [...stack, ...stack];

export const projects = [
  {
    title: "Nebula Dash",
    category: "Fintech Dashboard",
    description:
      "A real time asset dashboard with portfolio states, alerts, and clean interaction patterns for fast decision making.",
    tags: ["React", "Supabase"],
    stats: ["Live states", "Smart alerts"],
  },
  {
    title: "CoreSync",
    category: "Backend System",
    description:
      "A synchronization gateway that keeps operational data flowing across tools with reliable handoffs and minimal downtime.",
    tags: ["API", "Redis"],
    stats: ["API gateway", "Data sync"],
  },
  {
    title: "MediTrack Records",
    category: "Medical Records System",
    description:
      "A patient records platform for organizing profiles, visits, notes, and history in a secure and easy to scan clinical workflow.",
    tags: ["React", "Database", "Forms"],
    stats: ["Patient files", "Visit history"],
  },
];

export const history = [
  {
    period: "2024 to Present",
    focus: "Current Focus",
    title: "Lead Systems Architect",
    highlight: "Systems that feel clean, useful, and ready to maintain.",
    description:
      "Designing modular web interfaces and automation flows that turn messy operations into reliable day to day tools.",
    points: ["React interfaces", "AI workflows", "API bridges"],
  },
  {
    period: "2021 to 2024",
    focus: "Automation Builds",
    title: "Senior Automation Engineer",
    highlight: "Less repetitive work, clearer handoffs, faster decisions.",
    description:
      "Built connected automation hubs for lead handling, reporting, notifications, and synchronized data movement across tools.",
    points: ["Workflow mapping", "Data sync", "Operations support"],
  },
  {
    period: "2019 to 2021",
    focus: "Design Foundation",
    title: "Full Stack Developer",
    highlight: "Practical product thinking with polished implementation.",
    description:
      "Shaped responsive pages, dashboards, forms, and database connected screens with attention to clarity and performance.",
    points: ["Responsive UI", "Forms", "Database tools"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "X", href: "https://x.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
];

export const footerNavItems = navItems.filter(({ label }) =>
  ["About", "Services", "Skills", "Work", "History", "Contact"].includes(label),
);
