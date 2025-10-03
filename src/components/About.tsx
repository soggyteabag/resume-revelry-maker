import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const About = () => {
  const { about } = resumeData;
  
  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-foreground flex items-center gap-4">
              <span className="text-accent">01.</span> ABOUT
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {about.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
