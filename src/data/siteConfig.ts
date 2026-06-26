// ============================================================
// SingularIT — Site Configuration
// Central metadata, social links, and copy for the site.
// ============================================================

export const siteConfig = {
  name: "SingularIT",
  tagline: "Engineering the Autonomous Future",
  description:
    "SingularIT is CUSAT's premier autonomous systems and robotics team — pushing the boundaries of innovation, engineering, and artificial intelligence.",
  url: "https://singularit.in",

  about: {
    headline: "We Are SingularIT",
    body: `SingularIT is the autonomous systems and robotics team at Cochin University of Science and Technology. We are a multidisciplinary group of engineers, designers, and researchers who design, build, and deploy intelligent machines.\n\nFrom combat robots to self-driving vehicles, from edge-AI systems to drone platforms — we engineer solutions that bridge theory and real-world application. Our work spans embedded systems, computer vision, control theory, mechanical design, and artificial intelligence.\n\nEvery system we build reflects our commitment to engineering excellence, rigorous testing, and continuous innovation.`,
  },

  mission: {
    headline: "Our Mission",
    body: "To cultivate a culture of hands-on engineering and research excellence — empowering students to design, build, and deploy autonomous systems that solve real-world challenges while advancing the frontiers of robotics and artificial intelligence.",
  },

  vision: {
    headline: "Our Vision",
    body: "To be recognized as one of India's leading university-level autonomous systems teams — producing engineers who shape the future of robotics, space systems, and intelligent infrastructure on a global stage.",
  },

  contact: {
    email: "singularit@cusat.ac.in",
    location: "School of Engineering, CUSAT, Kochi, Kerala, India",
  },

  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/singularit_cusat",
      icon: "instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/singularit",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/singularit-cusat",
      icon: "github",
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@singularit",
      icon: "youtube",
    },
  ],
} as const;
