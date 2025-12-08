import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume";
import { RippleButton } from "@/components/ui/ripple-button";

const Contact = () => {
  const { contact, contactCTA } = resumeData;

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">07.</span> CONTACT
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              {[
                { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
                { icon: MapPin, label: "Location", value: contact.location, href: null }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0 border border-border group-hover:border-accent/50 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-accent transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {contact.linkedin && (
                  <motion.a
                    href={contact.linkedin}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                  </motion.a>
                )}
                {contact.github && (
                  <motion.a
                    href={contact.github}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-accent" />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 40px -10px hsl(var(--accent) / 0.15)"
              }}
              className="bg-card rounded-lg p-8 border border-border flex flex-col justify-center hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{contactCTA.heading}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {contactCTA.description}
              </p>
              <RippleButton 
                variant="accent"
                size="lg"
                onClick={() => window.location.href = `mailto:${contact.email}`}
                className="w-full rounded-full py-6"
              >
                Send Me an Email
                <Mail className="w-5 h-5 ml-2" />
              </RippleButton>
            </motion.div>
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
            className="bg-card rounded-lg p-8 border border-border text-center hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">{contactCTA.downloadCVHeading}</h3>
            <p className="text-muted-foreground mb-6">
              {contactCTA.downloadCVDescription}
            </p>
            <RippleButton 
              onClick={() => {
                console.log('CV download requested');
              }}
              className="rounded-full px-8 py-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV (PDF)
            </RippleButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
