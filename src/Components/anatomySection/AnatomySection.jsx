import React from 'react';
import styles from './AnatomySection.module.css';
import { anatomicalHealthData } from '../../data/healthData';
import { IoMdQrScanner } from "react-icons/io";
import { GiLeg } from "react-icons/gi";
import bodyImage from '../../assets/icons/body.jpg';
function AnatomySection() {
  const healthyHeart = anatomicalHealthData.find(item => item.part === 'Healthy Heart');
  const healthyLeg = anatomicalHealthData.find(item => item.part === 'Healthy Leg');

  return (
    <div className={styles.anatomySection}>
      <div className={styles.bodyImageContainer}>
        
        <img src={bodyImage} alt="Human Body" className={styles.bodyImage} /> 

        {healthyHeart && (
          <div className={styles.heartIndicator} style={{ backgroundColor: healthyHeart.color }}>
            <span className={styles.indicatorIcon}>❤️</span>
            <span className={styles.indicatorText}>{healthyHeart.part}</span>
            
          </div>
        )}
        {healthyLeg && (
          <div className={styles.legIndicator} style={{ backgroundColor: healthyLeg.color }}>
      
               <span className={styles.indicatorTexts}>{<  GiLeg />}{healthyLeg.part}</span>
            <span className={styles.indicatorIcons}><IoMdQrScanner /></span>
         
          </div>
        )}

       
      </div>
    </div>
  );
}

export default AnatomySection;