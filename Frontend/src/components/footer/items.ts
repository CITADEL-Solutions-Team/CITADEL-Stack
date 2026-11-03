import type { ImageMetadata } from 'astro';

import LinkedInIcon from '@/assets/socials/linkedin.png';
import InstagramIcon from '@/assets/socials/instagram.png';
import TikTokIcon from '@/assets/socials/tiktok.png';
import YouTubeIcon from '@/assets/socials/youtube.png';

export interface Company {
    Name: string;
    Email: string;
    Phone: string;
    PhoneHref: string;
    TagLine: string;
}

export interface SocialLink {
    Icon: ImageMetadata;
    Label: string;
    To: string;
}

export interface FooterLink {
    Label: string;
    To: string;
}

export interface FooterSection {
    Name: string;
    Links: FooterLink[];
}

export const company: Company = {
    Name: 'Citadel Solutions',
    Email: 'services@citadelsolutions.tech',
    Phone: '630-360-2350',
    PhoneHref: '+16303602350',
    TagLine: 'Secure Today. Protect Tomorrow.',
};

export const footerSocials: SocialLink[] = [
    { Icon: LinkedInIcon, Label: 'LinkedIn', To: 'https://www.linkedin.com/in/citadel-solutions/' },
    { Icon: InstagramIcon, Label: 'Instagram', To: 'https://www.instagram.com/citadel.solutions.llc/' },
    { Icon: TikTokIcon, Label: 'TikTok', To: 'https://www.tiktok.com/@citadel.solutions' },
    { Icon: YouTubeIcon, Label: 'YouTube', To: 'https://www.youtube.com/@CitadelSolutionsLLC' },
];

export const footerSections: FooterSection[] = [
    {
        Name: 'Legal',
        Links: [
            { Label: 'Privacy Policy', To: '/policies/privacy-policy' },
            { Label: 'Cookie Policy', To: '/policies/cookie-policy' },
            { Label: 'Terms of Service', To: '/policies/terms-of-service' },
            { Label: 'Accessibility Statement', To: '/policies/accessibility-statement' },
        ],
    },
    {
        Name: 'Support',
        Links: [
            { Label: 'Contact Us', To: '/contact-us' },
            { Label: 'FAQ', To: '/faq' },
        ],
    },
];