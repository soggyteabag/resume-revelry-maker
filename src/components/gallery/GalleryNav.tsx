import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface GalleryNavProps {
  to: string;
  label: string;
}

const GalleryNav = ({ to, label }: GalleryNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        to={to}
        aria-label={label}
        className="group flex items-center gap-3 p-3 rounded-lg bg-secondary/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 hover:bg-secondary transition-all duration-300"
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
          {label}
        </span>
      </Link>
    </motion.div>
  );
};

export default GalleryNav;
