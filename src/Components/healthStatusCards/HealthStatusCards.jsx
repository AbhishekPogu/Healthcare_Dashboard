
import React from 'react';
import styles from './HealthStatusCards.module.css';

import checkIcon from '../../assets/icons/checkIcon.jpeg';
import crossIcon from '../../assets/icons/crossIcon.jpeg';
import booIcon from '../../assets/icons/booIcon.jpeg'
const getStatusIcon = (status) => {
  switch (status) {
    case 'healthy':
   
      return <img src={crossIcon} alt="Healthy status" className={styles.statusIconImage} />;
    case 'issue':
   
      return <img src={checkIcon} alt="Issue status" className={styles.statusIconImage} />;
   case 'warning':
     
      return <img src={booIcon} alt="warning status" className={styles.statusIconImage} />;
  }
};

function HealthStatusCards({ part, status, date }) {

  const statusColor = status === 'healthy' ? 'var(--green-healthy)' : 'var(--red-issue)';
  const iconElement = getStatusIcon(status); 

  return (
    <div className={styles.healthCard} style={{ '--status-color': statusColor }}>
      <div className={styles.cardHeader}>
  
        <span className={styles.cardIconContainer}>
          {iconElement}
        </span>
        <h4 className={styles.cardTitle}>{part}</h4>
      </div>
      <p className={styles.cardDate}>{date}</p>
      <div className={styles.detailsButton}>
        Details <span className={styles.arrow}>→</span>
      </div>
    </div>
  );
}

export default HealthStatusCards;