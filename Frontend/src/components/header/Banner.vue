<template>
    <div class="banner">
        <a href="/" class="home" draggable="false">
            <Logo class="logo" aria-hidden="true" />
            <span class="name">Citadel Solutions</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/components/brand/Logo.vue';
</script>

<style scoped>
.banner {
    width: 100%;
    height: 11rem;
    padding: 0 4rem;
    background: linear-gradient(to bottom, var(--MenuCard) 40%, var(--Background) 90%);
}

.home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: inherit;
    text-decoration: none;
}

.logo {
    width: 11rem;
    height: 11rem;
    color: #1e90ff33;
    pointer-events: none;
    transition: color 200ms;
}

.home:hover .logo,
.home:focus-visible .logo {
    color: var(--Accent);
}

.name {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: var(--font-exo);
    font-weight: 700;
    font-size: clamp(2.25rem, 8vw, 4.5rem);
    letter-spacing: -2px;
    -webkit-text-stroke: 2px black;
}
</style>