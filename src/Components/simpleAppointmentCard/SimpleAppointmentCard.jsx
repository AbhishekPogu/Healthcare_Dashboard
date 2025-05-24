import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className={styles.simpleCard}>
      <div className={styles.cardIcon}>✓</div> 
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <span className={styles.cardTime}>{time}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;