import { useState } from "react";
import { motion } from "framer-motion";
import GalleryNav from "@/components/gallery/GalleryNav";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { galleryItems, GalleryItem } from "@/data/gallery";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <GalleryNav to="/" label="Home" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 px-6 md:px-12 bg-[#0f172a]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm uppercase tracking-widest font-medium"
          >
            Creative Works
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mt-2"
          >
            AI Art Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-400 mt-4 max-w-xl text-lg"
          >
            A curated collection of AI-generated artwork and creative experiments.
          </motion.p>
        </div>
      </motion.header>

      {/* Gallery Grid */}
      <main className="px-4 md:px-8 pb-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid items={galleryItems} onItemClick={handleItemClick} />
        </div>
      </main>

      {/* Lightbox */}
      {selectedItem && (
        <GalleryLightbox item={selectedItem} onClose={handleCloseLightbox} />
      )}
    </div>
  );
};

export default Gallery;
