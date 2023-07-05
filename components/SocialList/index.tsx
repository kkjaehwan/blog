'use client';
import Link from 'next/link';
import styles from './style.module.scss';
import { Menu, site_default } from '@/constants/constants';

const SocialList = ({
  className,
  list,
}: {
  className?: string;
  list: Menu[];
}) => {
  return (
    <div className={`${styles.component} ${className}`}>
      {list?.map((item) => (
        <div key={item.title} className={styles.menu}>
          {item.type === 'link' && (
            <Link href={item.path} target="_blank">
              {item.icon}
            </Link>
          )}
          {item.type === 'email' && (
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open(`mailto:${item.path}`, '_blank');
              }}
            >
              {item.icon}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default SocialList;
