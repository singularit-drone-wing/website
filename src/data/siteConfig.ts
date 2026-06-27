// ============================================================
// SINGULARIT — Site Configuration
// Central metadata, social links, and copy for the site.
// ============================================================

export const siteConfig = {
  name: "SINGULARIT",
  tagline: "Student Innovation Club",
  description:
    "SINGULARIT is a student-led innovation club at Cochin University of Science and Technology, pioneering cutting-edge technology in autonomous systems.",
  url: "https://teamsingularit.com",

  about: {
    headline: "About SINGULARIT",
    intro: `SINGULARIT is a student-led innovation club at Cochin University of Science and Technology. We are dedicated to solving real world problems through student efforts in various domains. 
    `,
    foundation: `Founded on the belief that great innovation comes from hands-on learning, we convert theoretical concepts into real systems.`,
    differentiator: {
      question: "What makes us different?",
      answer: `We are not just a competition team. We are a platform for aspiring engineers to innovate, learn and grow into industry leaders.`,
    },
  },

  mission: {
    headline: "Our Mission",
    statement: `Our mission is to prepare students for the growing demands of the technology industry.`,
    bridge: `We bridge the gap between classroom learning and industry-ready application by providing hands-on experience in:`,
    focusAreas: [
      {
        title: "Autonomous Systems & AI",
        description: "Building intelligent decision-making capabilities",
      },
      {
        title: "Robotics & Hardware",
        description: "Designing systems that perform in challenging environments",
      },
      {
        title: "Real-world Problem Solving",
        description: "Tackling problems that have a tangible impact",
      },
    ],
    goal: `Our immediate goal is to advance autonomous aerial systems technology while creating an inclusive environment where every member grows as an engineer and innovator.`,
  },

  vision: {
    headline: "Our Vision",
    statement: `Our vision extends far beyond a single competition. We see SINGULARIT as:`,
    pillars: [
      {
        title: "A catalyst for innovation",
        description:
          "Establishing CUSAT as a hub for cutting-edge autonomous systems research and development",
      },
      {
        title: "A community of builders",
        description:
          "Creating a culture where students from all disciplines collaborate, experiment and lead",
      },
      {
        title: "A bridge to industry",
        description:
          "Preparing the next generation of engineers to tackle global challenges in robotics, AI and autonomous systems",
      },
      {
        title: "A platform for global impact",
        description:
          "Demonstrating that student-led teams from Indian institutions can compete and excel on the world stage",
      },
    ],
    closing: `We believe in empowering students — especially those uncertain about their abilities — and transforming them into some of the most capable professionals in their fields.`,
  },

  competitions: {
    headline: "Past Competitions",
    subtitle: "From National to Global",
    intro: `Our competitive journey began at THARANG 2K25 (K Karunakaran Memorial Model Polytechnic College, Kallettumkara, Kerala), where team members Gautham Krishna K J and Arun K N showcased our autonomous drone project at this national-level techno-cultural festival — gaining our first recognition and setting our sights higher.`,
    suas: {
      title: "AUVSI SUAS 2025 — International Competition",
      location: "St. Mary's County Regional Airport, Maryland, USA 🇺🇸",
      achievement: `Team SINGULARIT made history as CUSAT's first autonomous drone flight on a global stage and as Kerala's first and only public sector institution to qualify for this prestigious international competition.`,
      results: [
        "Global Mission Ranking: #25 among top international university teams",
        "Successfully designed and demonstrated autonomous aerial systems",
        "Competed in real-world challenges including autonomous flight, object detection, aerial mapping, and precision payload delivery",
      ],
    },
  },

  contact: {
    email: "officialsingularit@gmail.com",
    location: "School of Engineering, CUSAT, Kochi, Kerala, India",
  },

  socials: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/_teamsingularit_",
      icon: "instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/teamsingularit",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/singularit-drone-wing",
      icon: "github",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@SingularIT-y8k",
      icon: "youtube",
    }
  ],
} as const;
