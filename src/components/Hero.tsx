import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import { resumeData } from "@/data/resume";

const Hero = () => {
  const { personal } = resumeData;
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img 
          src={heroPhoto} 
          alt={personal.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Text Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Years experience */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl font-bold"
          >
            <div className="mb-2">{personal.yearsExperience.start} → {personal.yearsExperience.end}</div>
            <div>{personal.yearsExperience.total}</div>
          </motion.div>

          {/* Center - Name and title */}
          <div className="md:col-span-2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight leading-none whitespace-pre-line">
                {personal.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {personal.title}, based in {personal.location}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-12 right-12 text-white/80 hover:text-white transition-colors cursor-pointer"
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
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-8 right-8 md:right-16 max-w-md text-right text-sm text-white/90 leading-relaxed"
      >
        "{personal.tagline}"
      </motion.div>
    </section>
  );
};

export default Hero;
