export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  size: 'small' | 'medium' | 'large';
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Neural Dreamscape',
    description: 'An exploration of AI-generated abstract landscapes merging organic and digital forms.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '2',
    title: 'Digital Synthesis',
    description: 'Procedural generation meets artistic vision in this cyberpunk-inspired piece.',
    imageUrl: 'https://images.unsplash.com/photo-1633186710895-309db2eca9e4?w=800&q=80',
    category: 'AI Art',
    size: 'medium',
  },
  {
    id: '3',
    title: 'Chromatic Flow',
    description: 'Fluid dynamics simulation rendered with vibrant color gradients.',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&q=80',
    category: 'Generative',
    size: 'small',
  },
  {
    id: '4',
    title: 'Quantum Echoes',
    description: 'Abstract visualization of quantum wave functions in artistic form.',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    category: 'AI Art',
    size: 'medium',
  },
  {
    id: '5',
    title: 'Synthetic Nature',
    description: 'AI-imagined flora that bridges the gap between natural and artificial.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80',
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '6',
    title: 'Data Streams',
    description: 'Visualization of network traffic patterns transformed into art.',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    category: 'Generative',
    size: 'small',
  },
  {
    id: '7',
    title: 'Ethereal Geometry',
    description: 'Sacred geometry meets machine learning in this luminous composition.',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    category: 'AI Art',
    size: 'medium',
  },
  {
    id: '8',
    title: 'Cybernetic Dawn',
    description: 'A futuristic sunrise rendered through neural network interpretation.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '9',
    title: 'Fractal Bloom',
    description: 'Recursive patterns emerging from mathematical beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80',
    category: 'Generative',
    size: 'small',
  },
  {
    id: '10',
    title: 'Neon Horizons',
    description: 'Retro-futuristic landscapes imagined by artificial intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
    category: 'AI Art',
    size: 'medium',
  },
  {
    id: '11',
    title: 'Organic Circuits',
    description: 'The intersection of biological systems and electronic pathways.',
    imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80',
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '12',
    title: 'Prismatic Void',
    description: 'Light and darkness dance in this abstract exploration of contrast.',
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
    category: 'Generative',
    size: 'small',
  },
];
