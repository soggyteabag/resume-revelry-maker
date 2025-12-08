import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Education = () => {
  const { education } = resumeData;

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
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">04.</span> EDUCATION
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {education.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                className="grid md:grid-cols-3 gap-6 pb-8 border-b border-border last:border-0 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors duration-300"
              >
                <div>
                  <motion.p 
                    className="text-sm text-accent mb-2 font-medium"
                  >
                    {item.dates}
                  </motion.p>
                  <p className="text-base text-muted-foreground">{item.institution} • {item.location}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.degree}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
