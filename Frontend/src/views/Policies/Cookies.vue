<template>
  <h1 class="text-4xl underline py-2">{{ policy.title }}</h1>
  <p class="pb-4">Last Updated: {{ policy.lastUpdated }}</p>
  <p class="pb-4">{{ policy.intro }}</p>

  <h2 class="text-2xl underline">{{ policy.whatAreCookies.heading }}</h2>
  <p class="pb-2">{{ policy.whatAreCookies.body }}</p>
  <ul v-if="policy.whatAreCookies.bullets.length" class="list-disc pl-6 pb-2">
    <li v-for="bullet in policy.whatAreCookies.bullets" :key="bullet">
      {{ bullet }}
    </li>
  </ul>

  <ul class="list-decimal">
    <li v-for="section in policy.sections" :key="section.number">
      <h2 class="text-2xl underline">{{ section.heading }}</h2>
      <p v-if="section.body" class="pb-2">{{ section.body }}</p>

      <ul v-if="section.bullets" class="list-disc pl-6 pb-2">
        <li v-for="bp in section.bullets" :key="bp">
          {{ bp }}
        </li>
      </ul>

      <div v-if="section.subsections" class="pb-2">
        <div v-for="sub in section.subsections" :key="sub.heading" class="pb-2">
          <h3 class="text-xl underline">
            <span v-if="sub.letter">{{ sub.letter }}. </span>{{ sub.heading }}
          </h3>
          <p v-if="sub.intro" class="pb-2">{{ sub.intro }}</p>
          <ul v-if="sub.bullets" class="list-disc pl-6 pb-2">
            <li v-for="bp in sub.bullets" :key="bp">
              {{ bp }}
            </li>
          </ul>
          <p v-if="sub.note" class="pb-2">{{ sub.note }}</p>
        </div>
      </div>

      <p v-if="section.subBody" class="pb-2">{{ section.subBody }}</p>
    </li>
  </ul>

  <p v-if="policy.closing" class="py-4">{{ policy.closing }}</p>
</template>

<script setup lang="ts">
interface CookieSubsection {
  letter: string
  heading: string
  intro?: string
  bullets?: string[]
  note?: string
}

interface CookieSection {
  number: string
  heading: string
  body?: string
  bullets?: string[]
  subsections?: CookieSubsection[]
  subBody?: string
}

interface CookiePolicyData {
  title: string
  lastUpdated: string
  intro: string
  whatAreCookies: {
    heading: string
    body: string
    bullets: string[]
  }
  sections: CookieSection[]
  closing: string
}

const policy: CookiePolicyData = {
  title: 'Cookie Policy',
  lastUpdated: '8/20/2026',
  intro:
    'Citadel Solutions LLC ("we", "our", or "us") is committed to protecting your privacy. This Cookie Policy explains how we use cookies and similar technologies on our website (the "Site"). We are an Illinois-registered LLC and this policy is scoped to our current operations. As we add new features, this page will be updated to reflect them.',

  whatAreCookies: {
    heading: 'What Are Cookies?',
    body: 'Cookies are small text files placed on your device when you visit our Site. Currently, our Site uses cookies only where strictly necessary for security and stability — we do not use cookies for analytics, marketing, advertising, or personalization at this time.',
    bullets: [],
  },

  sections: [
    {
      number: '1',
      heading: 'Strictly Necessary Cookies',
      body: 'These cookies are required for the Site to function and cannot be disabled. We use Cloudflare for DDoS protection and web application firewall (WAF) services, which sets its own security cookies (e.g., to distinguish legitimate visitors from bots and mitigate malicious traffic).',
      bullets: [
        'Security & Bot Mitigation: Cloudflare cookies used to detect and block malicious or automated traffic.',
        'Site Stability: Cloudflare cookies used for load management and DDoS protection.',
      ],
      subBody:
        'You cannot opt out of these cookies, as they are required for the basic security and operation of the Site.',
    },
    {
      number: '2',
      heading: 'Analytics',
      body: 'We use Cloudflare Web Analytics to understand aggregate traffic to our Site (e.g., page views, referrers). Cloudflare Web Analytics does not use cookies, does not track individual users across sites, and does not fingerprint devices — no consent is required for this tool because no personal tracking data is collected.',
    },
    {
      number: '3',
      heading: 'Marketing and Advertising',
      body: 'We do not run advertising or retargeting campaigns, and we do not use marketing or advertising cookies of any kind.',
    },
    {
      number: '4',
      heading: 'Social Media Links',
      body: "Our Site includes links to our social media profiles (LinkedIn, Instagram, TikTok, and YouTube). These are plain outbound links — clicking them takes you to the respective platform, but we do not embed social widgets, share buttons, or tracking scripts from these platforms on our Site, and no cookies are set by us as a result of these links. Once you leave our Site, that platform's own cookie and privacy policy applies.",
    },
    {
      number: '5',
      heading: 'Future Changes to Our Cookie Use',
      body: 'As Citadel Solutions grows, we may introduce additional functionality (such as a client portal, personalization features, or expanded analytics) that requires new categories of cookies. If and when that happens, we will update this policy and, where legally required, implement a cookie consent banner allowing you to accept, reject, or customize non-essential cookies before they are set.',
    },
    {
      number: '6',
      heading: 'Managing Cookies in Your Browser',
      body: "Even though our current cookie use is limited to strictly necessary cookies, you can still view, delete, or block cookies through your browser settings at any time. Note that blocking Cloudflare's security cookies may affect the Site's ability to protect against malicious traffic and could impact your experience.",
    },
    {
      number: '7',
      heading: 'Changes to This Policy',
      body: 'We may update this Cookie Policy from time to time to reflect changes in our technology, legal requirements, or business practices. The updated policy will be posted on this page with a revised "Last Updated" date.',
    },
    {
      number: '8',
      heading: 'Contact Information',
      body: 'For questions about this Cookie Policy, please contact us at legal@citadelsolutions.tech.',
    },
  ],

  closing: '',
}
</script>