import ImageCardList from '@/components/ImageCardList/imageCardList';
import styles from './page.module.css';
import { site_default } from '@/constants/constants';
import PrismComponent from '@/components/PrismComponent';

export default function Home() {
  const code = `function greet(name: string) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Prism.js");`;
  const context = 'This site spec';
  return (
    <div className={styles.main}>
      <ImageCardList imageCardList={site_default.siteIntroList} />
    </div>
  );
}
