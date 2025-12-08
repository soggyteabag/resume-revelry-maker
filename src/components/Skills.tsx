import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Skills = () => {
  const { skills } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

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
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skills.map((category, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 40px -10px hsl(var(--accent) / 0.15)"
                }}
                className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-6">{category.category}</h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={i}
                      variants={tagVariants}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: "0 4px 20px -4px hsl(var(--accent) / 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
