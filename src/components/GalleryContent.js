import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1020/1000/600/',
    thumbnail: 'https://picsum.photos/id/1020/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1080/1000/600/',
    thumbnail: 'https://picsum.photos/id/1080/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1040/1000/600/',
    thumbnail: 'https://picsum.photos/id/1040/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1050/1000/600/',
    thumbnail: 'https://picsum.photos/id/1050/250/150/',
  },
  {
    original: 'https://picsum.photos/id/231/1000/600/',
    thumbnail: 'https://picsum.photos/id/231/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1023/1000/600/',
    thumbnail: 'https://picsum.photos/id/1023/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1035/1000/600/',
    thumbnail: 'https://picsum.photos/id/1035/250/150/',
  },
];

class GalleryContent extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryContent;