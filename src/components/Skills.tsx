import { motion } from "framer-motion";

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
    <section id="skills" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">03.</span> SKILLS
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
