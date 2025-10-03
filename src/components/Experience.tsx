import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Experience = () => {
  const { experience } = resumeData;
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
            {experience.map((exp, index) => (
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
