export type Service = {
    id: string,
    name: string,
    category: "WebDev"|"CyberSec"|"PCServices"
    audience: "Personal"|"Business",
    group: string,
    price: string | null,
    description: string,
    features: string[],
    tags: string[],
}

export const serviceGroups = [
  "Hosting & Infrastructure",
  "E-Commerce",
  "Website Design & Development",
  "Personal Site Design & Setup",
  "Selling & Booking",
  "Search Engine Optimization (SEO) & Marketing",
  "Maintenance & Support",
  "Add-On Services"
] as const;

export type ServiceGroup = typeof serviceGroups[number];