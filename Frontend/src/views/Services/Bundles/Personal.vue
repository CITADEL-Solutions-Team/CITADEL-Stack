<template>
    <section class="text-center p-4">
        <h1 class="text-4xl font-bold">Personal Service Bundles</h1>
        <div class="bg-(--AltCard) rounded-2xl p-6">
            <h2 class="text-3xl font-bold">Find the right fit for you.</h2>
            <p class="text-lg font-semibold">Pick the bundle that best fits your needs or put together a unique bundle customized just for you!</p>
            <p class="text-(--SupText)">Bundles shown are starting points, not limits. All bundles include a free onboarding call and monthly check-in.</p>
        </div>
    </section>

    <ServiceBundle
    id="WebsiteDevelopment"
    :tagLevel="2"
    :sectionName="'Website Development'"
    :serviceTiers="webDevCards"></ServiceBundle>

    <ServiceBundle
    id="ComputerServices"
    :tagLevel="2"
    :sectionName="'Computer Services'"
    :serviceTiers="computerServicesCards"></ServiceBundle>

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
        name: "Personal Starter Bundle",
        tierInfo: "",
        price: "$525 - $1,275",
        pricingNote: "$40 - $75/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages Hosting",
            "Domain Setup & Management",
            "Portfolio / Resume Website Setup",
            "On-Page SEO Setup",
            "Standard Maintenance Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 2,
        name: "Freelancer & Solopreneur Bundle",
        tierInfo: "",
        price: "$900 - $2,125",
        pricingNote: "$60 - $120/mo",
        includesPreviousTier: true,
        features: {
        "Included Services": [
            "Booking & Scheduling Integration",
            "Copywriting (bio/services page)",
            "Basic Analytics Setup"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 3,
        name: "Creator Storefront Bundle",
        tierInfo: "",
        price: "$950 - $2,175",
        pricingNote: "$40 - $75/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages Hosting",
            "Domain Setup & Management",
            "Template Website Setup",
            "Digital Product / Download Storefront Setup or Simple Online Shop Setup",
            "Payment / Tip Jar Integration",
            "On-Page SEO Setup",
            "Standard Maintenance Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 4,
        name: "Content Creator / Blogger Bundle",
        tierInfo: "",
        price: "$550 - $1,275",
        pricingNote: "$40 - $75/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages Hosting",
            "Domain Setup & Management",
            "Personal Blog Setup",
            "On-Page SEO Setup",
            "Social Media Feed Integration",
            "Standard Maintenance Plan"
        ]
        }
    },
    {
        color: "#1C4BE3",
        tier: 5,
        name: "Custom Personal Brand Bundle",
        tierInfo: "",
        price: "$1,325 - $3,225",
        pricingNote: "$75 - $140/mo",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Cloudflare Pages Hosting",
            "Domain Setup & Management",
            "Custom Template Design",
            "Copywriting",
            "Priority Support Plan",
            "Basic Analytics Setup"
        ]
        }
    }
    ];
    const computerServicesCards = [
    {
        color: "#7725AE",
        tier: 1,
        name: "Refresh Package",
        tierInfo: "",
        price: "$150 - $225",
        pricingNote: "",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Software Cleanup & Tune-Up",
            "PC Physical Cleaning",
            "PC Health Checkup Report"
        ]
        }
    },
    {
        color: "#7725AE",
        tier: 2,
        name: "Deep Clean & Diagnose",
        tierInfo: "",
        price: "$175 - $300",
        pricingNote: "",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "PC Physical Cleaning",
            "Hardware Diagnosis",
            "Virus & Malware Removal"
        ]
        }
    },
    {
        color: "#7725AE",
        tier: 3,
        name: "New PC Day",
        tierInfo: "",
        price: "$225 - $400",
        pricingNote: "",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "New PC Setup",
            "Network & Wi-Fi Setup",
            "Data Backup Setup"
        ]
        }
    },
    {
        color: "#7725AE",
        tier: 4,
        name: "Multi-PC Starter",
        tierInfo: "",
        price: "$425 - $775",
        pricingNote: "",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Up to 5 PCs",
            "New PC Setup or OS Reinstall per machine",
            "Network & Wi-Fi Setup",
            "30-day Remote Support Retainer included free"
        ]
        }
    },
    {
        color: "#7725AE",
        tier: 5,
        name: "Gamer / Builder Bundle",
        tierInfo: "",
        price: "$175 - $375",
        pricingNote: "",
        includesPreviousTier: false,
        features: {
        "Included Services": [
            "Build Advising Consult",
            "Custom PC Build",
            "BIOS Configuration & Update",
            "Overclocking & Tuning Available as Add-on"
        ]
        }
    }
    ];

</script>