import gemImage from '@/assets/gallery/gem.png';
import miniaturesImage from '@/assets/gallery/miniatures.png';
import smackTheLipImage from '@/assets/gallery/smack-the-lip.png';
import partyWaveImage from '@/assets/gallery/party-wave.png';
import surfingTheDigitalImage from '@/assets/gallery/surfing-the-digital.png';

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
    title: 'Gem',
    description: 'A stunning amethyst geode revealing nature\'s crystalline beauty.',
    imageUrl: gemImage,
    category: 'AI Art',
    size: 'medium',
  },
  {
    id: '2',
    title: 'Miniatures',
    description: 'Miniature surfers navigating dramatic ocean swells.',
    imageUrl: miniaturesImage,
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '3',
    title: 'Smack the Lip',
    description: 'Tiny figures riding the crest of a powerful wave.',
    imageUrl: smackTheLipImage,
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '4',
    title: 'Party Wave',
    description: 'A vibrant group of miniature surfers sharing the perfect wave.',
    imageUrl: partyWaveImage,
    category: 'AI Art',
    size: 'large',
  },
  {
    id: '5',
    title: 'Surfing the Digital',
    description: 'Surfers gliding through abstract digital waves in a futuristic dreamscape.',
    imageUrl: surfingTheDigitalImage,
    category: 'AI Art',
    size: 'small',
  },
];
