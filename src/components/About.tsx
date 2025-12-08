import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const About = () => {
  const { about } = resumeData;
  
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-foreground flex items-center gap-4"
            >
              <span className="text-accent">01.</span> ABOUT
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              {about.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  variants={itemVariants}
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
