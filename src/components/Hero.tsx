import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroPhoto from "@/assets/hero-photo.jpg";
import { resumeData } from "@/data/resume";

const Hero = () => {
  const { personal } = resumeData;
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Gallery Navigation - Hamburger Menu */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link
          to="/gallery"
          aria-label="View Gallery"
          className="group flex items-center gap-3 p-3 rounded-lg bg-secondary/60 backdrop-blur-sm border border-border/30 hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col gap-1"
          >
            <span className="block w-5 h-0.5 bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
            <span className="block w-5 h-0.5 bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
            <span className="block w-5 h-0.5 bg-muted-foreground group-hover:bg-accent transition-colors duration-300" />
          </motion.div>
          <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300 hidden sm:block">
            Gallery
          </span>
        </Link>
      </motion.div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10 animate-gradient-shift" />
      
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroPhoto} 
          alt={personal.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Animated Particles/Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Years experience */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-foreground text-xl font-bold"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-2 flex items-center gap-2"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="h-0.5 bg-accent"
              />
              {personal.yearsExperience.start} → {personal.yearsExperience.end}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-accent"
            >
              {personal.yearsExperience.total}
            </motion.div>
          </motion.div>

          {/* Center - Name and title */}
          <div className="md:col-span-2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight leading-none"
              >
                {personal.name.split('\n').map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                {personal.title}, based in{" "}
                <span className="text-accent font-medium">{personal.location}</span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with pulse animation */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-12 right-12 text-muted-foreground hover:text-accent transition-colors cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm group-hover:text-accent transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
