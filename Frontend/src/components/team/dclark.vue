<template>
  <!--
    Dylan's portfolio page.
    Layout: a header with the one-line pitch, then sections in a two-column grid
    (label on the left, content on the right) that stacks on small screens.
    Separation comes from hairlines and spacing rather than cards, to match the site's black-and-blue look.
  -->
  <article class="mx-auto max-w-5xl">
    <!-- Name and title come from members.ts via [slug].astro, so the About Us card and this page never drift apart -->
    <header class="border-b border-(--Accent) pb-12">
      <h1 class="text-5xl md:text-6xl">{{ bio.Name }}</h1>
      <p class="mt-2 text-lg text-(--SupText)">{{ bio.Role }}</p>
      <!-- The pitch: the one sentence a client should leave with -->
      <p class="mt-8 max-w-2xl font-exo text-2xl leading-snug">
        I build and secure the systems small businesses depend on, from the
        network all the way up to the website.
      </p>
    </header>

    <!-- About: who I am and why a client should trust me -->
    <section class="section">
      <h2 class="section-label">About</h2>
      <div class="prose-block space-y-4">
        <p>
          I got into cybersecurity because I wanted to understand how things
          break, and stayed because I like building things that don't. I've
          interned at Fermilab building a database-agnostic security and
          log-monitoring framework, earned my associate's in cybersecurity, and
          run CITADEL's infrastructure myself, from firewalls to deploy
          pipelines.
        </p>
        <p>
          As President &amp; CTO, I lead our development and infrastructure
          work. My approach is simple: security is part of the design, not a
          checklist at the end, and everything we build should make sense to
          the next person who touches it.
        </p>
        <p>
          Outside of work, you'll find me climbing, fishing, or breaking (and
          fixing) my homelab.
        </p>
      </div>
    </section>

    <!-- What I handle: outcomes in client terms, not tools. Hidden until `services` has entries. -->
    <section v-if="services.length > 0" class="section">
      <h2 class="section-label">What I Handle</h2>
      <!-- role="list" keeps list semantics in Safari/VoiceOver, which drops them when Tailwind removes list styling -->
      <ul role="list" class="prose-block space-y-6">
        <li v-for="service in services" :key="service.title">
          <h3 class="item-title">{{ service.title }}</h3>
          <p class="mt-1 text-(--SupText)">{{ service.description }}</p>
        </li>
      </ul>
    </section>

    <!-- Selected work: the section clients actually read. Hidden until `projects` has entries. -->
    <section v-if="projects.length > 0" class="section">
      <h2 class="section-label">Selected Work</h2>
      <ul role="list" class="space-y-12">
        <li v-for="project in projects" :key="project.title">
          <h3 class="item-title">{{ project.title }}</h3>
          <!-- A description list: each label/value pair is a real term and its definition, so screen readers announce them as pairs -->
          <dl class="facts">
            <div>
              <dt>The problem</dt>
              <dd>{{ project.problem }}</dd>
            </div>
            <div>
              <dt>What I did</dt>
              <dd>{{ project.solution }}</dd>
            </div>
            <div>
              <dt>The result</dt>
              <dd>{{ project.result }}</dd>
            </div>
          </dl>
          <!-- Optional proof link; label must make sense out of context (WCAG 2.4.4) -->
          <p v-if="project.link" class="facts-link">
            <a :href="project.link.href" class="text-link">{{ project.link.label }}</a>
          </p>
        </li>
      </ul>
    </section>

    <!-- Certifications: uncomment once there's something to list
    <section class="section">
      <h2 class="section-label">Certifications</h2>
      <ul role="list" class="prose-block space-y-2">
        <li></li>
      </ul>
    </section>
    -->

    <!-- Tools: one compact row for technical readers; clients skim past it -->
    <section class="section">
      <h2 class="section-label">Tools I Work With</h2>
      <!-- SkillCard must render an <li> as its root, or this list is invalid HTML -->
      <ul role="list" class="flex flex-wrap gap-2">
        <SkillCard v-for="tool in tools" :key="tool" :skillName="tool" />
      </ul>
    </section>

    <!-- Call to action: every portfolio page ends with a next step. No bottom hairline, since it's the last section. -->
    <section class="section border-b-0">
      <h2 class="section-label">Work With CITADEL</h2>
      <p class="font-exo text-2xl leading-snug">
        Need something built, secured, or fixed?
        <!-- Underlined so the link isn't marked by colour alone (WCAG 1.4.1) -->
        <a href="/contact-us" class="text-link whitespace-nowrap">Get in touch</a>.
      </p>
    </section>
  </article>
</template>

