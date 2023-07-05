import styles from './style.module.scss';
import ImageCarousel from '../ImageCarousel/imageCardList';
import { Blog } from '@/constants/constants';

const BlogCard = ({ className, blog }: { className?: string; blog: Blog }) => {
  return (
    <div className={`${styles.component} ${className}`}>
      <div className={styles.image_area}>
        <ImageCarousel className={styles.carousel} images={blog.images} />
      </div>
      <div className={styles.text_area}>
        <div className={styles.tags}>{blog.tags}</div>
        <div className={styles.date}>{blog.date}</div>
        <div className={styles.title}>{blog.title}</div>
        <div className={styles.brief}>{blog.brief}</div>
      </div>
    </div>
  );
};

export default BlogCard;
