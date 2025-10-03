import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Footer = () => {
  const { personal } = resumeData;
  const fullName = personal.name.replace(/\n/g, ' ');
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {fullName}. All rights reserved.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
