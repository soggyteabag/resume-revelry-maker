const skillCategories = [
  {
    category: "IT & Cloud Systems",
    skills: ["Networking", "Systems Administration", "Azure", "AWS", "IT Troubleshooting", "Cloud Infrastructure"]
  },
  {
    category: "Operations & Logistics",
    skills: ["Supply Chain Management", "Infrastructure Deployment", "Site Coordination", "Vendor Negotiations", "Project Management"]
  },
  {
    category: "Business & Leadership",
    skills: ["Customer Service", "Strategic Communication", "Data Analysis", "People Management", "International Client Relations"]
  },
  {
    category: "Software & Tools",
    skills: ["Microsoft Office Suite", "Adobe Creative Tools", "Active Directory", "Digital Survey Tools", "SEO Strategy"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow border border-border"
              >
                <h3 className="text-xl font-bold text-accent mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
