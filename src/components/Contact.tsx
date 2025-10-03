import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume";

const Contact = () => {
  const { contact, contactCTA } = resumeData;
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
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0 border border-border">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0 border border-border">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center flex-shrink-0 border border-border">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">{contact.location}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {contact.linkedin && (
                  <motion.a
                    href={contact.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                  </motion.a>
                )}
                {contact.github && (
                  <motion.a
                    href={contact.github}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:border-accent transition-colors"
                  >
                    <Github className="w-5 h-5 text-accent" />
                  </motion.a>
                )}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{contactCTA.heading}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {contactCTA.description}
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = `mailto:${contact.email}`}
                className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Me an Email
                <Mail className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 border border-border text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">{contactCTA.downloadCVHeading}</h3>
            <p className="text-muted-foreground mb-6">
              {contactCTA.downloadCVDescription}
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                console.log('CV download requested');
              }}
              className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
