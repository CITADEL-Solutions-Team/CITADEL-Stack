<template>
    <div class="px-16 py-8">
        <ServiceCategory v-for="category in categories">
            <template v-slot:Name>
                {{ category.Name }}
            </template>
            <template v-slot:Items>
                <ServiceCard v-for="svc in category.Services">
                    <template v-slot:Name>
                        {{ svc.Name }}
                    </template>
                    <template v-slot:Price>
                        {{ svc.Price }}
                    </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li v-for="item in svc.Details"> {{ item }} </li>
                        </div>
                    </template>
                    <template v-slot:Why>
                        {{ svc.Why }}
                    </template>                                                         
                </ServiceCard>
            </template>
        </ServiceCategory>
    </div>
</template>

<script setup lang="ts">
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
    import type { Category } from '@/views/Services/Service'

    const categories: Category[] = [
        {
            Name: "Website Hosting & Infrastructure",
            Services: [
                {
                    Name: "Cloudflare Pages & Workers Hosting",
                    Price: "$10/mo",
                    Details: [
                        "Global CDN delivery for fast load times worldwide",
                        "Free SSL/TLS certificate with auto-renewal",
                        "Built-in DDoS protection and firewall",
                        "Uptime monitoring with downtime alerts",
                    ],
                    Why: "Slow, unprotected hosting costs you visitors and rankings before they even see what you offer."
                },
                {
                    Name: "Domain Setup & Management",
                    Price: "$75 setup + $20/yr",
                    Details: [
                        "Domain registration or transfer-in assistance",
                        "DNS record configuration",
                        "Custom email routing (e.g., you@yourbusiness.com)",
                        "Renewal tracking so domains never lapse",
                    ],
                    Why: "A lapsed domain can take your entire business offline overnight, and it happens more often than you'd think."
                },
                {
                    Name: "Website Migration",
                    Price: "$250",
                    Details: [
                        "Full transfer of existing site to Cloudflare",
                        "Content and media migration",
                        "Redirect setup to preserve SEO rankings",
                        "Pre-launch testing checklist",
                    ],
                    Why: "A move done wrong can tank your search rankings and break links overnight; a move done right, no one even notices."
                }
            ]
        }, // Website Hosting & Infrastructure
        {
            Name: "E-Commerce",
            Services: [
                {
                    Name: "Online Store Setup",
                    Price: "$800 (up to 25 products), +$7/product after",
                    Details: [
                        "Product catalog build-out (per-item pricing)",
                        "Payment gateway integration (Stripe, PayPal, etc.)",
                        "Shopping cart and checkout configuration",
                        "Inventory tracking setup",
                    ],
                    Why: "Every extra click or confusing checkout step is a customer walking away before they buy."
                },
                {
                    Name: "Custom E-Commerce Features",
                    Price: "$1,000 per feature",
                    Details: [
                        "Custom checkout flow or upsell logic",
                        "Subscription/recurring billing setup",
                        "Custom shipping rate calculators",
                        "Loyalty/rewards program integration",
                    ],
                    Why: "Generic checkout flows leave money on the table — the right upsell or shipping logic pays for itself."
                },
            ]
        }, // E-Commerce
        {
            Name: "Website Design & Development",
            Services: [
                {
                    Name: "Template Website Setup",
                    Price: "$1,200-$2,000",
                    Details: [
                        "Selection from our pre-built, mobile-responsive template library",
                        "Brand customization",
                        "Content population (per-page pricing)",
                        "Standard turnaround, typically 3-5 business days",
                    ],
                    Why: "A professional site gets you online fast without sacrificing the polish that makes visitors trust you."
                },
                {
                    Name: "Custom Design",
                    Price: "$2,500",
                    Details: [
                        "100% original design built to brand specs",
                        "Wireframe/mockup approval before build",
                        "Unlimited revisions within scope",
                        "Extended turnaround (timeline based on scope)",
                    ],
                    Why: "Your website is often the first impression a customer gets, and a generic template can quietly cost you credibility."
                },
                {
                    Name: "Custom Backend Development",
                    Price: "Starting at $3,000",
                    Details: [
                        "Custom forms, booking systems, or user portals",
                        "Database integration (e.g., inventory, memberships, CRM)",
                        "API integrations (payment processors, third-party tools)",
                        "Custom admin dashboard for site owner",
                    ],
                    Why: "Manual processes don't scale, and the right system saves hours every week once it's built."
                }
            ]
        }, // Website Design & Development
        {
            Name: "Search Engine Optimization (SEO) & Marketing",
            Services: [
                {
                    Name: "On-Page SEO Setup",
                    Price: "$350",
                    Details: [
                        "Meta titles/descriptions for all pages",
                        "Image alt-text optimization",
                        "Sitemap and robots.txt configuration",
                        "Google Search Console/Analytics setup",
                    ],
                    Why: "A well-optimized website helps more potential customers find your business through search engines."
                },
                {
                    Name: "Ongoing SEO Management",
                    Price: "$500/mo",
                    Details: [
                        "Monthly keyword tracking report",
                        "Content optimization recommendations",
                        "Backlink monitoring",
                        "Competitor benchmarking",
                    ],
                    Why: "Rankings aren't a set-it-and-forget-it deal — competitors are actively working to outrank you every month."
                },
                {
                    Name: "Copywriting",
                    Price: "$100/page, $150/blog post",
                    Details: [
                        "Homepage and core page copy",
                        "Blog post writing (per-post pricing)",
                        "Product descriptions (per-item pricing)",
                        "Email/newsletter copy",
                    ],
                    Why: "Even a great-looking site won't convert if the words on it don't tell visitors why they should care."
                }
            ]
        }, // Search Engine Optimization (SEO) & Marketing
        {
            Name: "Maintenance & Support",
            Services: [
                {
                    Name: "Standard Maintenance Plan",
                    Price: "$75/mo",
                    Details: [
                        "Regular backups",
                        "Security monitoring and patching",
                        "Uptime checks with incident response",
                        "Minor content updates (per month allotment)",
                    ],
                    Why: "A neglected website becomes a vulnerable one, and small issues left alone turn into downtime."
                },
                {
                    Name: "Priority Support Plan",
                    Price: "$200/mo",
                    Details: [
                        "Faster response time SLA",
                        "Direct line/chat access",
                        "Emergency downtime response",
                        "Monthly performance report",
                    ],
                    Why: "When something breaks on your site, every hour of downtime is lost visitors and lost revenue."
                },
                {
                    Name: "Analytics & Reporting",
                    Price: "$75/mo",
                    Details: [
                        "Traffic and conversion dashboard setup",
                        "Monthly performance summary",
                        "Goal/event tracking configuration",
                        "Quarterly strategy review call",
                    ],
                    Why: "You can't improve what you're not measuring, and most site owners have no idea where visitors actually drop off."
                }
            ]
        }, // Maintenance & Support
        {
            Name: "Add-On Services",
            Services: [
                {
                    Name: "Speed & Performance Optimization",
                    Price: "$300",
                    Details: [
                        "Image compression and lazy loading",
                        "Caching configuration",
                        "Core Web Vitals audit and fixes",
                        "Load time benchmarking report",
                    ],
                    Why: "A slow site doesn't just frustrate visitors, it gets penalized in search rankings too."
                },
                {
                    Name: "Accessibility (ADA/WCAG) Audit",
                    Price: "$500-$1,500",
                    Details: [
                        "Automated + manual accessibility scan",
                        "Remediation of critical issues",
                        "Compliance summary report",
                        "Alt-text and contrast fixes",
                    ],
                    Why: "An inaccessible website can mean lost customers and legal exposure, and most issues are simple to fix once identified."
                },
                {
                    Name: "Custom Integrations",
                    Price: "$400 per integration",
                    Details: [
                        "CRM or email marketing platform hookup",
                        "Live chat/chatbot installation",
                        "Social media feed integration",
                        "Third-party API connections",
                    ],
                    Why: "Disconnected tools mean manual double-entry; integrations let your systems actually talk to each other."
                }
            ]
        }, // Add-On Services
    ]
</script>