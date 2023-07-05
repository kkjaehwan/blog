import ImageCardList from '@/components/ImageCardList/imageCardList';
import styles from './page.module.css';
import { site_default } from '@/constants/constants';

export default function Home() {
  return (
    <div className={styles.main}>
      <ImageCardList imageCardList={site_default.siteIntroList} />
    </div>
  );
}
