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
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">{exp.dates}</p>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-3 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
