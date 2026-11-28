// src/components/team/tgeorgi/content.ts
// Every word and picture on Tanis's About Me page lives here, so updates
// only touch this file. Name, role and team color are NOT here: they come
// from members.ts through the `bio` prop.
//
// Sources: Tanis's AllAboutMe.md portfolio (Nov 27, 2026) and what Tanis
// wrote in chat. Nothing goes in this file that isn't from one of those.
// The portfolio's "Do Not Include" section stays out.
//
// Audience: potential clients, friends and family, recruiters. Warm and
// welcoming first; the resume lives on LinkedIn.

import type { ImageMetadata } from 'astro';

// Photos: metadata stripped, resized to WebP (two widths) + a JPG fallback.
import headshot320 from '@/assets/team/tgeorgi/photos/headshot-320.webp';
import headshot648 from '@/assets/team/tgeorgi/photos/headshot-648.webp';
import headshotJpg from '@/assets/team/tgeorgi/photos/headshot-648.jpg';
import poster640 from '@/assets/team/tgeorgi/photos/honors-2025-poster-640.webp';
import poster1280 from '@/assets/team/tgeorgi/photos/honors-2025-poster-1280.webp';
import posterJpg from '@/assets/team/tgeorgi/photos/honors-2025-poster-1280.jpg';
import worker640 from '@/assets/team/tgeorgi/photos/student-worker-640.webp';
import worker1280 from '@/assets/team/tgeorgi/photos/student-worker-1280.webp';
import workerJpg from '@/assets/team/tgeorgi/photos/student-worker-1280.jpg';
import nasa640 from '@/assets/team/tgeorgi/photos/nasa-selfie-640.webp';
import nasa1280 from '@/assets/team/tgeorgi/photos/nasa-selfie-1280.webp';
import nasaJpg from '@/assets/team/tgeorgi/photos/nasa-selfie-1280.jpg';
import speech640 from '@/assets/team/tgeorgi/photos/honors-2026-speech-640.webp';
import speech1280 from '@/assets/team/tgeorgi/photos/honors-2026-speech-1280.webp';
import speechJpg from '@/assets/team/tgeorgi/photos/honors-2026-speech-1280.jpg';
import nasaApp640 from '@/assets/team/tgeorgi/projects/nasa-burning-activity-calendar-640.webp';
import nasaApp1250 from '@/assets/team/tgeorgi/projects/nasa-burning-activity-calendar-1250.webp';
import nasaAppJpg from '@/assets/team/tgeorgi/projects/nasa-burning-activity-calendar-1250.jpg';
// Only the results chart from the LLM poster: the full poster lists the
// jailbreak prompt templates and harmful topics, and its PDF is untagged.
import llmModel640 from '@/assets/team/tgeorgi/projects/llm-study-results-by-model-640.webp';
import llmModel1015 from '@/assets/team/tgeorgi/projects/llm-study-results-by-model-1015.webp';
import llmModelJpg from '@/assets/team/tgeorgi/projects/llm-study-results-by-model-1015.jpg';
import llmFraming640 from '@/assets/team/tgeorgi/projects/llm-study-results-by-framing-640.webp';
import llmFraming1015 from '@/assets/team/tgeorgi/projects/llm-study-results-by-framing-1015.webp';
import llmFramingJpg from '@/assets/team/tgeorgi/projects/llm-study-results-by-framing-1015.jpg';
import esports640 from '@/assets/team/tgeorgi/photos/esports-team-640.webp';
import esports900 from '@/assets/team/tgeorgi/photos/esports-team-900.webp';
import esportsJpg from '@/assets/team/tgeorgi/photos/esports-team-900.jpg';
import emp640 from '@/assets/team/tgeorgi/photos/emp-club-tower-640.webp';
import emp1024 from '@/assets/team/tgeorgi/photos/emp-club-tower-1024.webp';
import empJpg from '@/assets/team/tgeorgi/photos/emp-club-tower-1024.jpg';
import grad640 from '@/assets/team/tgeorgi/photos/graduation-2026-640.webp';
import grad1280 from '@/assets/team/tgeorgi/photos/graduation-2026-1280.webp';
import gradJpg from '@/assets/team/tgeorgi/photos/graduation-2026-1280.jpg';

