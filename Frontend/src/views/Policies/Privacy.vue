<template>
    <h1 class="text-4xl underline py-2">Privacy Policy</h1>
    <p class="py-2">Last updated: 7/30/2026</p>
    <p>Citadel Solutions LLC ("we," "us," or "our") provides website development, cybersecurity services, and PC repair services. This Privacy Policy explains how we collect, use, and protect information when you visit citadelsolutions.tech (the "Site") or use our services.</p>
    <ul>
        <li v-for="item in items" class="py-2">
            <h2 class="text-2xl underline">{{ item.id }}. {{ item.section }}</h2>
            <p>{{ item.body }}</p>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const items = [
        {
            id: 1,
            section: "INFORMATION WE COLLECT",
            body: "We collect contact information you provide directly to us, such as your name, email address, phone number, and any other details you submit through contact forms, service inquiries, or when requesting a quote.",
        },
        {
            id: 2,
            section: "HOW WE USE YOUR INFORMATION",
            body: "We use the information you provide to: Respond to inquiries and provide quotes. Deliver website development, cybersecurity, and PC repair services. Communicate with you about your service requests. Maintain records for invoicing and business purposes",
        },
        {
            id: 3,
            section: "HOW WE SHARE YOUR INFORMATION",
            body: "We do not sell, rent, or share your personal information with third parties for marketing purposes. We do not share your information with advertising networks or data brokers. We may disclose information if required by law, subpoena, or legal process, or to protect our rights, property, or safety.",
        },
        {
            id: 4,
            section: "PAYMENT INFORMATION",
            body: "We do not collect or process payment information through this Site. Payment for services is arranged and invoiced separately, outside of the website.",
        },
        {
            id: 5,
            section: "DATA RETENTION",
            body: "We retain the contact information you provide for as long as necessary to fulfill the purposes described in this policy, or as required by law.",
        },
        {
            id: 6,
            section: "DATA SECURITY",
            body: "We take reasonable measures to protect the personal information you provide from unauthorized access, disclosure, or misuse. However, no method of transmission or storage is 100% secure.",
        },
        {
            id: 7,
            section: "CHILDREN'S PRIVACY",
            body: "Our services are not directed to individuals under 18, and we do not knowingly collect personal information from children.",
        },
        {
            id: 8,
            section: "CHANGES TO THIS POLICY",
            body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated \"Last updated\" date.",
        },
        {
            id: 9,
            section: "CONTACT US",
            body: "If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at: legal@citadelsolutions.tech OR 630-360-2350",
        }
    ]
</script>