import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Awards = () => {
  const { awards, additionalExperience } = resumeData;
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
          
          <div className="space-y-12 mb-16">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div>
                  <p className="text-sm text-accent mb-2">{award.year}</p>
                  <h3 className="text-xl font-bold text-foreground">{award.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Additional Experience</h3>
            <ul className="space-y-3">
              {additionalExperience.map((experience, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-accent mr-3 mt-1">→</span>
                  <span className="text-muted-foreground">{experience}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
