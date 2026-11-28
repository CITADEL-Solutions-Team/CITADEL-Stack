<template>
  <!-- Tanis Georgi's About Me page, served at /about-us/tgeorgi.
       Rendered to static HTML at build time: no client:* directive, so
       nothing hydrates and no JavaScript from this page reaches the browser.
       All words and media live in ./tgeorgi/content.ts; name, role and team
       color come from members.ts through the `bio` prop. -->
  <div class="max-w-5xl mx-auto" :style="warmVars">
    <!-- Hero -->
    <header :style="glow" class="rounded-3xl px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center gap-8">
      <ResponsivePhoto
        :photo="content.headshot"
        sizes="(min-width: 768px) 224px, 192px"
        eager
        img-class="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-(--Warm)"
        class="shrink-0 self-center"
      />
      <div>
        <h1>Hi, I'm {{ bio.Name }}!</h1>
        <p class="pt-1">
          <span class="sr-only">Pronouns: </span>{{ content.pronouns }}<span aria-hidden="true"> &middot; </span><span class="sr-only">. Based in the </span>{{ content.location }}
        </p>
        <p class="pt-2 text-lg font-semibold" :style="{ color: bio.Color }">
          {{ bio.Role }}, {{ content.roleCompany }}<span aria-hidden="true"> &middot; </span><span class="sr-only">. </span>{{ content.roleSchool }}
        </p>
        <p class="pt-4 max-w-2xl text-lg">{{ content.welcome }}</p>
        <div class="flex flex-wrap gap-4 pt-6">
          <a href="#contact" :class="btnPrimary">Say hi</a>
          <a href="#story" :class="btnSecondary">Read my story</a>
        </div>
      </div>
    </header>

    <!-- In-page navigation: plain anchor links, no script needed -->
    <nav aria-label="On this page" class="pt-8">
      <ul role="list" class="flex flex-wrap gap-x-6 gap-y-2">
        <li v-for="section in sectionLinks" :key="section.id">
          <a :href="`#${section.id}`" :class="[link, 'inline-block py-1']">{{ section.label }}</a>
        </li>
      </ul>
    </nav>

    <!-- A little about me -->
    <PageSection id="story" heading="A little about me" :color="bio.Color">
      <div class="grid md:grid-cols-2 gap-8 md:items-start">
        <div class="space-y-4">
          <p v-for="(paragraph, index) in content.story" :key="index">{{ paragraph }}</p>
        </div>
        <ResponsivePhoto :photo="content.storyPhoto" />
      </div>
    </PageSection>

    <!-- What I care about -->
    <PageSection id="care" heading="What I care about" :color="bio.Color">
      <div class="grid gap-6">
        <article
          v-for="(card, index) in content.care"
          :key="card.heading"
          :aria-labelledby="`care-${index}`"
          class="rounded-2xl bg-(--WarmCard) border-l-4 border-(--Warm) px-6 py-6 grid gap-6"
          :class="{ 'md:grid-cols-2 md:items-start': card.photo }"
        >
          <div>
            <h3 :id="`care-${index}`" class="text-(--Warm)">{{ card.heading }}</h3>
            <p v-for="(paragraph, pIndex) in card.paragraphs" :key="pIndex" class="pt-3">{{ paragraph }}</p>
          </div>
          <ResponsivePhoto v-if="card.photo" :photo="card.photo" />
        </article>
      </div>
    </PageSection>

    <!-- What I'm up to now: Citadel-blue card beside the esports photo -->
    <PageSection id="now" heading="What I'm up to now" :color="bio.Color">
      <div class="grid md:grid-cols-2 gap-8 md:items-center">
        <ul role="list" class="rounded-2xl bg-(--AltCard) border border-(--Accent) px-6 py-6 space-y-5">
          <li v-for="item in content.now" :key="item.header">
            <h3>{{ item.header }}</h3>
            <p class="pt-1">{{ item.body }}</p>
          </li>
        </ul>
        <ResponsivePhoto :photo="content.nowPhoto" />
      </div>
    </PageSection>

    <!-- Hobbies -->
    <PageSection id="hobbies" heading="Life outside of work" :color="bio.Color">
      <ul role="list" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="hobby in content.hobbies" :key="hobby.heading" class="rounded-2xl bg-(--WarmCard) px-6 py-5">
          <h3 class="text-(--Warm)">{{ hobby.heading }}</h3>
          <p class="pt-2">{{ hobby.body }}</p>
        </li>
        <!-- EMP Club photo and robot arm clip fill the last row beside the final card. -->
        <li>
          <ResponsivePhoto :photo="content.hobbyPhoto" sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" />
        </li>
        <li>
          <VideoClip :video="content.hobbyVideo" describedby-id="robot-arm-video-desc" />
        </li>
      </ul>
    </PageSection>

    <!-- Projects -->
    <PageSection id="projects" heading="A few things I've worked on" :color="bio.Color">
      <div class="grid gap-6">
        <ProjectCard v-for="project in content.projects" :key="project.id" :project="project" />
      </div>
    </PageSection>

    <!-- Proud moments: highlight tiles, then a short list, then tools -->
    <PageSection id="proud" heading="Proud moments" :color="bio.Color">
      <ul role="list" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="stat in content.proudStats" :key="stat.value" class="rounded-2xl bg-(--WarmCard) px-6 py-5">
          <p class="font-exo font-bold text-4xl text-(--Warm)">
            <span :aria-hidden="stat.spoken ? 'true' : undefined">{{ stat.value }}</span>
            <span v-if="stat.spoken" class="sr-only">{{ stat.spoken }}</span>
          </p>
          <p class="pt-1">{{ stat.label }}</p>
        </li>
      </ul>
      <div class="grid md:grid-cols-2 gap-8 md:items-center pt-8">
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="(item, index) in content.proudOf" :key="index">{{ item }}</li>
        </ul>
        <ResponsivePhoto :photo="content.proudPhoto" />
      </div>
      <h3 class="pt-10 pb-3">Tools I use</h3>
      <ul role="list" class="flex flex-wrap gap-3">
        <li
          v-for="tool in content.tools"
          :key="tool"
          class="rounded-full border border-(--Warm) px-4 py-1"
        >
          {{ tool }}
        </li>
      </ul>
    </PageSection>

    <!-- Get in touch -->
    <section id="contact" aria-labelledby="contact-heading" :style="glow" class="scroll-mt-8 rounded-3xl px-6 py-12 md:px-10 my-10 text-center">
      <h2 id="contact-heading">Come say hi</h2>
      <p class="pt-4 max-w-2xl mx-auto text-lg">{{ content.contactIntro }}</p>
      <p class="pt-2">
        Email me at
        <a :href="`mailto:${content.email}`" :class="[link, 'font-semibold']">{{ content.email }}</a>
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-8">
        <a :href="`mailto:${content.email}`" :class="btnPrimary">Email me</a>
        <a :href="content.linkedin" :class="btnSecondary">Connect on LinkedIn</a>
        <a href="/contact-us" :class="btnSecondary">Contact Citadel Solutions</a>
      </div>
    </section>

    <p class="pb-4">
      <a href="/about-us" :class="link">Meet the rest of the Citadel Solutions team</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Bio } from '@/components/cards/bio/members';
