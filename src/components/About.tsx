import { motion } from "framer-motion";

const About = () => {
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
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                With over five years of experience spanning aviation, construction, and environmental sectors, 
                I specialize in delivering end-to-end logistics and operations solutions that drive measurable results. 
                Recently relocated to Copenhagen, I bring a unique blend of international client management expertise, 
                vendor negotiation skills, and a proven track record of optimizing complex supply chains.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                My approach combines strategic thinking with hands-on execution, whether managing 500+ aviation accounts, 
                coordinating high-profile construction projects for prestigious clients, or implementing IT and cloud 
                systems to enhance operational efficiency. I thrive on building global partnerships and turning 
                logistical challenges into competitive advantages.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
