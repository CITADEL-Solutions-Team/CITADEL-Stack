import type { Service } from "@/views/Services/Service";

export const businessWebDevServices: Service[] = [
  {
    id: "cloudflare-pages-workers-hosting-business",
    name: "Cloudflare Pages & Workers Hosting",
    category: "WebDev",
    audience: "Business",
    group: "Hosting & Infrastructure",
    price: "$150 - $300 & $25 - $50/mo (management & monitoring)",
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
    id: "domain-setup-management-business",
    name: "Domain Setup & Management",
    category: "WebDev",
    audience: "Business",
    group: "Hosting & Infrastructure",
    price: "$75 - $150 & $10 - $20/mo (DNS/renewal management)",
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
    id: "website-migration-business",
    name: "Website Migration",
    category: "WebDev",
    audience: "Business",
    group: "Hosting & Infrastructure",
    price: "$500 - $1,500",
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
    id: "online-store-setup-business",
    name: "Online Store Setup",
    category: "WebDev",
    audience: "Business",
    group: "E-Commerce",
    price: "$800 - $2,500",
    description: "Every extra click or confusing checkout step is a customer walking away before they buy.",
    features: [
      "Product catalog build-out (per-item pricing)",
      "Payment gateway integration (Stripe, PayPal, etc.)",
      "Shopping cart and checkout configuration",
      "Inventory tracking setup"
    ],
    tags: ["ecommerce", "checkout", "payments", "inventory"]
  },
  {
    id: "custom-ecommerce-features-business",
    name: "Custom E-Commerce Features",
    category: "WebDev",
    audience: "Business",
    group: "E-Commerce",
    price: "$1,000 - $3,500",
    description: "Generic checkout flows leave money on the table — the right upsell or shipping logic pays for itself.",
    features: [
      "Custom checkout flow or upsell logic",
      "Subscription/recurring billing setup",
      "Custom shipping rate calculators",
      "Loyalty/rewards program integration"
    ],
    tags: ["ecommerce", "subscriptions", "shipping", "loyalty"]
  },
  {
    id: "template-website-setup-business",
    name: "Template Website Setup",
    category: "WebDev",
    audience: "Business",
    group: "Website Design & Development",
    price: "$1,200 - $3,000",
    description: "A professional site gets you online fast without sacrificing the polish that makes visitors trust you.",
    features: [
      "Selection from our pre-built, mobile-responsive template library",
      "Brand customization",
      "Content population (per-page pricing)",
      "Standard turnaround, typically 3-5 business days"
    ],
    tags: ["template", "website design", "quick turnaround"]
  },
  {
    id: "custom-template-design-business",
    name: "Custom Template Design",
    category: "WebDev",
    audience: "Business",
    group: "Website Design & Development",
    price: "$4,000 - $8,000",
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
    id: "custom-backend-development-business",
    name: "Custom Backend Development",
    category: "WebDev",
    audience: "Business",
    group: "Website Design & Development",
    price: "$2,500 - $8,000+ (scope-dependent)",
    description: "Manual processes don't scale, and the right system saves hours every week once it's built.",
    features: [
      "Custom forms, booking systems, or user portals",
      "Database integration (e.g., inventory, memberships, CRM)",
      "API integrations (payment processors, third-party tools)",
      "Custom admin dashboard for site owner"
    ],
    tags: ["backend", "database", "api integration", "admin dashboard"]
  },
  {
    id: "on-page-seo-setup-business",
    name: "On-Page SEO Setup",
    category: "WebDev",
    audience: "Business",
    group: "Search Engine Optimization (SEO) & Marketing",
    price: "$500 - $1,200",
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
    id: "ongoing-seo-management-business",
    name: "Ongoing SEO Management",
    category: "WebDev",
    audience: "Business",
    group: "Search Engine Optimization (SEO) & Marketing",
    price: "$700 - $1,500/mo",
    description: "Rankings aren't a set-it-and-forget-it deal — competitors are actively working to outrank you every month.",
    features: [
      "Monthly keyword tracking report",
      "Content optimization recommendations",
      "Backlink monitoring",
      "Competitor benchmarking"
    ],
    tags: ["seo", "monthly report", "backlinks"]
  },
  {
    id: "copywriting-business",
    name: "Copywriting",
    category: "WebDev",
    audience: "Business",
    group: "Search Engine Optimization (SEO) & Marketing",
    price: "$300 - $800 (homepage & core pages); $75 - $200/blog post; $30 - $75/product description",
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
    id: "standard-maintenance-plan-business",
    name: "Standard Maintenance Plan",
    category: "WebDev",
    audience: "Business",
    group: "Maintenance & Support",
    price: "$95 - $195/mo",
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
    id: "priority-support-plan-business",
    name: "Priority Support Plan",
    category: "WebDev",
    audience: "Business",
    group: "Maintenance & Support",
    price: "$250 - $450/mo",
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
    id: "analytics-reporting-business",
    name: "Analytics & Reporting",
    category: "WebDev",
    audience: "Business",
    group: "Maintenance & Support",
    price: "$150 - $350 & $100 - $250/mo",
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
    id: "speed-performance-optimization-business",
    name: "Speed & Performance Optimization",
    category: "WebDev",
    audience: "Business",
    group: "Add-On Services",
    price: "$400 - $900",
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
    id: "accessibility-ada-wcag-audit-business",
    name: "Accessibility (ADA/WCAG) Audit",
    category: "WebDev",
    audience: "Business",
    group: "Add-On Services",
    price: "$600 - $1,800",
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
    id: "custom-integrations-business",
    name: "Custom Integrations",
    category: "WebDev",
    audience: "Business",
    group: "Add-On Services",
    price: "$500 - $2,000 (integration-dependent)",
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