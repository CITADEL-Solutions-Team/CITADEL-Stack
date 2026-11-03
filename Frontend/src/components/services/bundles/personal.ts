import type { ServiceTier } from './ServiceBundle.vue';

export const personalWebDevTiers: ServiceTier[] = [
    {
        color: '#1C4BE3',
        tier: 1,
        name: 'Personal Starter Bundle',
        tierInfo: '',
        price: '$525 - $1,275',
        pricingNote: '$40 - $75/mo',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Cloudflare Pages Hosting',
                'Domain Setup & Management',
                'Portfolio / Resume Website Setup',
                'On-Page SEO Setup',
                'Standard Maintenance Plan',
            ],
        },
    },
    {
        color: '#1C4BE3',
        tier: 2,
        name: 'Freelancer & Solopreneur Bundle',
        tierInfo: '',
        price: '$900 - $2,125',
        pricingNote: '$60 - $120/mo',
        includesPreviousTier: true,
        features: {
            'Included Services': [
                'Booking & Scheduling Integration',
                'Copywriting (bio/services page)',
                'Basic Analytics Setup',
            ],
        },
    },
    {
        color: '#1C4BE3',
        tier: 3,
        name: 'Creator Storefront Bundle',
        tierInfo: '',
        price: '$950 - $2,175',
        pricingNote: '$40 - $75/mo',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Cloudflare Pages Hosting',
                'Domain Setup & Management',
                'Template Website Setup',
                'Digital Product / Download Storefront Setup or Simple Online Shop Setup',
                'Payment / Tip Jar Integration',
                'On-Page SEO Setup',
                'Standard Maintenance Plan',
            ],
        },
    },
    {
        color: '#1C4BE3',
        tier: 4,
        name: 'Content Creator / Blogger Bundle',
        tierInfo: '',
        price: '$550 - $1,275',
        pricingNote: '$40 - $75/mo',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Cloudflare Pages Hosting',
                'Domain Setup & Management',
                'Personal Blog Setup',
                'On-Page SEO Setup',
                'Social Media Feed Integration',
                'Standard Maintenance Plan',
            ],
        },
    },
    {
        color: '#1C4BE3',
        tier: 5,
        name: 'Custom Personal Brand Bundle',
        tierInfo: '',
        price: '$1,325 - $3,225',
        pricingNote: '$75 - $140/mo',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Cloudflare Pages Hosting',
                'Domain Setup & Management',
                'Custom Template Design',
                'Copywriting',
                'Priority Support Plan',
                'Basic Analytics Setup',
            ],
        },
    },
];

export const personalComputerTiers: ServiceTier[] = [
    {
        color: '#7725AE',
        tier: 1,
        name: 'Refresh Package',
        tierInfo: '',
        price: '$150 - $225',
        pricingNote: '',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Software Cleanup & Tune-Up',
                'PC Physical Cleaning',
                'PC Health Checkup Report',
            ],
        },
    },
    {
        color: '#7725AE',
        tier: 2,
        name: 'Deep Clean & Diagnose',
        tierInfo: '',
        price: '$175 - $300',
        pricingNote: '',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'PC Physical Cleaning',
                'Hardware Diagnosis',
                'Virus & Malware Removal',
            ],
        },
    },
    {
        color: '#7725AE',
        tier: 3,
        name: 'New PC Day',
        tierInfo: '',
        price: '$225 - $400',
        pricingNote: '',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'New PC Setup',
                'Network & Wi-Fi Setup',
                'Data Backup Setup',
            ],
        },
    },
    {
        color: '#7725AE',
        tier: 4,
        name: 'Multi-PC Starter',
        tierInfo: '',
        price: '$425 - $775',
        pricingNote: '',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Up to 5 PCs',
                'New PC Setup or OS Reinstall per machine',
                'Network & Wi-Fi Setup',
                '30-day Remote Support Retainer included free',
            ],
        },
    },
    {
        color: '#7725AE',
        tier: 5,
        name: 'Gamer / Builder Bundle',
        tierInfo: '',
        price: '$175 - $375',
        pricingNote: '',
        includesPreviousTier: false,
        features: {
            'Included Services': [
                'Build Advising Consult',
                'Custom PC Build',
                'BIOS Configuration & Update',
                'Overclocking & Tuning Available as Add-on',
            ],
        },
    },
];