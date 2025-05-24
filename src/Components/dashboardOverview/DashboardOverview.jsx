import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import { anatomicalHealthData } from '../../data/healthData'; 

function DashboardOverview() {
  const lungsData = anatomicalHealthData.find(item => item.part === 'Lungs');
  const teethData = anatomicalHealthData.find(item => item.part === 'Teeth');
  const boneData = anatomicalHealthData.find(item => item.part === 'Bone');

  return (
    <div className={styles.dashboardOverview}>
      <AnatomySection />
      <div className={styles.healthStatusCardsContainer}>
        {lungsData && <HealthStatusCards {...lungsData} />}
        {teethData && <HealthStatusCards {...teethData} />}
        {boneData && <HealthStatusCards {...boneData} />}
      </div>
    </div>
  );
}

export default DashboardOverview;