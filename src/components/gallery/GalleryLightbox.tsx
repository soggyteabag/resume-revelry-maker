import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const GalleryLightbox = ({ item, onClose }: GalleryLightboxProps) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-md"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row gap-6 bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0f172a]/80 hover:bg-accent text-slate-300 hover:text-white transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Image */}
          <div className="flex-1 min-h-[300px] md:min-h-[500px] relative overflow-hidden">
            <motion.img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-center p-6 md:p-8 md:w-80"
          >
            <span className="text-xs uppercase tracking-wider text-accent font-medium mb-2">
              {item.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {item.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
