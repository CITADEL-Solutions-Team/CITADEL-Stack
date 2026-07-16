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

    // Successfully sent the request
    const sentSuccessfully: Ref<boolean, boolean> = ref(false)

    // Counts attempts to send subsequent requests after a success
    const alreadySent: Ref<number, number> = ref(0)

    // Did the last request get rejected?
    const rejected: Ref<boolean, boolean> = ref(false)

    // Was the request rejected and not a 429 or 400?
    // Will be used for handling possible bad apples
    const questionable: Ref<boolean, boolean> = ref(false)

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
        const response = await instance.post("/api/test/send-email", info.value)
        
        switch (response.status) {
            case axios.HttpStatusCode.Ok: // 200
                sentSuccessfully.value = true
                break              

            case axios.HttpStatusCode.BadRequest: // 400
                rejected.value = true // 
                break               

            case axios.HttpStatusCode.TooManyRequests: // 429
                alreadySent.value += 1
                break               

            default:
                rejected.value = true
                questionable.value = true
                break // We ain't handling all that. :skull: :sob: LMFAO!!!!!!!!
        }
    }
</script>