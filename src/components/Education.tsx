import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Education = () => {
  const { education } = resumeData;
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
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 pb-8 border-b border-border last:border-0"
              >
                <div>
                  <p className="text-sm text-accent mb-2">{item.dates}</p>
                  <p className="text-base text-muted-foreground">{item.institution} • {item.location}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.degree}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
