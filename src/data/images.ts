export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export const images: GalleryImage[] = [
  {
    id: '1',
    src: '/images/mountain.svg',
    alt: 'Mountain landscape at sunset',
    title: 'Mountain Sunset',
  },
  {
    id: '2',
    src: '/images/ocean.svg',
    alt: 'Ocean waves on a sandy beach',
    title: 'Ocean Waves',
  },
  {
    id: '3',
    src: '/images/forest.svg',
    alt: 'Dense forest with tall trees',
    title: 'Deep Forest',
  },
  {
    id: '4',
    src: '/images/desert.svg',
    alt: 'Desert dunes under clear sky',
    title: 'Desert Dunes',
  },
  {
    id: '5',
    src: '/images/city.svg',
    alt: 'City skyline at night',
    title: 'City Lights',
  },
  {
    id: '6',
    src: '/images/lake.svg',
    alt: 'Calm lake reflecting mountains',
    title: 'Mirror Lake',
  },
];
