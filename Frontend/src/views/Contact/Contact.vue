<template>
    <div class="flex flex-col text-center">
        <input              v-model="info.name"     placeholder="Full name"/>
        <input              v-model="info.business" placeholder="Business name (if applicable)" />
        <input type="tel"   v-model="info.phone"    placeholder="(###)-###-####"/>
        <input type="email" v-model="info.email"    placeholder="john@example.com"/>
        <select             v-model="info.service"  placeholder="Select Desired Service Category">
            <option disabled value="">Select a Service</option>
            <option v-for="svc in serviceList" value="svc.Value"> {{ svc.Label }} </option>
        </select>
        
        <input v-model="info.message" placeholder=""/>

        <button @click="SendForm(info)">Send</button>
    </div>
</template>

<script setup lang="ts">
    import { instance } from '@/api/axios'
    import axios from 'axios';
    import { ref, type Ref } from 'vue';

    import type { ContactInfo } from './contactInfo';
    import type { Service } from './services';

    // Successfully sent the request
    const sentSuccessfully: Ref<boolean, boolean> = ref(false)
    // Counts attempts to send subsequent requests after a success
    const alreadySent: Ref<number, number> = ref(0)
    // Did the last request get rejected?
    const rejected: Ref<boolean, boolean> = ref(false)
    // Was the request rejected and not a 429 or 400?
    // Will be used for handling possible bad apples
    const questionable: Ref<boolean, boolean> = ref(false)

    // Hold list of services with backend values and app-layer labels.
    const serviceList:Service[] = [
        {
            Label: "SMB CyberSecurity",
            Value: "smb_sec"
        },
        {
            Label: "Home CyberSecurity",
            Value: "home_sec"
        },
        {
            Label: "Website Developement and management",
            Value: "web_dev"
        },
        {
            Label: "PC Repair and IT",
            Value: "pc_it"
        }
    ]
    
    // Used to store info about the client before sending to the backend.
    const info:Ref<ContactInfo,ContactInfo> = ref({name: "",business: "",phone: "",email: "",service: "",message: "",})

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