// Videos: compressed to 720p with the audio removed, so each visible
// description is the clip's full text alternative (no captions needed).
import honorsFairVideo from '@/assets/team/tgeorgi/videos/honors-fair-2026.mp4';
import honorsFairPoster from '@/assets/team/tgeorgi/videos/honors-fair-2026-poster.webp';
import robotArmVideo from '@/assets/team/tgeorgi/videos/robot-arm-emp-club.mp4';
import robotArmPoster from '@/assets/team/tgeorgi/videos/robot-arm-emp-club-poster.webp';

export interface Photo {
  small: ImageMetadata; // WebP, ~640px wide
  large: ImageMetadata; // WebP, full display size
  fallback: ImageMetadata; // JPG for browsers without WebP
  alt: string; // what the photo shows, for screen readers
  caption?: string; // visible caption, different from the alt text
}

export interface Video {
  src: string;
  poster: ImageMetadata;
  width: number;
  height: number;
  description: string; // visible text alternative (the clip has no audio)
}

export interface CareCard {
  heading: string;
  paragraphs: string[];
  photo?: Photo;
}

export interface NowItem {
  header: string;
  body: string;
}

export interface Hobby {
  heading: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
  // Spoken instead of `value` when the visible text reads badly aloud
  // (screen readers can say "14M+" as "14 meters plus").
  spoken?: string;
}

export interface Project {
  id: string;
  title: string;
  when: string;
  summary: string[];
  details?: string[];
  detailsLabel?: string;
  photos?: Photo[];
  video?: Video;
}

export interface AboutContent {
  pronouns: string;
  location: string;
  roleCompany: string;
  roleSchool: string;
  welcome: string;
  headshot: Photo;
  story: string[];
  storyPhoto: Photo;
  care: CareCard[];
  now: NowItem[];
  nowPhoto: Photo;
  hobbies: Hobby[];
  hobbyPhoto: Photo;
  hobbyVideo: Video;
  projects: Project[];
  proudStats: Stat[];
  proudOf: string[];
  proudPhoto: Photo;
  tools: string[];
  contactIntro: string;
  email: string;
  linkedin: string;
}

