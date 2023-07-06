'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import { ImageData } from '@/constants/constants';

const ImageCarousel = ({
  className,
  images,
}: {
  className?: string;
  images: ImageData[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
    };

    startInterval(); // Start the interval initially

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear the interval when component unmounts
      }
    };
  }, [images]);

  const goToNextImage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Start the interval again
  };

  const goToPreviousImage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Start the interval again
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
