import { motion } from "framer-motion";

const experiences = [
  {
    title: "Key Accounts Manager",
    company: "The Prestige Group",
    location: "London",
    dates: "Jan 2025 – Present",
    achievements: [
      "Orchestrated end-to-end private aviation logistics across 500+ active international accounts",
      "Drove 40% revenue growth within six months through strategic partnership expansion and enhanced client relations",
      "Spearheaded international growth initiatives, including supplier negotiations and partner onboarding",
      "Led SEO strategy development and weekly content management, strengthening digital presence"
    ]
  },
  {
    title: "Assistant Foreman / Project Construction",
    company: "Key Structures Ltd",
    location: "London",
    dates: "Apr 2022 – Jan 2025",
    achievements: [
      "Supervised marquee structure installations for prestigious clients including Buckingham Palace and Metropolitan Police",
      "Coordinated suppliers, operators, and clients to ensure seamless multi-site operations",
      "Managed cross-functional teams, delivering projects on time while maintaining rigorous safety compliance"
    ]
  },
  {
    title: "Field Operator",
    company: "Aoraki Tree & Scrub",
    location: "Mackenzie District, NZ",
    dates: "Jan 2024 – Aug 2024",
    achievements: [
      "Executed environmental conservation initiatives, identifying and removing invasive species to restore biodiversity",
      "Led native planting and wetland restoration projects aligned with government ecological standards",
      "Managed field data collection using digital survey tools for the NZ Department of Conservation"
    ]
  },
  {
    title: "Mine Site Utilities Coordinator",
    company: "BHP / ESS",
    location: "Olympic Dam, South Australia",
    dates: "Aug 2021 – Feb 2022",
    achievements: [
      "Supported daily utility operations at one of Australia's largest mining facilities",
      "Coordinated operations teams on administrative tasks and site management protocols"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "Southfields Academy",
    location: "SW London",
    dates: "Aug 2018 – Aug 2019",
    achievements: [
      "Provided tailored support to students aged 11–19 with Special Educational Needs at an Outstanding Ofsted Academy",
      "Delivered targeted small-group interventions and in-class support as part of The Achievement Studio",
      "Collaborated with educational psychologists and speech therapists to achieve individualized learning outcomes"
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">02.</span> EXPERIENCE
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="grid md:grid-cols-3 gap-6"
              >
                <div>
                  <p className="text-sm text-accent mb-2">{exp.dates}</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                
                <motion.ul 
                  className="md:col-span-2 space-y-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-start text-muted-foreground leading-relaxed"
                    >
                      <span className="text-accent mr-3 mt-1 flex-shrink-0">→</span>
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