export const content: AboutContent = {
  pronouns: 'He/Him',
  location: 'Greater Chicago Area',
  roleCompany: 'Citadel Solutions',
  roleSchool: 'Cybersecurity student at Aurora University',

  welcome:
    "Thanks for stopping by! I'm a cybersecurity student, a tutor, a D&D DM, and the CEO of a small tech company I run with my friends. Whether you're a potential client, a recruiter, or friends and family checking in, I'm really glad you're here.",

  headshot: {
    small: headshot320,
    large: headshot648,
    fallback: headshotJpg,
    alt: 'Tanis Georgi smiling, with shoulder-length wavy brown hair and a gray t-shirt.',
  },

  story: [
    "I didn't go straight to college. I took a gap year first to figure out what I actually enjoyed, and that path led me to Waubonsee Community College, where I found cybersecurity.",
    "At Waubonsee, I jumped into everything I could: honors projects, research with faculty advisors, clubs, the esports team, and tutoring. One of those honors projects grew into Citadel Solutions, which I started with my business partner in spring 2026, just before graduating with honors that May.",
    "Today I'm a junior at Aurora University, studying cybersecurity with a minor in math. I'm most curious about where AI and security meet, and after graduation I'm hoping to earn a master's degree focused on AI security.",
  ],

  // CONSENT: confirm both advisors are OK being pictured before publishing.
  storyPhoto: {
    small: poster640,
    large: poster1280,
    fallback: posterJpg,
    alt: 'Tanis and two smiling faculty members standing beside a research poster titled "Hacking Waubonsee" in a large event hall.',
    caption: 'With two of my faculty advisors at the 2025 Waubonsee Honors Fair.',
  },

  care: [
    {
      heading: 'Helping students find their why',
      paragraphs: [
        "I enjoy helping guide students on their path. While we work through a class, we often end up talking about their future goals and how what they're learning right now ties into them. That gives the work meaning, and it builds their own motivation.",
        "It also helps me get to know who they are, so I can shape each session around what they need. For me, tutoring is mostly about talking with people, getting to know them, and helping them reach their goals. Since fall 2024, I've gotten to do that with more than 250 students across 15+ courses at Waubonsee.",
      ],
      // CONSENT: confirm everyone pictured is OK being on the site.
      photo: {
        small: worker640,
        large: worker1280,
        fallback: workerJpg,
        alt: 'Tanis and five others grinning and pointing at the camera in front of a Waubonsee Community College backdrop with red, white and black balloons.',
        caption: "At Waubonsee's student worker appreciation event, April 2025.",
      },
    },
    {
      heading: 'If tech makes you nervous, start here',
      paragraphs: [
        "At Citadel Solutions, we're all real people, and we're approachable. You don't need to know the right words or have a big problem to reach out. If you have a question, just ask.",
        "We explain things in plain language, without the jargon, and you talk directly to the people doing the work. It all comes down to one idea: we make tech make sense.",
      ],
    },
  ],

  now: [
    {
      header: 'Studying',
      body: "I'm working on a B.S. in Cybersecurity with a math minor at Aurora University, finishing in fall 2027.",
    },
    {
      header: 'Running Citadel Solutions',
      body: "As CEO, I handle the big picture and stay involved in every project. We help people with their computers and websites, and we build security into everything we do.",
    },
    {
      header: 'Tutoring',
      body: 'I help Waubonsee students with cybersecurity, IT, networking and math, all the way through Calculus III.',
    },
    {
      header: 'Coaching esports',
      body: "After a year competing on Waubonsee's esports team, I came back this fall as its coach.",
    },
  ],

  // CONSENT: confirm the players (and the other coach) are OK being pictured.
  nowPhoto: {
    small: esports640,
    large: esports900,
    fallback: esportsJpg,
    alt: 'Team photo of 15 people in matching black and red Waubonsee esports jerseys, posed in two rows on a gym floor. Tanis stands in the back row.',
    caption: 'With the Waubonsee esports team I coach.',
  },

  // Kept to roughly 40 words each so the cards line up.
  hobbies: [
    {
      heading: 'D&D DM',
      body: "I've been a DM, the storyteller who runs a Dungeons & Dragons game, since 2020, and I've been building my current campaign since February. I love introducing new players to D&D and watching them dive into role-play and let their inner nerd out.",
    },
    {
      heading: 'Volleyball',
      body: "I've played volleyball recreationally since 2020, from weekly games to a few lower-level competitions. It's a great way to get some exercise and let off stress, and along the way I've introduced several new people to the game.",
    },
    {
      heading: 'Music',
      body: 'I played guitar from age 7 until about 17, and all that practice taught me patience. At Waubonsee, I got to put it to use again by playing guitar on a track a friend made for his music production course.',
    },
    {
      heading: 'Writing and creating',
      body: "I'm writing a novel. I set it aside for a while, but I picked it back up and keep chipping away at it, one chapter at a time. I also make content meant to feel like a comfort space, and it's reached more than 14 million views.",
    },
    {
      heading: 'Tinkering',
      body: "I keep a Raspberry Pi home lab for trying out ideas, and I enjoy exploring gadgets like my Flipper Zero, which doubles as a universal remote. A lot of tinkering also happens in Waubonsee's Engineering, Mathematics, and Physics Club, where we built an Arduino robot arm.",
    },
    {
      heading: 'People and cultures',
      body: "My uncle introduced me to Mexican traditions and food (including my first crickets as a kid). My family hosted an exchange student from Thailand who I now consider a brother, and my partner, who's Peruvian, has taught me so much about her culture.",
    },
    {
      heading: 'Staying active',
      body: 'I work out two to three times a week, and between the gym, volleyball and D&D night, my calendar always has room for fun and movement. Those habits keep me balanced when school and work get busy.',
    },
  ],

  // CONSENT: confirm your friend is OK being pictured.
  hobbyPhoto: {
    small: emp640,
    large: emp1024,
    fallback: empJpg,
    alt: 'Tanis and a friend standing back to back with arms crossed, striking proud poses behind a tall tower built from spaghetti and marshmallows.',
    caption: 'Showing off our spaghetti-and-marshmallow tower in the Engineering, Mathematics, and Physics Club, back when I was president (April 2026).',
  },

  // CONSENT: club members' hands and arms appear in this clip.
  hobbyVideo: {
    src: robotArmVideo,
    poster: robotArmPoster,
    width: 1280,
    height: 720,
    description:
      "A 23-second silent clip of the Arduino robot arm we built in Waubonsee's Engineering, Mathematics, and Physics Club, grabbing and lifting small objects that club members hand it.",
  },

  projects: [
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge',
      when: 'November 2026',
      summary: [
        'On a team of five, I co-led our data work. We combined more than 20 years of NASA satellite fire data from two different sensors into one consistent record, then built a web app where you can explore fire activity on a calendar.',
        "Our method cut the error on data it had never seen from 78% to 8.1%. Judging is still pending, so fingers crossed!",
      ],
      details: [
        'The newer sensor spots about four times as many fires as the older one, so just joining the two records makes it look like fires suddenly surged.',
        'We worked out month-by-month conversion factors from the years both sensors overlapped, and tested them on years the model had never seen.',
        "When the newer sensor goes offline, our pipeline fills the gap with data from the older one, so big fires aren't undercounted.",
      ],
      photos: [
        {
          small: nasaApp640,
          large: nasaApp1250,
          fallback: nasaAppJpg,
          alt: 'Screenshot of the Burning Activity Calendar app: a map of central California with a box drawn around the Fresno and Yosemite area, a color legend for monthly hotspot counts, and the start of a month-by-month heatmap table beginning in 2003.',
          caption: 'Our Burning Activity Calendar app, zoomed in on the Fresno and Yosemite area.',
        },
        // CONSENT: confirm the three teammates are OK being pictured.
        {
        small: nasa640,
        large: nasa1280,
        fallback: nasaJpg,
        alt: 'Selfie of Tanis smiling in the foreground while three teammates on a couch work on laptops in a cozy living room.',
        caption: 'Working with three of my teammates during the NASA Space Apps Challenge.',
        },
      ],
    },
    {
      id: 'llm-boundary-mapping',
      title: 'Do AI models keep their safety rules?',
      when: 'Spring 2026',
      summary: [
        'In a solo research project with a faculty advisor, I tested whether 11 AI language models (the kind behind chatbots) stick to their safety rules when the same request is asked in different ways.',
        "I wrote 100 test prompts and scored all 1,100 responses by hand. The short version: a model that says no to a direct request will often say yes once it's reframed. This project is what pointed me toward AI security.",
      ],
      details: [
        'I ran every model on my own computer, so I was testing the models themselves, not the extra filters a company adds on top.',
        "What I'd improve next: I was the only person scoring, so the next version needs more raters and real statistics.",
      ],
      photos: [
        {
          small: llmModel640,
          large: llmModel1015,
          fallback: llmModelJpg,
          alt: 'Stacked bar chart of safety scores for 11 AI models. One model refused every test prompt, most refused the majority, and one went along with almost all of them.',
          caption: 'Results by model. Dark green means the model refused; lighter green through red means it went along with the request in more and more detail.',
        },
        {
          small: llmFraming640,
          large: llmFraming1015,
          fallback: llmFramingJpg,
          alt: 'Stacked bar chart of safety scores for each of the 10 ways I framed the requests. Depending on the framing, models refused between about half and about four-fifths of the time.',
          caption: 'Results by framing. Just changing how a request was worded changed how often models refused.',
        },
      ],
    },
    {
      id: 'waubonsee-pen-test',
      title: 'Working at my college to find and patch weaknesses in their defense',
      when: 'Spring 2025 to fall 2025',
      summary: [
        "With the college's approval and its security team involved, I spent two semesters looking for weak spots in Waubonsee's systems so they could be fixed before a real attacker found them. I started on my own, then teamed up with my project partner.",
        "We reported every finding with clear steps to fix it. Working with the security team, we confirmed that the college's layered protections were already keeping those issues from being exploited. Our recommendations focused on keeping software up to date and tightening permissions.",
      ],
      detailsLabel: 'How we kept it safe',
      details: [
        'Everything followed formal rules of engagement that the college approved before any testing began.',
        'Any student data we came across stayed in encrypted, read-only storage, used only for the project. Nothing was copied out or left behind.',
      ],
    },
    {
      id: 'citadel-project',
      title: 'Project C.I.T.A.D.E.L.: rebuilt with defense at the core',
      when: 'Fall 2025 to spring 2026',
      summary: [
        'With my project partner, under faculty advisement, I built a restricted-access research platform for studying how attackers coordinate many computers at once. Seeing how that works from the inside is how defenders learn to detect it and shut it down.',
        "Our first version, F.O.R.T., worked, but testing showed it wasn't secure enough: anyone who could reach it could use it, and nothing was logged. So we rebuilt it with defense at the core.",
        'In the new version, every user has to sign in, failed sign-in attempts are flagged as urgent, and every notable action is logged with a severity score so it can be reviewed later.',
        'We presented it at the 2026 Waubonsee Honors Fair, and ours was the only presentation given to the full audience.',
      ],
      detailsLabel: 'Why those defenses exist',
      details: [
        'A research tool like this should only ever be usable by the right people. Sign-in keeps everyone else out.',
        'If something does go wrong, the logs show exactly what happened and how serious it was, so it can be triaged quickly.',
        'It was built and used only for education, and it was never released publicly.',
      ],
      photos: [
        // CONSENT: confirm your project partner is OK being pictured.
        {
        small: speech640,
        large: speech1280,
        fallback: speechJpg,
        alt: 'Tanis in a red sweater speaking at a wooden podium while his project partner stands beside him at a laptop.',
        caption: 'Presenting Project C.I.T.A.D.E.L. at the 2026 Waubonsee Honors Fair.',
        },
      ],
      // CONSENT: visitors appear briefly in this clip.
      video: {
        src: honorsFairVideo,
        poster: honorsFairPoster,
        width: 1280,
        height: 720,
        description:
          'An 11-second silent clip from the 2026 Honors Fair: I walk visitors through my research posters, including the F.O.R.T. and C.I.T.A.D.E.L. projects.',
      },
    },
  ],

  // The biggest numbers from the portfolio, shown as highlight tiles.
  proudStats: [
    { value: '4.0', label: 'GPA so far at Aurora University' },
    { value: '$15,000', label: 'transfer scholarship for graduating from Waubonsee with honors' },
    { value: '250+', label: 'students tutored across 15+ courses' },
    { value: '8.1%', label: 'error on unseen data in our NASA project, down from 78%' },
    { value: '1,100', label: 'AI responses I scored by hand for my research' },
    { value: '14M+', spoken: 'More than 14 million', label: 'views on the content I create' },
  ],

  proudOf: [
    "Graduated from Waubonsee with honors (May 2026) after 10 honors courses and five semesters on the President's List",
    'Nominated by my supervisor for Student Worker of the Year (April 2026)',
    'Served as Vice President of Phi Theta Kappa and President of the Engineering, Mathematics, and Physics Club',
    "Founded Citadel Solutions and completed Waubonsee's Small Business Development Center program (November 2026)",
  ],

  // CONSENT: confirm your fellow graduates and the faculty member are OK being pictured.
  proudPhoto: {
    small: grad640,
    large: grad1280,
    fallback: gradJpg,
    alt: 'Tanis and four fellow graduates in gray caps and gowns holding diploma covers, standing with a faculty member in a gym decorated with balloons. Tanis wears a gold honors stole and cords.',
    caption: 'Graduating from Waubonsee with honors alongside friends from the Engineering, Mathematics, and Physics Club, May 2026.',
  },

  tools: ['Python', 'Go', 'Bash', 'PowerShell', 'Linux', 'Windows', 'Kali Linux', 'Nmap', 'Wireshark', 'OWASP ZAP', 'LM Studio', 'GitHub', 'Google Cloud Run'],

  contactIntro:
    "Whether you have a tech question, a project idea, or you just want to talk cybersecurity, D&D or volleyball, reach out. No question is too small.",

  email: 'tgeorgi@citadelsolutions.tech',
  linkedin: 'https://www.linkedin.com/in/tanis-georgi/',
};
