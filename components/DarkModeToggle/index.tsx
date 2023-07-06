'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentMode = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentMode);
  }, [darkMode]);
  useEffect(() => {
    setDarkMode(
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false
    );
  }, []);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.component}>
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        onClick={handleToggle}
      />
    </div>
  );
};

export default DarkModeToggle;
