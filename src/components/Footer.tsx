import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Footer = () => {
  const { personal } = resumeData;
  const fullName = personal.name.replace(/\n/g, ' ');
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm"
            >
              © {new Date().getFullYear()} {fullName}. All rights reserved.
            </motion.p>
            <motion.button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-accent hover:text-accent/80 transition-colors text-sm font-medium group flex items-center gap-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top 
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↑
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
