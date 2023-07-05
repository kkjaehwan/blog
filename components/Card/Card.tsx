import styles from './style.module.scss';

interface Button {
  title: string;
  link: string;
}

export interface CardData {
  header: string;
  title: string;
  content: string;
  buttons?: Button[];
}

const Card = ({ className, card }: { className?: string; card: CardData }) => {
  return (
    <div className={`${styles.card_area} ${className}`}>
      <div className={styles.header}>{card.header}</div>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.content}>{card.content}</div>
      {/* <ul className={styles.buttons}>
    {imageCard.buttons.map((button, buttonIndex) => (
      <li key={buttonIndex}>
        <a href={button.link}>{button.title}</a>
      </li>
    ))}
  </ul> */}
    </div>
  );
};
export default Card;
