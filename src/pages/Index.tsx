import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-3 border-accent border-t-transparent rounded-full mx-auto mb-4"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-sm"
      >
        Loading...
      </motion.p>
    </motion.div>
  </motion.div>
);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <ScrollProgress />
      <BackToTop />
      
      <motion.main 
        className="min-h-screen"
        variants={pageVariants}
        initial="initial"
        animate={!isLoading ? "animate" : "initial"}
      >
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Awards />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
};

export default Index;
