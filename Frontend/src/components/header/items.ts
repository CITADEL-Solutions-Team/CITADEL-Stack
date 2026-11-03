export interface NavItem {
    label: string;
    to: string;
}

export const navItems: NavItem[] = [
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Mission', to: '/our-mission' },
    { label: 'Our Services', to: '/services' },
    { label: 'Request Services', to: '/contact-us' },
];