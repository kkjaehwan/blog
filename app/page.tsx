import ImageCardList from '@/components/ImageCardList/imageCardList';
import styles from './page.module.css';
import { site_default } from '@/constants/constants';
import PrismComponent from '@/components/PrismComponent';
import { PageSEO } from '@/components/layout/SEO/SEO';

export default function Home() {
  const code = `function greet(name: string) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Prism.js");`;
  const context = 'This site spec';
  return (
    <>
      <PageSEO
        title={site_default.siteMetadata.title}
        description={site_default.siteMetadata.description}
      />
      <div className={styles.main}>
        <ImageCardList imageCardList={site_default.siteIntroList} />
      </div>
    </>
  );
}
