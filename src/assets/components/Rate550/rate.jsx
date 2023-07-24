import React from 'react';
import styles from './style.module.css';

const Rate550 = () => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.unlimited}>Безлимитный 550</div>
      <div className={styles.price}>550 руб/мин</div>
      <div className={styles.speed}>до 100Мб/сек</div>
      <div className={styles.traffic}>Объем включенного трафика неограничен</div>
    </div>
  );
}

export default Rate550;