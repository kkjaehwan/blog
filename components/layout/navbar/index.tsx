import Link from 'next/link';
import styles from './style.module.scss';
import LogoIcon from '@/components/icons/logo';
import { site_default } from '@/constants/constants';
import SearchBar from '../searchbar';
export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={`${className} ${styles.component}`}>
      <div className={styles.logo_area}>
        <Link href="/" aria-label="Go back home">
          <LogoIcon className={styles.logo} />
        </Link>
      </div>
      {/* <div className={styles.searchbar_area}><SearchBar /></div> */}
      {site_default?.menu?.length ? (
        <ul className={styles.menu_area}>
          {site_default?.menu?.map((item) => (
            <li key={item.title}>
              <Link href={item.path} className={styles.menu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
