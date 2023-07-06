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

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [distance, setDistance] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartX(e.clientX);
    setDistance(0);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (dragging) {
      const currentX = e.clientX;
      const dx = currentX - startX;
      setDistance(dx);
    }
  };

  const onDragEnd = (event: { preventDefault: () => void }) => {
    if (distance < 0) {
      goToNextImage(event);
    } else if (distance > 0) {
      goToNextImage(event);
    }
    setDragging(false);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartX(e.touches[0].clientX);
    setDistance(0);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (dragging) {
      const currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      setDistance(dx);
    }
  };

  const onTouchEnd = (event: { preventDefault: () => void }) => {
    if (distance < 0) {
      goToNextImage(event);
    } else if (distance > 0) {
      goToNextImage(event);
    }
    setDragging(false);
  };
  return (
    <div
      className={`${styles.images_area} ${className}`}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
