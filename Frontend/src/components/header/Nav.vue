<template>
    <nav aria-label="Main Nav Bar">
        <ul>
            <li v-for="nav in NavItems" :key="nav.to">
                <a
                    :href="nav.to"
                    :aria-current="isActive(nav.to) ? 'page' : undefined"
                    draggable="false"
                >
                    {{ nav.label }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { NavItem } from './items';

const props = defineProps<{
    NavItems: NavItem[];
    currentPath: string;
}>();

const section: string = props.currentPath.split('/')[1] ?? '';

function isActive(to: string): boolean {
    const target: string = to.split('/')[1] ?? '';
    return target === section;
}
</script>

<style scoped>
nav {
    width: 100%;
    border-top: 1px solid var(--Accent, #1e90ff);
    border-bottom: 1px solid var(--Accent, #1e90ff);
}

ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
    margin: 0;
    padding: 0.5rem 1.625rem;
    list-style: none;
    text-align: center;
}

li {
    margin: 0.5rem 0;
}

a {
    display: block;
    padding: 0.25rem 0;
    color: inherit;
    text-decoration: none;
    background: var(--MenuCard, #1a1a1a);
    border: 1px solid var(--Accent, #1e90ff);
    border-radius: 0.75rem;
}

a:hover,
a:focus-visible {
    border-color: white;
    background: var(--Accent, #1e90ff);
}

a[aria-current='page'] {
    border-color: white;
}
</style>