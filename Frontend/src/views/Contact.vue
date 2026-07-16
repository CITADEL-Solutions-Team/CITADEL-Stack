<template>
    <input v-model="info.name" />
    <input v-model="info.business" />
    <input v-model="info.phone" />
    <input v-model="info.service" />
    <input v-model="info.message" />

    <button @click="SendForm(info)">Send</button>
</template>

<script setup lang="ts">
    import { instance } from '@/api/axios'
    import axios from 'axios';
    import { ref, type Ref } from 'vue';

    const sentSuccessfully: Ref<boolean, boolean> = ref(false)
    const alreadySent: Ref<number, number> = ref(0)
    const rejected: Ref<boolean, boolean> = ref(false)

    // Will be sent to the backend for processing.
    type ContactInfo = {
        name: string
        business: string
        phone: string
        service: string
        message: string
    }

    const info:Ref<ContactInfo, ContactInfo> = ref({
        name: "",
        business: "",
        phone: "",
        service: "",
        message: "",
    })

    async function SendForm(contactInfo: ContactInfo) {
        console.log(JSON.stringify(contactInfo, null, 2))
        const response = await instance.post("/api/send-email", info)

        switch (response.status) {
            
            // 200
            case axios.HttpStatusCode.Ok:
                sentSuccessfully.value = true

            // 400
            case axios.HttpStatusCode.BadRequest:
                rejected.value = true

            // 429
            case axios.HttpStatusCode.TooManyRequests:
                alreadySent.value += 1
              
            // Anything else
            default:
                console.log(JSON.stringify(response),null,2)
        }
    }
</script>