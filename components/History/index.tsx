import { HistoryBox } from '@/constants/constants';
import styles from './style.module.scss';

const History = ({
  className,
  history,
}: {
  className?: string;
  history: HistoryBox;
}) => {
  return (
    <div className={`${styles.history_box} ${className}`}>
      <div className={styles.title}>{history.title}</div>
      <div className={styles.histories}>
        {history.list.map((history, index) => {
          return (
            <div key={index} className={styles.history_area}>
              <div className={styles.history}>
                <div className={styles.history_pariod}>{history.period}</div>
                <div className={styles.history_info}>
                  <div className={styles.name}>{history.name}</div>
                  <div className={styles.duty}>{history.duty}</div>
                  <div className={styles.tags}>
                    {history.tags.map((tag, index) => {
                      return (
                        <span key={index}>
                          {tag}
                          {index !== history.tags.length - 1 && ',\u00a0'}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default History;
