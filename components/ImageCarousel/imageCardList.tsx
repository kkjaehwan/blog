'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { ImageData } from '@/constants/constants';

const ImageCarousel = ({
  className,
  images,
}: {
  className?: string;
  images: ImageData[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const goToNextImage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`${styles.images_area} ${className}`}>
      <div className={styles.images}>
        {images?.map((image, imageIndex) => (
          <Image
            key={imageIndex}
            src={image.src}
            alt={`Image ${imageIndex + 1}`}
            width="768"
            height="512"
            className={`${currentIndex === imageIndex ? styles.active : null}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className={styles.carousel_buttons}>
          <div onClick={goToPreviousImage}>{`<`}</div>
          <div onClick={goToNextImage}>{`>`}</div>
        </div>
      )}
    </div>
  );
};
export default ImageCarousel;
