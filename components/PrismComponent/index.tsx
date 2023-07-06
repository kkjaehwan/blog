'use client';
import { useEffect } from 'react';
import styles from './style.module.scss';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
const PrismComponent = ({
  className,
  language,
  code,
}: {
  className: string;
  language: string;
  code: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`${styles.component} ${className}`}>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default PrismComponent;