<style lang="css" scoped>
  /* One section: label column + content column on wider screens, stacked on phones.
     Hairline between sections instead of cards. */
  .section {
    display: grid;
    gap: 1rem;
    padding: 3rem 0;
    border-bottom: 1px solid rgb(255 255 255 / 0.1);
  }

  @media (min-width: 768px) {
    .section {
      grid-template-columns: 11rem 1fr;
      gap: 2.5rem;
    }
  }

  /* Section names: small, regular weight, brand blue. Overrides the large bold h2 from the global base layer. */
  .section-label {
    font-size: var(--text-lg);
    line-height: var(--text-lg--line-height);
    font-weight: 400;
    color: var(--Accent);
  }

  /* Body copy: capped near 65 characters a line so it stays comfortable to read on wide screens */
  .prose-block {
    max-width: 65ch;
    line-height: 1.7;
  }

  /* Service and project titles: Exo at a moderate size, lighter than the global h3 */
  .item-title {
    font-size: var(--text-xl);
    line-height: var(--text-xl--line-height);
    font-weight: 400;
  }

  /* Project facts: label gutter + text, like a spec sheet. Stacks on phones. */
  .facts {
    display: grid;
    gap: 0.75rem;
    max-width: 65ch;
    margin-top: 1rem;
    line-height: 1.6;
  }

  @media (min-width: 640px) {
    .facts > div {
      display: grid;
      grid-template-columns: 7.5rem 1fr;
      gap: 1rem;
    }
  }

  /* Fact labels: muted so the eye lands on the content */
  .facts dt {
    color: var(--SupText);
  }

  /* Proof link sits under the facts, lined up with their text column on wider screens */
  .facts-link {
    margin-top: 1rem;
  }

  @media (min-width: 640px) {
    .facts-link {
      padding-left: 8.5rem;
    }
  }

  /* Text links: blue underline that fills to blue text on hover; visible focus ring for keyboard users */
  .text-link {
    text-decoration: underline;
    text-decoration-color: var(--Accent);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    transition: color 150ms ease;
  }

  .text-link:hover {
    color: var(--Accent);
  }

  .text-link:focus-visible {
    outline: 2px solid var(--Accent);
    outline-offset: 3px;
    border-radius: 2px;
  }
</style>

<script setup lang="ts">
  // Renders one tool badge. Its root element must be an <li>.
  import SkillCard from '../cards/SkillCard.vue';
  // Member card data type, shared with the About Us deck.
  import type { Bio } from '../cards/bio/members.ts';

  /** Member card data (Name, Role, Color, ...) passed in by [slug].astro. */
  defineProps<{ bio: Bio }>();

  /** One thing I do for clients, phrased as an outcome rather than a tool. */
  interface Service {
    /** Short outcome, e.g. "Securing your network and devices". */
    title: string;
    /** One or two sentences, in plain language a business owner understands. */
    description: string;
  }

  /** A link backing up a project: a paper, a live site, or a repo. */
  interface ProjectLink {
    /** Where the link goes. */
    href: string;
    /** Link text. Must make sense on its own when read out of context (WCAG 2.4.4). */
    label: string;
  }

  /** One portfolio piece. Keep each field to a single sentence. */
  interface Project {
    /** Name of the project or client (with their permission). */
    title: string;
    /** What was wrong or missing before. */
    problem: string;
    /** What I built or changed. */
    solution: string;
    /** What's better now, measurable if possible. */
    result: string;
    /** Optional proof the work exists. */
    link?: ProjectLink;
  }

  /** Services shown under "What I Handle". */
  const services: Service[] = [
    {
      title: 'Building your website',
      description: 'A site designed around your business, built to be easy to update and hard to break.',
    },
    {
      title: 'Running your domain',
      description: 'I set up and maintain your domain and its settings, keep everything current, and respond quickly if something looks wrong.',
    },
    {
      title: 'Knowing how your site is doing',
      description: 'Clear, plain-language reports on your website traffic and domain health, so you know what is working.',
    },
    {
      title: 'Connecting the tools you use',
      description: 'Social media feeds, live chat, online shops, and chatbots, added to your site and set up securely.',
    },
  ];

  /** Projects shown under "Selected Work", strongest first. The section stays hidden while this is empty. */
  const projects: Project[] = [
    {
      title: 'Fermilab: Database Security Monitoring Framework',
      problem: "Fermilab's database team had a prototype that could only read MongoDB logs.",
      solution: 'I rebuilt it as a database-agnostic framework supporting MongoDB and PostgreSQL that flags failed logins, slow queries, unknown hosts, and privilege-escalation attempts.',
      result: 'Tested end to end with a live Checkmk instance, the team plans to adopt it, and the work was published as a Fermilab technical paper.',
      link: {
        // INSPIRE record page: stable, shows title/author/report number, links the PDF
        href: 'https://inspirehep.net/literature/3191904',
        label: 'Read the published paper on INSPIRE',
      },
    },
    {
      title: 'Whalint: Container Security Linter',
      problem: 'I wanted to learn Go and understand container security beyond the basics, and existing linters bury real issues under style warnings.',
      solution: 'I built Whalint, an open-source tool that scans Docker build files and flags only mistakes with real consequences: hardcoded credentials, apps running with full admin rights, and outdated packages.',
      result: 'Version 1 is complete and public on GitHub, with a severity scale that separates "fix this now" from "fix this eventually."',
      link: {
        href: 'https://github.com/Opulent0/whalint',
        label: 'View Whalint on GitHub',
      },
    },
  ];

  /** Tools shown as badges in one row. */
  const tools: string[] = ['Go', 'Python', 'TypeScript', 'Vue', 'Astro'];
</script>
