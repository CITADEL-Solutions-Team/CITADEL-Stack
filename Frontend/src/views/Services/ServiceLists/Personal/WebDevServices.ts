import type { Service } from "@/views/Services/Service";

export const personalWebDevServices: Service[] = [
  {
    id: "cloudflare-pages-workers-hosting-personal",
    name: "Cloudflare Pages & Workers Hosting",
    category: "WebDev",
    audience: "Personal",
    group: "Hosting & Infrastructure",
    price: "$75 - $150 & $10 - $20/mo",
    description: "Slow, unprotected hosting costs you visitors and rankings before they even see what you offer.",
    features: [
      "Global CDN delivery for fast load times worldwide",
      "Free SSL/TLS certificate with auto-renewal",
      "Built-in DDoS protection and firewall",
      "Uptime monitoring with downtime alerts"
    ],
    tags: ["hosting", "cdn", "ssl", "ddos protection", "uptime monitoring"]
  },
  {
    id: "domain-setup-management-personal",
    name: "Domain Setup & Management",
    category: "WebDev",
    audience: "Personal",
    group: "Hosting & Infrastructure",
    price: "$50 - $100 & $8 - $15/mo",
    description: "A lapsed domain can take your entire business offline overnight, and it happens more often than you'd think.",
    features: [
      "Domain registration or transfer-in assistance",
      "DNS record configuration",
      "Custom email routing (e.g., you@yourbusiness.com)",
      "Renewal tracking so domains never lapse"
    ],
    tags: ["domain", "dns", "email routing"]
  },
  {
    id: "website-migration-personal",
    name: "Website Migration",
    category: "WebDev",
    audience: "Personal",
    group: "Hosting & Infrastructure",
    price: "$250 - $600",
    description: "A move done wrong can tank your search rankings and break links overnight; a move done right, no one even notices.",
    features: [
      "Full transfer of existing site to Cloudflare",
      "Content and media migration",
      "Redirect setup to preserve SEO rankings",
      "Pre-launch testing checklist"
    ],
    tags: ["migration", "seo", "redirects"]
  },
  {
    id: "portfolio-resume-website-setup",
    name: "Portfolio / Resume Website Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Personal Site Design & Setup",
    price: "$300 - $800",
    description: "Hiring managers and clients decide in seconds whether you look credible; a scattered PDF resume doesn't compete with a clean, searchable site.",
    features: [
      "Selection from portfolio-style templates (work samples, case studies, resume layout)",
      "Downloadable resume/CV integration",
      "Skills, experience, and project showcase sections",
      "Contact form tied directly to your inbox"
    ],
    tags: ["portfolio", "resume", "personal branding"]
  },
  {
    id: "personal-blog-setup",
    name: "Personal Blog Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Personal Site Design & Setup",
    price: "$250 - $600",
    description: "A blog only builds an audience if people can actually find and follow your posts. The setup determines whether that happens automatically or never.",
    features: [
      "Blog platform setup with easy publishing workflow",
      "Category/tag organization for posts",
      "Comment section or newsletter signup integration",
      "RSS feed setup for subscribers"
    ],
    tags: ["blog", "publishing", "rss"]
  },
  {
    id: "link-in-bio-landing-page-setup",
    name: "Link-in-Bio / Landing Page Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Personal Site Design & Setup",
    price: "$99 - $250",
    description: "A generic link-in-bio tool puts someone else's branding and ads between you and your audience. Owning the page keeps the traffic (and the trust) yours.",
    features: [
      "Single-page hub linking out to social profiles, shop, or content",
      "Mobile-first design built for traffic from Instagram/TikTok/etc.",
      "Click tracking so you know what's actually getting clicked",
      "Easy self-editing for swapping links as needed"
    ],
    tags: ["link in bio", "landing page", "social"]
  },
  {
    id: "template-website-setup-personal",
    name: "Template Website Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Personal Site Design & Setup",
    price: "$400 - $900",
    description: "A professional site gets you online fast without sacrificing the polish that makes visitors trust you.",
    features: [
      "Selection from our pre-built, mobile-responsive template library",
      "Brand customization",
      "Content population (per-page pricing)",
      "Standard turnaround, typically 3–5 business days"
    ],
    tags: ["template", "website design", "quick turnaround"]
  },
  {
    id: "custom-template-design-personal",
    name: "Custom Template Design",
    category: "WebDev",
    audience: "Personal",
    group: "Personal Site Design & Setup",
    price: "$1,200 - $3,000",
    description: "Your website is often the first impression a customer gets, and a generic template can quietly cost you credibility.",
    features: [
      "Original design built to brand specs",
      "Wireframe/mockup approval before build",
      "Unlimited revisions within scope",
      "Extended turnaround (timeline based on scope)"
    ],
    tags: ["custom design", "branding", "wireframes"]
  },
  {
    id: "digital-product-download-storefront-setup",
    name: "Digital Product / Download Storefront Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Selling & Booking",
    price: "$300 - $700",
    description: "Digital products sell on convenience. If delivery isn't instant and automatic, buyers get nervous and abandon the purchase.",
    features: [
      "Secure file delivery for ebooks, presets, templates, courses, etc.",
      "Simple checkout built for one-time digital purchases",
      "Automatic delivery after payment (no manual emailing files)",
      "License/download limit configuration to prevent unauthorized sharing"
    ],
    tags: ["digital products", "downloads", "checkout"]
  },
  {
    id: "simple-online-shop-setup",
    name: "Simple Online Shop Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Selling & Booking",
    price: "$400 - $900 & optional $15 - $30/mo (catalog/order support)",
    description: "You don't need enterprise e-commerce to start selling. You need something that works on day one without a steep learning curve.",
    features: [
      "Product listings for a small catalog (handmade goods, merch, low-SKU inventory)",
      "Payment gateway integration (Stripe, PayPal, etc.)",
      "Basic shipping/local pickup configuration",
      "Order notification setup so you never miss a sale"
    ],
    tags: ["ecommerce", "small shop", "payments"]
  },
  {
    id: "booking-scheduling-integration",
    name: "Booking & Scheduling Integration",
    category: "WebDev",
    audience: "Personal",
    group: "Selling & Booking",
    price: "$200 - $450",
    description: "Every back-and-forth email to find a time is a chance for a client to lose interest or book someone else instead.",
    features: [
      "Calendar sync so clients book directly into your real availability",
      "Automated confirmation and reminder emails/texts",
      "Buffer time and service-length configuration",
      "Payment/deposit collection at time of booking (optional)"
    ],
    tags: ["booking", "scheduling", "calendar"]
  },
  {
    id: "payment-tip-jar-integration",
    name: "Payment / Tip Jar Integration",
    category: "WebDev",
    audience: "Personal",
    group: "Selling & Booking",
    price: "$100 - $250",
    description: "Making it easy for people to pay or support you removes the single biggest point of friction between interest and income.",
    features: [
      "One-click payment button setup (PayPal, Stripe, Venmo, etc.)",
      "\"Buy me a coffee\" / tip jar style widget",
      "Optional one-time service payment links",
      "Mobile-optimized checkout flow"
    ],
    tags: ["payments", "tip jar", "donations"]
  },
  {
    id: "on-page-seo-setup-personal",
    name: "On-Page SEO Setup",
    category: "WebDev",
    audience: "Personal",
    group: "Search Engine Optimization (SEO) & Marketing",
    price: "$200 - $450",
    description: "A well-optimized website helps more potential customers find your business through search engines.",
    features: [
      "Meta titles/descriptions for all pages",
      "Image alt-text optimization",
      "Sitemap and robots.txt configuration",
      "Google Search Console/Analytics setup"
    ],
    tags: ["seo", "analytics", "meta tags"]
  },
  {
    id: "copywriting-personal",
    name: "Copywriting",
    category: "WebDev",
    audience: "Personal",
    group: "Search Engine Optimization (SEO) & Marketing",
    price: "$150 - $400 (homepage & core pages); $50 - $125/blog post; $20 - $50/product description",
    description: "Even a great-looking site won't convert if the words on it don't tell visitors why they should care.",
    features: [
      "Homepage and core page copy",
      "Blog post writing (per-post pricing)",
      "Product descriptions (per-item pricing)",
      "Email/newsletter copy"
    ],
    tags: ["copywriting", "content", "blog"]
  },
  {
    id: "standard-maintenance-plan-personal",
    name: "Standard Maintenance Plan",
    category: "WebDev",
    audience: "Personal",
    group: "Maintenance & Support",
    price: "$25 - $50/mo",
    description: "A neglected website becomes a vulnerable one, and small issues left alone turn into downtime.",
    features: [
      "Regular backups",
      "Security monitoring and patching",
      "Uptime checks with incident response",
      "Minor content updates (per month allotment)"
    ],
    tags: ["maintenance", "backups", "security patching"]
  },
  {
    id: "priority-support-plan-personal",
    name: "Priority Support Plan",
    category: "WebDev",
    audience: "Personal",
    group: "Maintenance & Support",
    price: "$40 - $75/mo",
    description: "When something breaks on your site, every hour of downtime is lost visitors and lost revenue.",
    features: [
      "Faster response time SLA",
      "Direct line/chat access",
      "Emergency downtime response",
      "Monthly performance report"
    ],
    tags: ["support", "sla", "priority"]
  },
  {
    id: "analytics-reporting-personal",
    name: "Analytics & Reporting",
    category: "WebDev",
    audience: "Personal",
    group: "Maintenance & Support",
    price: "$75 - $150 & optional $25 - $50/mo",
    description: "You can't improve what you're not measuring, and most site owners have no idea where visitors actually drop off.",
    features: [
      "Traffic and conversion dashboard setup",
      "Monthly performance summary",
      "Goal/event tracking configuration",
      "Quarterly strategy review call"
    ],
    tags: ["analytics", "reporting", "dashboards"]
  },
  {
    id: "speed-performance-optimization-personal",
    name: "Speed & Performance Optimization",
    category: "WebDev",
    audience: "Personal",
    group: "Add-On Services",
    price: "$150 - $400",
    description: "A slow site doesn't just frustrate visitors, it gets penalized in search rankings too.",
    features: [
      "Image compression and lazy loading",
      "Caching configuration",
      "Core Web Vitals audit and fixes",
      "Load time benchmarking report"
    ],
    tags: ["performance", "speed", "core web vitals"]
  },
  {
    id: "accessibility-ada-wcag-audit-personal",
    name: "Accessibility (ADA/WCAG) Audit",
    category: "WebDev",
    audience: "Personal",
    group: "Add-On Services",
    price: "$250 - $600",
    description: "An inaccessible website can mean lost customers and legal exposure, and most issues are simple to fix once identified.",
    features: [
      "Automated + manual accessibility scan",
      "Remediation of critical issues",
      "Compliance summary report",
      "Alt-text and contrast fixes"
    ],
    tags: ["accessibility", "ada", "wcag"]
  },
  {
    id: "social-media-feed-integration",
    name: "Social Media Feed Integration",
    category: "WebDev",
    audience: "Personal",
    group: "Add-On Services",
    price: "$75 - $200",
    description: "A feed embed keeps your site looking active even when you're not actively updating it yourself, and it nudges visitors toward following you elsewhere.",
    features: [
      "Live feed embed from Instagram, TikTok, or other platforms",
      "Auto-updating so content stays fresh without manual work",
      "Clickable posts linking back to your social profiles",
      "Mobile-responsive layout matching your site design"
    ],
    tags: ["social media", "feed embed"]
  },
  {
    id: "custom-integrations-personal",
    name: "Custom Integrations",
    category: "WebDev",
    audience: "Personal",
    group: "Add-On Services",
    price: "$200 - $600 (integration-dependent)",
    description: "Disconnected tools mean manual double-entry; integrations let your systems actually talk to each other.",
    features: [
      "CRM or email marketing platform hookup",
      "Live chat/chatbot installation",
      "Social media feed integration",
      "Third-party API connections"
    ],
    tags: ["integrations", "crm", "api"]
  }
];