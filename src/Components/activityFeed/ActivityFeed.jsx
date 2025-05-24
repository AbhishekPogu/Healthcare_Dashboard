import React from 'react';
import styles from './ActivityFeed.module.css';
import { activityData } from '../../data/healthData';

function ActivityFeed() {
  return (
    <div className={styles.activityFeed}>
      <h3 className={styles.sectionTitle}>Activity</h3>
      <p className={styles.appointmentCount}>{activityData.appointmentsThisWeek} appointments on this week</p>
      <div className={styles.chartContainer}>
        {activityData.chartBars.map((bar, index) => (
          <div key={index} className={styles.chartBarWrapper}>
            <div className={styles.chartBar} style={{ height: bar.height }}></div>
            <span className={styles.chartDay}>{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;