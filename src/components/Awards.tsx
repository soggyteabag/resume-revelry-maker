import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Awards = () => {
  const { awards, additionalExperience } = resumeData;

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="awards" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">06.</span> AWARDS & RECOGNITION
          </motion.h2>
          
          <motion.div 
            className="space-y-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                className="grid md:grid-cols-3 gap-6 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors duration-300"
              >
                <div>
                  <p className="text-sm text-accent mb-2 font-medium">{award.year}</p>
                  <h3 className="text-xl font-bold text-foreground">{award.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 10px 40px -10px hsl(var(--accent) / 0.1)"
            }}
            className="bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Additional Experience</h3>
            <motion.ul 
              className="space-y-3"
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {additionalExperience.map((experience, index) => (
                <motion.li 
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start group"
                >
                  <motion.span 
                    className="text-accent mr-3 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                  <span className="text-muted-foreground">{experience}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
