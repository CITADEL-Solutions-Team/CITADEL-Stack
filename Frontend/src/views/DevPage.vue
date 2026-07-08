<template>
    <div class="flex flex-col objects-center">
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
            To: "/about/tgeorgi"
        },
        {
            Name: "Dylan Clark",
            Team: "DEV",
            Role: "Vice President",
            Color: "#1e90ff",
            To: "/about/dclark"
        },
        {
            Name: "Nick Rutgier",
            Team: "DEV",
            Role: "Backend Lead",
            Color: "#1e90ff",
            To: "/about/nrutigier"
        },
        {
            Name: "Tommy O'Donnell",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/todonnell"
        },
        {
            Name: "Ben Palotai",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/bpalotai"
        },
        {
            Name: "Lune Guevara",
            Team: "DEV",
            Role: "Frontend Dev",
            Color: "#1e90ff",
            To: "/about/lguevara"
        },
    ]
</script>