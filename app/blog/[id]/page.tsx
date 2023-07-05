'use client';
import styles from './page.module.scss';
import { site_default } from '@/constants/constants';
import BlogCard from '@/components/BlogCard';
import ImageCarousel from '@/components/ImageCarousel/imageCardList';
import { Suspense } from 'react';
export default function Page({ params }: { params: { id: string } }) {
  const blog = site_default?.blog?.find(
    (blog) => blog.id === params.id.toString()
  );
  return (
    <div className={`${styles.component}`}>
      {blog && (
        <>
          <div className={styles.image_area}>
            <ImageCarousel className={styles.carousel} images={blog.images} />
          </div>
          <div className={styles.text_area}>
            <div className={styles.header_area}>
              <div className={styles.tags}>{blog.tags}</div>
              <div className={styles.date}>{blog.date}</div>
              <div className={styles.title}>{blog.title}</div>
              <div className={styles.brief}>{blog.brief}</div>
            </div>
            {blog.articles.map((article, index) => {
              return (
                <div key={index} className={styles.article}>
                  <div className={styles.title}>{article.title}</div>
                  {article.images.length > 0 && (
                    <div className={styles.image_area}>
                      <ImageCarousel
                        className={styles.carousel}
                        images={article.images}
                      />
                    </div>
                  )}
                  <div className={styles.content}>{article.content}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
