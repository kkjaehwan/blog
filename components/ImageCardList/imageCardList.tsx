import Image from 'next/image';
import styles from './style.module.scss';
import ImageCarousel from '../ImageCarousel/imageCardList';
import Card from '../Card/Card';
import { ImageCard } from '@/constants/constants';

const ImageCardList = ({ imageCardList }: { imageCardList: ImageCard[] }) => {
  return (
    <div className={styles.component}>
      {imageCardList?.map((imageCard: ImageCard, index: number) => (
        <div
          className={`${styles.imageCard} ${
            index % 2 == 1 && styles.reverseCard
          }`}
          key={index}
        >
          <Card card={imageCard.card} />
          <ImageCarousel
            className={styles.carousel}
            images={imageCard.images}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCardList;
