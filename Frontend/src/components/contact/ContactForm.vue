<template>
    <form
        class="flex flex-col gap-6 p-8 text-left border border-(--Accent) rounded-2xl
               bg-[radial-gradient(circle_at_center,#1062B2_0%,var(--MenuCard)_100%)]"
        @submit.prevent="submit"
    >
        <p class="text-sm">Fields marked with * are required.</p>

        <div :class="fieldClass">
            <label for="contact-name" class="font-semibold">Full name *</label>
            <input id="contact-name" name="name" autocomplete="name" required v-model="info.name" :class="inputClass" />
        </div>

        <div :class="fieldClass">
            <label for="contact-business" class="font-semibold">Business name (if applicable)</label>
            <input id="contact-business" name="business" autocomplete="organization" v-model="info.business" :class="inputClass" />
        </div>

        <div :class="fieldClass">
            <label for="contact-phone" class="font-semibold">Phone number</label>
            <input
                id="contact-phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                placeholder="(630) 555-0123"
                v-model="info.phone"
                :class="inputClass"
            />
        </div>

        <div :class="fieldClass">
            <label for="contact-email" class="font-semibold">Email address *</label>
            <input
                id="contact-email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="info.email"
                :class="inputClass"
            />
        </div>

        <div :class="fieldClass">
            <label for="contact-service" class="font-semibold">Service category *</label>
            <select id="contact-service" name="service" required v-model="info.service" :class="inputClass">
                <option disabled value="">Select a service</option>
                <option v-for="option in serviceOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </div>

        <div :class="fieldClass">
            <label for="contact-message" class="font-semibold">Message *</label>
            <textarea
                id="contact-message"
                name="message"
                required
                placeholder="How can we help?"
                v-model="info.message"
                :class="[inputClass, 'min-h-32 resize-y']"
            ></textarea>
        </div>

        <button
            type="submit"
            :disabled="!ready || sending"
            class="w-fit self-center rounded-2xl bg-(--MenuCard) text-xl px-6 py-3 text-white font-bold
                   border border-(--Accent) shadow-xl shadow-(color:--MenuCard) cursor-pointer
                   transition duration-300 ease-out
                   hover:-translate-y-1 hover:translate-x-1
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
        >
            {{ sending ? 'Sending…' : 'Submit' }}
        </button>

        <p role="status" :class="['text-center min-h-6', status ? messages[status].class : '']">
            {{ status ? messages[status].text : '' }}
        </p>

        <p class="text-center italic">Email responses are sent within 24 business hours.</p>
    </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import { sendContact, serviceOptions } from './form';
import type { ContactInfo, SubmitStatus } from './form';

const fieldClass: string = 'flex flex-col gap-1';
const inputClass: string =
    'bg-white text-black rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const messages: Record<SubmitStatus, { text: string; class: string }> = {
    sent: { text: "Message sent. We'll get back to you within 24 business hours.", class: 'text-green-400' },
    'rate-limited': { text: "You've already submitted recently. Please wait before sending again.", class: 'text-yellow-400' },
    invalid: { text: 'Please fill out all required fields correctly.', class: 'text-red-400' },
    rejected: { text: "We couldn't process that request. Please check your info and try again.", class: 'text-red-400' },
    'server-error': { text: 'Something went wrong on our end. Try again shortly, or call us directly.', class: 'text-red-400' },
};

function emptyInfo(): ContactInfo {
    return { name: '', business: '', phone: '', email: '', service: '', message: '' };
}

const info: Ref<ContactInfo> = ref(emptyInfo());
const status: Ref<SubmitStatus | null> = ref(null);
const sending: Ref<boolean> = ref(false);

// The button stays disabled until the island hydrates. Otherwise an early
// submit would fall back to a native GET and put the message in the URL.
const ready: Ref<boolean> = ref(false);
onMounted(() => {
    ready.value = true;
});

async function submit(): Promise<void> {
    sending.value = true;
    status.value = null;

    const result: SubmitStatus = await sendContact({ ...info.value });
    status.value = result;
    if (result === 'sent') info.value = emptyInfo();

    sending.value = false;
}
</script>