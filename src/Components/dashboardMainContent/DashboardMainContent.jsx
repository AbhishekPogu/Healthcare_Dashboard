import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from '../DashboardOverview/DashboardOverview.jsx';
import CalendarView from '../CalendarView/CalendarView.jsx';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule.jsx';
import ActivityFeed from '../activityFeed/ActivityFeed.jsx';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMainContent}>
      <div className={styles.p}>
      <div>
      <h2 className={styles.dashboardTitle}>Dashboard</h2></div>
      <div className={styles.thisWeekDropdown}>
        <span >This Week</span>
      </div>
      </div>

      <div className={styles.contentGrid}>
        <DashboardOverview />
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMainContent;