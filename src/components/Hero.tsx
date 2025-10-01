import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Years experience */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-xl font-bold"
          >
            <div className="text-accent mb-2">2018 → 2025</div>
            <div className="text-accent">7+ yrs exp.</div>
          </motion.div>

          {/* Center - Name and title */}
          <div className="md:col-span-2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 tracking-tight leading-none">
                THOMAS
                <br />
                MILLER CARR
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Logistics & Operations Specialist, based in Copenhagen
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-12 right-12 text-muted-foreground hover:text-accent transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.button>

      {/* Tagline - top right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-8 right-8 md:right-16 max-w-md text-right text-sm text-muted-foreground leading-relaxed"
      >
        "I believe in transforming complex supply chains into seamless experiences, 
        where strategic vision meets operational excellence."
      </motion.div>
    </section>
  );
};

export default Hero;
