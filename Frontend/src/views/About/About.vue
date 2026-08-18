<template>
    <div class="overflow-x-hidden">
        <Deck :members="bios"></Deck>
    </div>
</template>

<script setup lang="ts">
    import Deck from "@/components/Cards/BioCards/Deck.vue"
    import type { Bio } from "@/components/Cards/BioCards/BioInfo"
    
    // something like router/team.ts or inside your route component
    const modules = import.meta.glob('@/views/Team/*.vue')

    const TeamColors: Map<string, string> = new Map([
        ["Dev", "#1e90ff"],
        ["CyberSec", "#FF1E1E"],
        ["ComputerServices", "#A227F3"]
    ])
        

    const bios: Bio[] = [
        {
            Name: "Tanis Georgi",
            Team: "CS",
            Role: "CEO",
            Color: "#FFFB00",
            To: "/about-us/tgeorgi",
            Rare: true,
        },
        {
            Name: "Dylan Clark",
            Team: "DEV",
            Role: "President",
            Color: "#1E90FF",
            To: "/about-us/dclark",
            Rare: true,
        },
        {
            Name: "Nick Rutgier",
            Team: "DEV",
            Role: "Backend Lead",
            Color: "#1E90FF",
            To: "/about-us/nrutigier",
            Rare: false,
        },
        {
            Name: "Ben Palotai",
            Team: "DEV",
            Role: "Web Designer",
            Color: "#1E90FF",
            To: "/about-us/bpalotai",
            Rare: false,
        },
        {
            Name: "Lune Guevara",
            Team: "DEV",
            Role: "Web Designer",
            Color: "#1E90FF",
            To: "/about-us/lguevara",
            Rare: false,
        },
        {
            Name: "Rich Kim",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1E90FF",
            To: "/about-us/rkim",
            Rare: false,
        },
        {
            Name: "Tommy O'Donnell",
            Team: "SEC",
            Role: "Cybersecurity team",
            Color: "#FF1E1E",
            To: "/about-us/todonnell",
            Rare: false,
        },
        {
            Name: "Xander TBD",
            Team: "IT",
            Role: "Technician",
            Color: "#A227F3",
            To: "/about-us/xXXXXXXX",
            Rare: false,
        },
        {
            Name: "Ian S",
            Team: "IT",
            Role: "Technician",
            Color: "#A227F3",
            To: "/about-us/isXXXX",
            Rare: false,
        },
        {
            Name: "Matias TBD",
            Team: "TBD",
            Role: "",
            Color: "",
            To: "",
            Rare: false,
        },
    ]
</script>