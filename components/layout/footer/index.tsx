import Link from 'next/link';
import styles from './style.module.scss';
import LogoIcon from '@/components/icons/logo';
import { site_default } from '@/constants/constants';
import SocialList from '@/components/SocialList';
export default function Footer({ className }: { className?: string }) {
  return (
    <div className={`${className} ${styles.component}`}>
      <div className={styles.logo_area}>
        <Link href="/" aria-label="Go back home">
          <LogoIcon className={styles.logo} />
        </Link>
      </div>
      <div className={styles.copyright_area}>{site_default.copyright}</div>
      <div className={styles.socials_area}>
        <SocialList list={site_default?.socialList} />
      </div>
    </div>
  );
}
