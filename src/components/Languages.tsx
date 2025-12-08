import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Languages = () => {
  const { languages } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="languages" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">05.</span> LANGUAGES
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 40px -10px hsl(var(--accent) / 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-between items-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 cursor-default"
              >
                <h3 className="text-xl font-bold text-foreground">{language.name}</h3>
                <motion.span 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-accent font-medium px-3 py-1 bg-accent/10 rounded-full"
                >
                  {language.proficiency}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