import PageSection from './tgeorgi/PageSection.vue';
import ProjectCard from './tgeorgi/ProjectCard.vue';
import ResponsivePhoto from './tgeorgi/ResponsivePhoto.vue';
import VideoClip from './tgeorgi/VideoClip.vue';
import { content } from './tgeorgi/content';

defineProps<{
  bio: Bio;
}>();

// Build-time only: becomes static links in the HTML.
const sectionLinks: { id: string; label: string }[] = [
  { id: 'story', label: 'About me' },
  { id: 'care', label: 'What I care about' },
  { id: 'now', label: "What I'm up to" },
  { id: 'hobbies', label: 'Outside of work' },
  { id: 'projects', label: 'Projects' },
  { id: 'proud', label: 'Proud moments' },
  { id: 'contact', label: 'Say hi' },
];

// Warm accents layered on Citadel's black, blue and team yellow. Set as
// custom properties on the root, so child components inherit them.
// No <style> block on purpose: Astro would add its hash to the site-wide
// Content Security Policy, changing every other page.
// Contrast (WCAG): #FFC861 on #000000 is about 13.7:1 and on #1E1A16 about
// 11:1; white on #1E1A16 is about 17:1; black on #FFC861 is about 13.7:1.
const warmVars: Record<string, string> = {
  '--Warm': '#ffc861',
  '--WarmCard': '#1e1a16',
};

// Soft amber and blue glow behind the hero and contact blocks. The base is
// the dark warm card color, so white text keeps full contrast on it.
const glow: Record<string, string> = {
  background:
    'radial-gradient(ellipse at top left, rgb(255 200 97 / 0.14), transparent 60%), ' +
    'radial-gradient(ellipse at bottom right, rgb(30 144 255 / 0.12), transparent 60%), #1e1a16',
};

const focusRing: string = 'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white';
const btnBase: string = `inline-block font-semibold rounded-full px-6 py-2.5 border-2 border-(--Warm) hover:border-white ${focusRing}`;
const btnPrimary: string = `${btnBase} bg-(--Warm) text-black`;
const btnSecondary: string = `${btnBase} text-(--Warm)`;
const link: string = `underline underline-offset-4 hover:text-(--Warm) ${focusRing}`;
</script>
