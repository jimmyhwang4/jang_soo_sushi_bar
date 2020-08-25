import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/sashimi-combo-large-1000.jpg',
    thumbnail: '/sashimi-combo-large-250.jpg',
    description: 'sashimi combo (large)',
  },
  {
    original: '/sashimi-combo-medium-1000.jpg',
    thumbnail: '/sashimi-combo-medium-250.jpg',
    description: 'sashimi combo (medium)',
  },
  {
    original: '/sashimi-combo-small-1000.jpg',
    thumbnail: '/sashimi-combo-small-250.jpg',
    description: 'sashimi combo (small)',
  },
  {
    original: '/sashimi-combo-mini-1000.jpg',
    thumbnail: '/sashimi-combo-mini-250.jpg',
    description: 'sashimi combo (mini)',
  },
  {
    original: '/halibut-combo-medium-1000.jpg',
    thumbnail: '/halibut-combo-medium-250.jpg',
    description: 'live halibut special (medium)',
  },
  {
    original: '/bento1-1000.jpg',
    thumbnail: '/bento1-250.jpg',
    description: 'chicken teriyaki special bento box',
  },
  {
    original: '/sushi-combo-14pc-1000.jpg',
    thumbnail: '/sushi-combo-14pc-250.jpg',
    description: 'sushi combo (medium)',
  },
  {
    original: '/chirashi-bowl-1000.jpg',
    thumbnail: '/chirashi-bowl-250.jpg',
    description: 'chirashi bowl',
  },
  {
    original: '/bar-1000.jpg',
    thumbnail: '/bar-250.jpg',
  },
  {
    original: '/front-1000.jpg',
    thumbnail: '/front-250.jpg',
  },
  {
    original: '/back-1000.jpg',
    thumbnail: '/back-250.jpg',
  },
  {
    original: '/restaurant-1000.jpg',
    thumbnail: '/restaurant-250.jpg',
  },
];

class GalleryContent extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryContent;