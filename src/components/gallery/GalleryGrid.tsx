import { motion } from "framer-motion";
import { useState } from "react";
import { GalleryItem } from "@/data/gallery";

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

const sizeClasses = {
  small: 'row-span-1',
  medium: 'row-span-2',
  large: 'row-span-3',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const GalleryGrid = ({ items, onItemClick }: GalleryGridProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="mb-2 md:mb-3 break-inside-avoid"
        >
          <motion.button
            onClick={() => onItemClick(item)}
            className="relative w-full overflow-hidden rounded-lg group cursor-pointer block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {/* Loading skeleton */}
            {!loadedImages.has(item.id) && (
              <div className="absolute inset-0 bg-secondary animate-pulse" />
            )}

            {/* Image */}
            <motion.img
              src={item.imageUrl}
              alt={item.title}
              className={`w-full h-auto object-cover transition-all duration-500 ${
                loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(item.id)}
              style={{
                minHeight: item.size === 'large' ? '400px' : item.size === 'medium' ? '280px' : '180px',
              }}
            />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end justify-start p-4"
            >
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-accent font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
