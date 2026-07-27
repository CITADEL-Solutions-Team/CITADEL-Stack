<template>
    <div class="overflow-x-hidden">
        <Deck
        :members="bios"></Deck>
    </div>
</template>

<script setup lang="ts">
    import Deck from "@/components/Cards/BioCards/Deck.vue"
    import type { Bio } from "@/components/Cards/BioCards/BioInfo"

    const TeamColors: Map<string, string> = new Map([
        ["Dev", "#1e90ff"],
        ["CyberSec", "#FF1E1E"]
    ])
        

    const bios: Bio[] = [
        {
            Name: "Tanis Georgi",
            Team: "CS",
            Role: "President",
            Color: "#FF1E1E",
            To: "/about/tgeorgi",
            Rare: true,
        },
        {
            Name: "Dylan Clark",
            Team: "DEV",
            Role: "Vice President",
            Color: "#1e90ff",
            To: "/about/dclark",
            Rare: true,
        },
        {
            Name: "Nick Rutgier",
            Team: "DEV",
            Role: "Backend Lead",
            Color: "#1e90ff",
            To: "/about/nrutigier",
            Rare: false,
        },
        {
            Name: "Tommy O'Donnell",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/todonnell",
            Rare: false,
        },
        {
            Name: "Ben Palotai",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/bpalotai",
            Rare: false,
        },
        {
            Name: "Lune Guevara",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/lguevara",
            Rare: false,
        }
    ]
</script>