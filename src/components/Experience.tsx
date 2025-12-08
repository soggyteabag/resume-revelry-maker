import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Experience = () => {
  const { experience } = resumeData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
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
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16"
          >
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                className="grid md:grid-cols-3 gap-6 p-6 -mx-6 rounded-lg hover:bg-card/50 transition-colors duration-300"
              >
                <div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-accent mb-2 font-medium"
                  >
                    {exp.dates}
                  </motion.p>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                
                <motion.ul 
                  className="md:col-span-2 space-y-3"
                  variants={listVariants}
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      variants={itemVariants}
                      className="flex items-start text-muted-foreground leading-relaxed group"
                    >
                      <motion.span 
                        className="text-accent mr-3 mt-1 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </motion.span>
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
