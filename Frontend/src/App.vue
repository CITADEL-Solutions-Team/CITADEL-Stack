<template>
    <header>
        <Banner class="flex-none">
        </Banner>
        <Nav class="flex-none" :NavItems="NavItems"/>
    </header>
    <body class="px-8 md:px-16 lg:px-24">
        <RouterView class="grow" />
    </body>
    <footer>    
        <Footer
        class="px-8 md:px-16 lg:px-24"
        :SocialsLinks="footerSocials"
        :Sections="Sections"
        >
            <template v-slot:CompanyName>
                Citadel Solutions
            </template>
            <template v-slot:Email>
                services@citadelsolutions.tech
            </template>
            <template v-slot:Phone>
                630-360-2350
            </template>
            <template v-slot:Tagline>
                Secure Today. Protect Tomorrow.
            </template>
        </Footer>
    </footer>  
</template>

<script setup lang="ts">
    import Banner from './components/Misc/Banner.vue';
    import Nav from './components/Misc/Nav.vue';
    import Footer from './components/Misc/Footer.vue';
    
    import LinkedInIcon from '@/assets/Socials/InBug-White.png'
    import InstagramIcon from '@/assets/Socials/Instagram_Glyph_White.png'
    import TiktokIcon from '@/assets/Socials/TikTok_Icon_Black_Circle (1).png'
    import YoutubeIcon from '@/assets/Socials/yt_icon_white_digital.png'
 
    const NavItems: { label: string, to: string }[] = [
        {
            label: "About Us",
            to: "/about-us"
        },
        {
            label: "Our Mission",
            to: "/our-mission"
        },
        {
            label: "Our Services",
            to: "/services"
        },
        {
            label: "Request Services",
            to: "/contact-us"
        },
        
    ]

    const footerSocials: {Icon:any, Label:string, To:string}[] = [
        {
            Icon: LinkedInIcon, 
            Label: "Linked In", 
            To: "https://www.linkedin.com/in/citadel-solutions/",
        },
        {
            Icon: InstagramIcon,
            Label: "Instagram", 
            To: "https://www.instagram.com/citadel.solutions.llc/",
        },
        {
            Icon: TiktokIcon, 
            Label: "Tiktok", 
            To: "https://www.tiktok.com/@citadel.solutions",
        },
        {
            Icon: YoutubeIcon,
            Label: "Youtube",
            To: "https://www.youtube.com/@CitadelSolutionsLLC",
        }
    ]
    const Sections: {Name: string, Links: {Label: string, To: string}[],}[] = [
        {
            Name: "Legal",
            Links: [
                {
                    Label: "Privacy Policy",
                    To: "/policies/privacy-policy",
                },
                {
                    Label: "Cookie Policy",
                    To: "/policies/cookie-policy",
                },
                {
                    Label: "Terms of Service",
                    To: "/policies/terms-of-service",
                },
                {
                    Label: "Accessibility Statement",
                    To: "/policies/accessibility-statement",
                }
            ]
        },
        {
            Name: "Support",
            Links: [
                {
                    Label: "Contact Us",
                    To: "/contact-us",
                },
                {
                    Label: "FAQ",
                    To: "/faq",
                },
            ]
        }
    ]
</script>
