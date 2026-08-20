<template>
    <section class="text-center p-4">
        <h1 class="text-4xl font-bold">Business Service Bundles</h1>
        <div class="bg-(--AltCard) rounded-2xl p-6">
            <h2 class="text-3xl font-bold">Find the right fit for your business.</h2>
            <p class="text-lg font-semibold">Pick the bundle that best fits your needs or put together a unique bundle customized just for your business!</p>
            <p class="text-(--SupText)">Bundles shown are starting points, not limits. All bundles include a free onboarding call and monthly check-in.</p>
        </div>
    </section>
    <ServiceBundle
    :tagLevel="2"
    :sectionName="'Website Development'"
    :serviceTiers="webDevCards"></ServiceBundle>
</template>

<script setup lang="ts">
    import ServiceBundle from '@/components/Cards/ServiceBundle/ServiceBundle.vue';

    const cybersecCards = [
        {
            color: "#AF0003",
            tier: 1,
            tierInfo: "Tier 1 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#AF0003",
            tier: 2,
            tierInfo: "Tier 2 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#AF0003",
            tier: 3,
            tierInfo: "Tier 3 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        }
    ]
    
    const webDevCards = [
    {
        color: "#1C4BE3",
        tier: 1,
        name: "Starter Business Bundle",
        tierInfo: "",
        price: "$1,650 - $3,950",
        pricingNote: "$125 - $225/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages/Workers Hosting",
            "Domain Setup & Management",
            "Template Website Setup",
            "On-Page SEO Setup",
            "Standard Maintenance Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 2,
        name: "Small Business Growth Bundle",
        tierInfo: "",
        price: "$2,650 - $6,850",
        pricingNote: "$250 - $450/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages/Workers Hosting",
            "Domain Setup & Management",
            "Template Website Setup",
            "Online Store Setup",
            "On-Page SEO Setup",
            "Speed & Performance Optimization",
            "Priority Support Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 3,
        name: "Custom Enterprise Bundle",
        tierInfo: "",
        price: "$6,950 - $17,250",
        pricingNote: "$350 - $675/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages/Workers Hosting",
            "Domain Setup & Management",
            "Website Migration (if applicable)",
            "Custom Template Design",
            "Custom Backend Development",
            "On-Page SEO Setup",
            "Copywriting",
            "Priority Support Plan",
            "Analytics & Reporting"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 4,
        name: "E-Commerce Bundle",
        tierInfo: "",
        price: "$5,050 - $11,100",
        pricingNote: "$250 - $450/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages/Workers Hosting",
            "Domain Setup & Management",
            "Template Website Setup or Custom Template Design",
            "Online Store Setup",
            "On-Page SEO Setup",
            "Speed & Performance Optimization",
            "Priority Support Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 5,
        name: "Local Service Business Bundle",
        tierInfo: "",
        price: "$4,200 - $12,450",
        pricingNote: "$125 - $225/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages & Workers Hosting",
            "Domain Setup & Management",
            "Template Website Setup",
            "Custom Backend Development (booking/appointment system)",
            "On-Page SEO Setup",
            "Standard Maintenance Plan",
            "Custom Integrations (CRM or scheduling tool)"
        ]
        }
    }
    ];
    
    const computerServicesCards = [
  {
    color: "#7725AE",
    tier: 1,
    name: "Essential",
    tierInfo: "For small teams that are just getting started",
    price: "tbd",
    pricingNote: "$X + $X/mo, +$X/device over 10",
    includesPreviousTier: false,
    features: {
      "Maintenance": [
        "PC Physical Cleaning & Dust Removal",
        "Software Cleanup & Performance Tune-up"
      ],
      "Setup & Configuration": [
        "New PC Setup",
        "Network & Wi-Fi Setup"
      ],
      "Diagnostics & Troubleshooting": [
        "Hardware Troubleshooting & Diagnosis"
      ],
      "Reporting": [
        "PC Health Checkup Report"
      ]
    }
  },
  {
    color: "#7725AE",
    tier: 2,
    name: "Professional",
    tierInfo: "For growing teams that need more coverage",
    price: "tbd",
    pricingNote: "$X + $X/mo, +$X/device over 15",
    includesPreviousTier: true,
    features: {
      "Maintenance": [
        "Scheduled Maintenance Plan"
      ],
      "BIOS & Firmware": [
        "BIOS Configuration & Update"
      ],
      "Setup & Configuration": [
        "Operating System Install & Reinstall",
        "Employee Onboarding/Offboarding Device Setup"
      ],
      "Diagnostics & Troubleshooting": [
        "Virus & Malware Removal"
      ],
      "Ongoing Care": [
        "Data Backup Setup",
        "Remote Support Retainer"
      ]
    }
  },
  {
    color: "#7725AE",
    tier: 3,
    name: "Enterprise",
    tierInfo: "For businesses managing device fleets or elevated hardware needs",
    price: "tbd",
    pricingNote: "$X + $X/mo, +$X/device over 20",
    includesPreviousTier: true,
    features: {
      "Setup & Configuration": [
        "Multi-PC Fleet Deployment & Imaging"
      ],
      "Builds & Upgrades": [
        "Component Upgrade & Installation",
        "Build Advising & Parts Consultation"
      ],
      "Diagnostics & Troubleshooting": [
        "Data Recovery"
      ],
      "BIOS & Firmware": [
        "Overclocking & Performance Tuning (available as add-on)"
      ]
    }
  }
];

</script>