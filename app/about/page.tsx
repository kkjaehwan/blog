import Image from 'next/image';
import styles from './page.module.scss';
import SocialList from '@/components/SocialList';
import { site_default } from '@/constants/constants';
import History from '@/components/History';
export default function Home() {
  return (
    <div className={styles.component}>
      <div className={styles.profile_img}>
        <Image
          src={site_default?.portrait_url}
          alt="portrait"
          width={600}
          height={600}
        />
      </div>
      <div className={styles.author_intro_area}>
        <div className={styles.name}>{site_default?.author.name}</div>
        <div className={styles.brief}>{site_default?.author.brief}</div>
      </div>
      <div className={styles.socials_area}>
        <SocialList list={site_default?.socialList} />
      </div>
      {site_default?.historyList.map((history, index) => {
        return <History key={index} history={history}></History>;
      })}
    </div>
  );
}
