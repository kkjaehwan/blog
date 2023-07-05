'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './style.module.scss';
import LogoIcon from '@/components/icons/logo';
import { site_default } from '@/constants/constants';
import SearchIcon from '@/components/icons/search';
export default function SearchBar() {
  const searchParams = useSearchParams();
  return (
    <form className={styles.component}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
      />
      <div className={styles.searchIcon}>
        <SearchIcon className={styles.search} />
      </div>
    </form>
  );
}
