// ============= TypeScript Interfaces =============

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  yearsExperience: {
    start: number;
    end: number;
    total: string;
  };
  tagline: string;
}

export interface AboutSection {
  paragraphs: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Award {
  title: string;
  description: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ContactCTA {
  heading: string;
  description: string;
  downloadCVHeading: string;
  downloadCVDescription: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  about: AboutSection;
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
  languages: Language[];
  awards: Award[];
  additionalExperience: string[];
  contact: ContactInfo;
  contactCTA: ContactCTA;
}

// ============= Resume Data =============

export const resumeData: ResumeData = {
  personal: {
    name: "THOMAS\nMILLER CARR",
    title: "Operations & Automation Specialist",
    location: "Copenhagen",
    yearsExperience: {
      start: 2018,
      end: 2025,
      total: "7+ yrs exp."
    },
    tagline: "Transforming operations through automation, cloud infrastructure, and strategic process optimization."
  },

  about: {
    paragraphs: [
      "Operations professional with 5+ years' experience in transport and project coordination, specializing in automation and cloud infrastructure. I deliver end-to-end aviation, transport, construction, and environmental solutions with a focus on efficiency and measurable business outcomes. Recently relocated to Copenhagen, I bring proven expertise in international client portfolio management and systems integration.",
      "My approach blends strategic vision with hands-on execution—whether managing 500+ active client accounts, building AI workflow automations using n8n and Workato to reduce manual processing, or coordinating high-profile projects for prestigious clients. I thrive on optimizing operations, developing global partnerships, and turning complex logistical challenges into competitive advantages."
    ]
  },

  experience: [
    {
      title: "Key Accounts Manager",
      company: "The Prestige Group",
      location: "London",
      dates: "Jan 2025 – Present",
      achievements: [
        "Managing end-to-end operations for over 500 active client accounts across private aviation, ground transport, and premium event logistics",
        "Achieved 40% revenue growth within 6 months for my department, improving client account relations and retention; growing the international concierge department over 15% monthly",
        "Delivered bespoke logistical solutions for VIP and corporate clientele, ensuring seamless, time-critical travel coordination",
        "Regulated SEO automation and content management strategy using scheduled publishing workflows, increasing company website traffic and generating monthly inbound leads",
        "Streamlined supplier onboarding process by executing international growth strategies overseeing contract negotiations"
      ]
    },
    {
      title: "Assistant Foreman / Project Construction",
      company: "Key Structures Ltd",
      location: "London",
      dates: "Apr 2022 – Jan 2025",
      achievements: [
        "Supervised on-site delivery of premium marquee installations for high-profile clients including Buckingham Palace, Metropolitan Police, and corporate events",
        "Coordinated company logistics with 20+ suppliers and subcontractors, resolving delivery challenges and maintaining quality, resulting in a 94% client satisfaction rating",
        "Led small cross-functional teams of 6-10 personnel across multiple work sites in London and beyond"
      ]
    },
    {
      title: "Field Operator",
      company: "Aoraki Tree & Scrub",
      location: "Mackenzie District, NZ",
      dates: "Jan 2024 – Aug 2024",
      achievements: [
        "Executed environmental restoration projects across 2,000+ hectares using GPS mapping and digital surveying tools to track invasive species removal and biodiversity recovery",
        "Engaged in native planting and restoration efforts in compliance with government ecological regulations to restore wildlife areas surrounding Mt. Cook",
        "Managed field data collection and quality assurance for submissions to the New Zealand Department of Conservation, filing over 100+ survey reports"
      ]
    },
    {
      title: "Mine Site Utilities",
      company: "BHP / ESS",
      location: "Olympic Dam, South Australia",
      dates: "Aug 2021 – Feb 2022",
      achievements: [
        "Supported daily utilities maintenance and operations coordination at Australia's largest underground mine serving 4,000+ personnel",
        "Coordinated between operations teams and administrative departments to optimize equipment scheduling, improving maintenance response times across site"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Southfields Academy",
      location: "SW London",
      dates: "Aug 2018 – Aug 2019",
      achievements: [
        "Teaching support assistant targeting educational interventions for students aged 11-19 with Special Educational Needs (EHCP) at Ofsted 'Outstanding' rated Academy School",
        "Supported student learning through positive reinforcement and a structured classroom environment",
        "Collaborated with multidisciplinary team including external Educational Psychologists and Speech & Language Therapists to implement specified learning strategies"
      ]
    }
  ],

  skills: [
    {
      category: "IT & Cloud",
      skills: ["Networking", "Systems Administration", "MS Azure", "AWS", "IT Troubleshooting", "Active Directory", "Cloud Computing"]
    },
    {
      category: "Automation & Integration",
      skills: ["n8n Workflow Automation", "Workato Platform", "API Integration", "Process Orchestration", "Webhook Configuration", "Low-Code Development", "Data Pipeline Design"]
    },
    {
      category: "Operations & Project Management",
      skills: ["Supply Chain Management", "International Logistics Coordination", "Vendor Relationship Management", "Project Management", "Resource Allocation", "Inventory Management"]
    },
    {
      category: "Business & Soft Skills",
      skills: ["Customer Service", "Data Analysis", "Process Mapping", "Performance Metrics", "Team Leadership", "Problem Solving", "Strategic Thinking"]
    }
  ],

  education: [
    {
      degree: "BA (Hons) History – 2:1",
      institution: "Anglia Ruskin University",
      location: "Cambridge",
      dates: "2015 – 2018"
    },
    {
      degree: "Google IT Support Professional Certificate",
      institution: "Google / Coursera",
      location: "Online",
      dates: "2024"
    },
    {
      degree: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services",
      location: "Online",
      dates: "2024"
    }
  ],

  languages: [
    {
      name: "English",
      proficiency: "Native"
    },
    {
      name: "Danish",
      proficiency: "Conversational"
    }
  ],

  awards: [
    {
      title: "Workato Automations Pro II",
      description: "Advanced certification in enterprise automation and integration platform design, demonstrating expertise in workflow orchestration and API connectivity.",
      year: "2025"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Industry-recognized certification demonstrating proficiency in cloud computing concepts, AWS services, and best practices.",
      year: "2024"
    },
    {
      title: "Google IT Support Professional Certificate",
      description: "Comprehensive training covering IT fundamentals, system administration, networking, and security.",
      year: "2024"
    },
    {
      title: "Jack Petchey Award",
      description: "Recognized for outstanding achievement and leadership within the Scouts Association.",
      year: "2018"
    }
  ],

  additionalExperience: [
    "Seasonal Work: Kiwi Harvester/Pruner at Mat Johnston Contracting (2023–2024)",
    "Hospitality & Events: Bartender/Waiter at Laguna Jacks Bar (2020), Cinque Terre (2021), Royal Ascot (2019); London Marathon setup & onsite operations; Fraser Island Tour Ambassador; WOMAD Festival Ambassador",
    "Leadership & Sports: First Team ARU Rowing Club – Head of the Cam Winners (2018)",
    "Volunteer Experience: Receptionist & Team Lead at Nomads Australia; Scouts Association member and Jack Petchey Award recipient"
  ],

  contact: {
    email: "thomasgcarr@gmail.com",
    phone: "+44 7586 711 224",
    location: "London / Copenhagen",
    linkedin: "#",
    github: "#"
  },

  contactCTA: {
    heading: "Ready to Connect?",
    description: "Whether you're looking for a logistics specialist, operations manager, or someone who can bridge the gap between strategy and execution, I'd love to hear from you.",
    downloadCVHeading: "Download Full CV",
    downloadCVDescription: "Get a comprehensive overview of my experience and qualifications"
  }
};
