import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/bento1-1000.jpg',
    thumbnail: '/bento1-250.jpg',
    description: 'chicken teriyaki special bento box',
  },
  {
    original: '/bento2-1000.jpg',
    thumbnail: '/bento2-250.jpg',
    description: 'salmon teriyaki special bento box',
  },
  {
    original: '/dish1-1000.jpg',
    thumbnail: '/dish1-250.jpg',
    description: 'assorted sushi',
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