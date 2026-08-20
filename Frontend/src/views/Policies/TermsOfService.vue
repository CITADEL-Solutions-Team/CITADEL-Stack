<template>
    <h1 class="text-4xl underline py-2"></h1>
    <p class="pb-4"></p>
    <p></p>
    <ul class="list-decimal">
        <li v-for="section in sections">
            <h2 class="text-2xl underline">{{ section.name }}</h2>
            <p class="pb-2">{{ section.body }}</p>
            <ul class="list-disc pb-2 pl-10">
                <li v-for="bp in section.bps">
                    {{ bp }}
                </li>
            </ul>
            <p class="pb-2"> {{ section.subBody }} </p>
        </li>
    </ul>
    <p class="py-4"></p>
</template>

<script setup lang="ts">
    const sections = [
        {
            name: "Acceptance and Scope",
            body: "By accessing this Site, you agree to these Terms. This agreement governs your use of our public website, including browsing, downloading resources, and submitting contact forms. It does not govern the delivery of cybersecurity services (e.g., penetration testing, audits, managed security), which are exclusively governed by separate Service Agreements or Statements of Work (SOW) executed between us.",
            bps: [

            ],
            subBody: "",
        },
        {
            name: "No Client Relationship via Website",
            body: "Accessing this Site, downloading whitepapers, or submitting inquiries does not create a client relationship, attorney-client privilege, or fiduciary duty.",
            bps: [
                "Professional Services: We provide cybersecurity services only upon the execution of a written contract.",
                "Informational Content: Articles, blogs, and tools on this Site are for general educational purposes and do not constitute specific security advice or a guarantee of protection against cyber threats."
            ],
            subBody: "",
        },
        {
            name: "Acceptable Use and Prohibited Activities",
            body: "As a cybersecurity firm, we enforce strict ethical standards for Site usage. You agree NOT to:",
            bps: [
                "Use the Site to scan, probe, or test our infrastructure for vulnerabilities without explicit written authorization (Hostile Reconnaissance).",
                "Deploy bots, scrapers, or crawlers that interfere with Site performance or attempt to harvest data (Malicious Automation).",
                "Misrepresent your identity or affiliation to gain access to restricted client portals or resources (Impersonation).",
                "Use the Site to facilitate any unlawful activity, including the distribution of malware or the planning of cyberattacks (Illegal Use)."
            ],
            subBody: "We reserve the right to block IP addresses and report malicious activity to relevant authorities.",
        },
        {
            name: "Intellectual Property and Confidentiality",
            body: "",
            bps: [
                "Ownership: All content, including reports, logos, code snippets, and methodologies, excluding displayed on the Site, is the exclusive property of Citadel Solutions LLC.",
                "Limited License: You are granted a non-exclusive, revocable license to view and download content for internal, non-commercial evaluation only.",
                "Confidentiality: Do not submit sensitive, proprietary, or classified information via public contact forms. We are not liable for the interception of data submitted through unencrypted or public channels."
            ],
            subBody: "",
        },
        {
            name: "Disclaimers and Limitation of Liability",
            body: "TO THE FULLEST EXTENT PERMITTED BY LAW:",
            bps: [
                "\"As Is\" Basis: The Site is provided \"as is\" without warranties of accuracy, security, or fitness for a particular purpose.",
                "No Security Guarantee: Presence on this Site or use of our free tools does not guarantee immunity from cyberattacks.",
                "Liability Cap: We shall not be liable for any indirect, incidental, or consequential damages (including data loss or business interruption) arising from your use of the Site. Our total liability shall not exceed $100.00."
            ],
            subBody: "",
        },
        {
            name: "Third-Party Links and Tools",
            body: "The Site may contain links to third-party resources (e.g., vulnerability databases, regulatory bodies). We do not control these sites and assume no responsibility for their content, security practices, or availability. Accessing them is at your own risk.",
            bps: [

            ],
            subBody: "",
        },
        {
            name: "Governing Law and Dispute Resolution",
            body: "These Terms are governed by the laws of [Your State/Country]. Any disputes arising from the use of this Site shall be resolved exclusively in the courts of [Your City, State/Country], unless prohibited by local law.",
            bps: [

            ],
            subBody: "",
        },
        {
            name: "MODIFICATIONS",
            body: "We reserve the right to modify these Terms at any time. Continued use of our services after such modifications constitutes acceptance of the new Terms.",
            bps: [

            ],
            subBody: "",
        },
        {
            name: "CONTACT INFORMATION",
            body: "For inquiries regarding these Terms, please contact us at legal@citadelsolutions.tech.",
            bps: [

            ],
            subBody: "",
        },
    ]
</script>