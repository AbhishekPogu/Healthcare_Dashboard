import React from 'react';
import styles from './CalendarView.module.css';
import { calendarMonths } from '../../data/calendarData';

function CalendarView() {
  const currentMonth = calendarMonths[0]; 

  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <span className={styles.navArrow}>←</span>
        <h3>{currentMonth.name}</h3>
        <span className={styles.navArrow}>→</span>
      </div>
      <div className={styles.daysOfWeek}>
        {['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className={styles.dayName}>{day}</div>
        ))}
      </div>
      <div className={styles.calendarGrid}>
        {currentMonth.days.map((day) => (
          <div key={day.date} className={styles.calendarDay}>
            <div className={styles.dateNumber}>{day.date}</div>
            <div className={styles.appointments}>
              {day.appointments.map((appt, index) => (
                <span key={index} className={styles.appointmentTime}>{appt.time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.appointmentDetails}>
        {currentMonth.details.map((detail, index) => (
          <div key={index} className={styles.detailCard}>
            <div className={styles.detailIcon}></div> 
            <div className={styles.detailContent}>
              <p className={styles.detailTitle}>{detail.type}</p>
              <p className={styles.detailTime}>{detail.time}</p>
              <p className={styles.detailDoctor}>{detail.doctor}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;