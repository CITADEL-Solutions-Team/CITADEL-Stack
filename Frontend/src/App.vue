<template>
    <header>
        <Banner class="flex-none">
            <template v-slot:Logo>
                <img class="aspect-square p-5" src="./assets/CITADEL Logo.svg" alt="">
            </template>
        </Banner>
        <Nav class="flex-none" :NavItems="NavItems"/>
    </header>
    <body class="px-8 md:px-16 lg:px-32 xl:px-48">
        <RouterView class="grow" />
    </body>
    <footer>
        <Footer
        class="px-8 md:px-16 lg:px-32 xl:px-48"
        :SocialsLinks="footerSocials"
        :Sections="Sections"
        >
        </Footer>
    </footer>  
</template>

<script setup lang="ts">
    import Banner from './components/Misc/Banner.vue';
    import Nav from './components/Misc/Nav.vue';
    import Footer from './components/Misc/Footer.vue';
 
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

    const footerSocials: {Icon:any, Label:string, To:string}[] = []
    const Sections: {Name: string, Links: {Label: string, To: string}[],}[] = []
</script>
