'use client';
import styles from './page.module.scss';
import { site_default } from '@/constants/constants';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Page() {
  const pathname = usePathname();
  return (
    <div className={styles.component}>
      <div className={styles.title}>Blog Posts</div>

      <div className={styles.recent_post_area}>
        {site_default && site_default.blog && site_default.blog.length > 0 && (
          <Link href={`${pathname}/${site_default.blog[0].id}`}>
            <BlogCard blog={site_default.blog[0]} />
          </Link>
        )}
      </div>
      <div className={styles.posts_area}>
        {site_default?.blog?.map((blog, index) => {
          return (
            <Link key={index} href={`${pathname}/${blog.id}`}>
              <BlogCard blog={blog} className={styles.post} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
