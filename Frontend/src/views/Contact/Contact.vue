<template>
    <div class="flex flex-col gap-8 py-8 text-center md:flex-row md:items-start md:gap-12">
        <div class="order-2 flex flex-col justify-center md:order-1 md:flex-1 md:self-stretch gap-8">
            <h1 class="text-5xl">Need something more immediate? Call us at <a class="underline" href="tel:+16303602350">630-360-2350</a></h1>
            <p class="text-2xl">The best time to find a gap in your security is <span class="text-red-500 italic text-3xl">before someone else does.</span></p>
        </div>
        <div class="order-1 flex flex-col md:order-2 md:flex-1 gap-8 bg-[radial-gradient(circle_at_center,#1062B2_0%,var(--MenuCard)_100%)] border border-(--Accent) rounded-2xl p-8">
            <label class="sr-only" for="name">Full name</label>
            <input id="name" class="bg-white text-black rounded-lg p-2" v-model="info.name" placeholder="Full name"/>

            <label class="sr-only" for="business">Business name (if applicable)</label>
            <input id="business" class="bg-white text-black rounded-lg p-2" v-model="info.business" placeholder="Business name (if applicable)" />

            <label class="sr-only" for="phone">Phone number</label>
            <input id="phone" class="bg-white text-black rounded-lg p-2" type="tel" v-model="info.phone" placeholder="(###)-###-####"/>

            <label class="sr-only" for="email">Email address</label>
            <input id="email" class="bg-white text-black rounded-lg p-2" type="email" v-model="info.email" placeholder="john@example.com"/>

            <label class="sr-only" for="service">Desired service category</label>
            <select id="service" class="bg-white text-black rounded-lg p-2" v-model="info.service">
                <option disabled value="">Select a Service</option>
                <option v-for="svc in serviceList" :value="svc.Value"> {{ svc.Label }} </option>
            </select>
            
            <label class="sr-only" for="message">Message</label>
            <textarea id="message" class="min-h-32 w-full resize-y bg-white text-black rounded-lg p-2" v-model="info.message" placeholder="How can we help?"></textarea>

            <button
                class="w-fit self-center rounded-lg bg-(--MenuCard) text-xl p-3 text-white font-bold shadow-xl shadow-(color:--MenuCard) border border-(--Accent) rounded-2xl cursor-pointer
                        transition-transform transition-shadow duration-300 ease-out
                        hover:-translate-y-1 hover:translate-x-1 hover:shadow-(color:--MenuCard)"
                @click="SendForm(info)"
            >
                Submit
            </button>

            <div v-if="sentSuccessfully" class="text-green-400">
                Message sent. We'll get back to you within 24 business hours.
            </div>
            <div v-else-if="alreadySent > 0" class="text-yellow-400">
                You've already submitted this recently. Please wait before sending again.
            </div>
            <div v-else-if="serverError" class="text-red-400">
                Something went wrong on our end. Try again shortly, or call us directly.
            </div>
            <div v-else-if="questionable" class="text-red-400">
                We couldn't process that request. Please check your info and try again.
            </div>
            <div v-else-if="rejected" class="text-red-400">
                Please fill out all required fields correctly.
            </div>

            <div class="italic">Email responses are sent within 24 business hours.</div>
        </div>
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

    // Did the server error out (5xx)?
    const serverError: Ref<boolean, boolean> = ref(false)

    // Hold list of services with backend values and app-layer labels.
    const serviceList:Service[] = [
        {
            Label: "CyberSecurity",
            Value: "smb_sec"
        },
        {
            Label: "Website Developement",
            Value: "web_dev"
        },
        {
            Label: "Computer Services",
            Value: "pc_it"
        }
    ]
    
    // Used to store info about the client before sending to the backend.
    const info:Ref<ContactInfo,ContactInfo> = ref({name: "",business: "",phone: "",email: "",service: "",message: "",})

    async function SendForm(contactInfo: ContactInfo) {
        // reset state before each attempt so stale messages don't linger
        sentSuccessfully.value = false
        rejected.value = false
        questionable.value = false
        serverError.value = false

        try {
            const response = await instance.post("/api/send-email", contactInfo)
            sentSuccessfully.value = true
        } catch (err) {
            if (!axios.isAxiosError(err) || !err.response) {
                // network failure, timeout, CORS, etc, no response at all
                serverError.value = true
                return
            }

            const status = err.response.status

            if (status === axios.HttpStatusCode.TooManyRequests) {
                alreadySent.value += 1
            } else if (status === axios.HttpStatusCode.BadRequest) {
                rejected.value = true
            } else if (status >= 500 && status < 600) {
                serverError.value = true
            } else {
                rejected.value = true
                questionable.value = true
            }
        }
    }
</script>