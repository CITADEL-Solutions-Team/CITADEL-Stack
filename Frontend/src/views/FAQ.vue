<template>
    <WhereToStart
    :button="button"
    :tagLevel="2"
    >
        <template v-slot:Header>
            Frequently Asked Questions
        </template>
        <template v-slot:Body>
            You might have some questions. Hopefully we have answered them!
            If you don't see an answer to your question, we'd be happy to help you out over email or a call!
        </template>
    </WhereToStart>

    <section>
        <h2 class="text-[32px] underline">Frequently Asked Questions</h2>
        <ul class="">
            <li v-for="faq in generalFaqs">
                <FAQCard
                :tag-level="3"
                :question="faq.question"
                :answer="faq.answer"
                >

                </FAQCard>
            </li>
        </ul>
    </section>

    <section>
        <h2 class="text-[32px] underline">Cybersecurity</h2>
        <ul class="">
            <li v-for="faq in cybersecFaqs">
                <FAQCard
                :tag-level="3"
                :question="faq.question"
                :answer="faq.answer"
                >

                </FAQCard>
            </li>
        </ul>
    </section>

    <section>
        <h2 class="text-[32px] underline">Website Development</h2>
        <ul class="">
            <li v-for="faq in webDevFaqs">
                <FAQCard
                :tag-level="3"
                :question="faq.question"
                :answer="faq.answer"
                >

                </FAQCard>
            </li>
        </ul>
    </section>

    <section>
        <h2 class="text-[32px] underline">Computer Services</h2>
        <ul class="">
            <li v-for="faq in computerServicesFaqs">
                <FAQCard
                :tag-level="3"
                :question="faq.question"
                :answer="faq.answer"
                />
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
    import FAQCard from '@/components/Cards/FAQCard.vue';
    import WhereToStart from '@/components/Sections/WhereToStart.vue';

    const button: { label: string, to: string } = {
        label: "Contact Us",
        to: "/contact-us"
    }

    interface FaqInfo {
        question: string
        answer: string
    }

    const generalFaqs: FaqInfo[] = [
        {
            question: "What is Citadel Solutions?",
            answer: "Citadel Solutions helps individuals, homeowners, and small businesses protect their privacy, understand their technology, and take control of the devices, data, and digital services they rely on every day. Through cybersecurity, computer services, and web development, we provide practical solutions without unnecessary complexity. Everyone deserves technology they can trust and understand."
        },
        {
            question: "How can I get started with Citadel Solutions?",
            answer: "The best way is by connecting with us! Please visit our Services page or use our [contact form](ContactUs) on the website. Alternatively, you can reach out directly via Phone: 630-360-2350 or info@citadelsolutions.tech",
        },
        {
            question: "Is my first consultation free?",
            answer: "Yes! we offer a completely FREE initial assessment and consultation for anyone interested in our services.",
        },
        {
            question: "Does Citadel offer starter bundles?",
            answer: "Yes, we do! We provide several service packages designed to specialize and tailor solutions efficiently to different needs.",
        },
        {
            question: "Are your tech services billed monthly or annually only?",
            answer: "Our pricing is flexible. Some clients prefer pay-as-you-go options (for example, PC repair). For ongoing cybersecurity or website management, we structure these as monthly recurring payments for convenience and budgeting. However, we also offer annual service contracts at a significant discount - it's often more economical if you need consistent, proactive support.",
        },
        {
            question: "Do you have any free resources?",
            answer: "Yes! We're committed to sharing knowledge. Follow our tech tips and discussions on [Instagram](https://www.instagram.com/citadel.solutions.llc/) or [Linkedin](https://www.linkedin.com/in/citadel-solutions/). Our profile provides helpful content related to protecting yourself and staying productive.",
        },
        {
            question: "Do you offer remote IT support outside of scheduled services/contracts?",
            answer: "Yes! We provide proactive monitoring for clients with contracts, but even without that, our team offers responsive troubleshooting and technical assistance via remote access on a pay-per-issue basis or as part of ad-hoc service agreements.",
        },
        {
            question: "Do you provide on-site IT consultants or just remote?",
            answer: "We offer a combination! Depending on the service level agreement (SLA) we propose after an assessment, clients can expect occasional office visits from our tech experts alongside ongoing remote monitoring and support via our platform.",
        },
        {
            question: "Are you available for clients outside Illinois?",
            answer: "Yes! While we have a physical location in Illinois, our PC repair service primarily covers clients within commuting distance (e.g., local area). Our website hosting, cybersecurity, and remote support services are available nationwide. Please specify your location for exact details.",
        },
    ]

    const cybersecFaqs: FaqInfo[] = [
        {
            question: "Can you help me choose the right cybersecurity solution?",
            answer: "Absolutely! That's what our assessment is for. We'll analyze your business size, industry, potential threats (like home networks if relevant), and budget to recommend the most suitable tier or custom package of our services.",
        },
        {
            question: "How do you ensure data privacy and security?",
            answer: "Data security is paramount. We follow industry best practices including encryption in transit and at rest, secure network protocols, strong access controls and authentication, regular security assessments, secure data handling practices, and ongoing monitoring. Our assessment process helps identify your specific risks so we can implement the most effective measures.",
        },
        {
            question: "What happens if I experience a cyber attack?",
            answer: "With our ongoing monitoring and vulnerability management services (if contracted), we aim to detect and respond quickly. For clients with incident response included or paid add-on, we provide immediate mitigation, investigation, and recovery support following industry standards.",
        },
        {
            question: "Who is targeting my privacy?",
            answer: "Cyber threats can come from various sources, including hackers, cybercriminals, competitors, and even insiders. The motives can range from financial gain to data theft or disruption of services. Our cybersecurity services are designed to protect against these threats by implementing robust security measures and monitoring for suspicious activity.",
        },
    ]
    const webDevFaqs: FaqInfo[] = [

        {
            question: "What is Website Development?",
            answer: "Website development is the process of creating and maintaining websites. It encompasses several aspects, including web design, web content development, client-side/server-side scripting, and network security configuration. Our team focuses on building functional, user-friendly, and visually appealing websites that meet your business goals.",
        },
        {
            question: "What kind of websites do you typically build?",
            answer: "We work across many industries and business goals; from simple informational sites to e-commerce platforms with complex functionality. We focus on user-friendly design, fast loading times, mobile responsiveness, search engine optimization (SEO), and security.",
        },
        {
            question: "Is regular website maintenance included?",
            answer: "Yes and no. We provide ongoing maintenance and support as part of our service packages, which can include updates, backups, security monitoring, and performance optimization. However, if you choose a one-time development project without a maintenance plan, we can provide guidance on how to manage your site or offer maintenance as an optional service.",
        },
        {
            question: "I already have a website, what else can Citadel do for me?",
            answer: "We have serveral services to enhance your existing website. This includes performance optimization, ADA/WCAG accessability support, content updates, SEO improvements, and adding new features or integrations. We can also provide analytics and reporting to help you understand your site's performance.",
        },
    ]
    const computerServicesFaqs: FaqInfo[] = [
        {
            question: "What is the typical turnaround time for PC repairs?",
            answer: "We aim for efficiency. Many common hardware or software issues can be resolved quickly during a visit (same day often possible). For parts needed replacements, we typically have them in stock and prioritize repair speed.",
        },
        {
            question: "Can Citadel help me recover data from an old computer?",
            answer: "Yes! We offer data recovery services for various storage devices. Our team can assess the situation and attempt to recover your important files, depending on the condition of the device.",
        },
        {
            question: "I have the parts to build a computer, can Citadel build the computer at a lower price?",
            answer: "Of course! Instead of purchasing a pre-built system, we can assemble your custom PC using the parts you provide. Our service includes assembly, testing, and ensuring everything runs smoothly.",
        },
        {
            question: "Does Citadel also clean and repair gaming consoles?",
            answer: "Yes! We provide cleaning and repair services for gaming consoles. Our technicians can address common issues, perform maintenance, and ensure your console is functioning optimally.",
        },
    ]
</script>