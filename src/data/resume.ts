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
    title: "Logistics & Operations Specialist",
    location: "Copenhagen",
    yearsExperience: {
      start: 2018,
      end: 2025,
      total: "7+ yrs exp."
    },
    tagline: "I believe in transforming complex supply chains into seamless experiences, where strategic vision meets operational excellence."
  },

  about: {
    paragraphs: [
      "With over five years of experience spanning aviation, construction, and environmental sectors, I specialize in delivering end-to-end logistics and operations solutions that drive measurable results. Recently relocated to Copenhagen, I bring a unique blend of international client management expertise, vendor negotiation skills, and a proven track record of optimizing complex supply chains.",
      "My approach combines strategic thinking with hands-on execution, whether managing 500+ aviation accounts, coordinating high-profile construction projects for prestigious clients, or implementing IT and cloud systems to enhance operational efficiency. I thrive on building global partnerships and turning logistical challenges into competitive advantages."
    ]
  },

  experience: [
    {
      title: "Operations Coordinator",
      company: "Wayman Group",
      location: "UK",
      dates: "Oct 2023 – Oct 2024",
      achievements: [
        "Managed vendor selection and negotiation for complex construction projects, including high-profile clients such as Bentley Motors and Mulberry",
        "Developed and maintained a comprehensive database of 500+ products using Excel and Google Sheets to ensure efficient tracking and accuracy",
        "Coordinated supply chain logistics for large-scale commercial construction projects, ensuring timely delivery and cost-effective solutions",
        "Built and strengthened relationships with key vendors, improving contract terms and service reliability"
      ]
    },
    {
      title: "Supply Chain Coordinator",
      company: "Skytanking",
      location: "UK",
      dates: "Apr 2020 – Sep 2023",
      achievements: [
        "Coordinated international fuel shipments for 500+ airlines across 2 global regions, including all major commercial carriers",
        "Streamlined supplier relationships and contract negotiations, securing better pricing and delivery timelines",
        "Collaborated closely with finance and operations teams to manage invoicing, shipping schedules, and compliance requirements",
        "Implemented process improvements that reduced delivery delays and enhanced overall supply chain visibility",
        "Played a key role in maintaining strong client relationships, resulting in increased contract renewals and customer satisfaction"
      ]
    },
    {
      title: "Account Manager",
      company: "Restoration Ecology",
      location: "UK",
      dates: "Jul 2018 – Mar 2020",
      achievements: [
        "Oversaw all aspects of client account management for environmental restoration projects across the UK",
        "Coordinated with suppliers and contractors to ensure timely procurement and delivery of materials and services",
        "Conducted detailed project planning and reporting, ensuring adherence to environmental standards and budgets",
        "Developed strong client relationships, leading to repeat business and positive long-term partnerships"
      ]
    }
  ],

  skills: [
    {
      category: "Supply Chain & Logistics",
      skills: ["Vendor Negotiation", "Contract Management", "International Shipping", "Inventory Management", "Procurement Strategy"]
    },
    {
      category: "Operations & Project Management",
      skills: ["Process Optimization", "Cross-functional Collaboration", "Client Relationship Management", "Quality Assurance", "Cost Control"]
    },
    {
      category: "Technical & IT",
      skills: ["Excel", "Google Sheets", "AWS Cloud Practitioner Certified", "Google IT Support Certified", "Data Analysis", "CRM Systems"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Strategic Thinking", "Communication", "Team Leadership", "Adaptability"]
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
      title: "Employee of the Quarter – Q2 2022",
      description: "Recognized for exceptional performance in managing international supply chain operations during a period of high demand and logistical challenges.",
      year: "2022"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Achieved industry-recognized certification demonstrating proficiency in cloud computing concepts, AWS services, and best practices.",
      year: "2024"
    },
    {
      title: "Google IT Support Professional Certificate",
      description: "Completed comprehensive training covering IT fundamentals, system administration, networking, and security.",
      year: "2024"
    }
  ],

  additionalExperience: [
    "Volunteer Experience: Community outreach coordinator for local environmental initiatives (2017–2018)",
    "Professional Development: Completed courses in Advanced Excel, Project Management, and Supply Chain Optimization",
    "Hobbies & Interests: Hiking, sustainable living practices, technology trends, and Scandinavian culture"
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
