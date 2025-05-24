import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard.jsx';
import { upcomingAppointments } from '../../data/upcomingAppointmentsData.jsx';

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingSchedule}>
      <h3 className={styles.sectionTitle}>The Upcoming Schedule</h3>
      {upcomingAppointments.map((daySchedule) => (
        <div key={daySchedule.id} className={styles.daySection}>
          <p className={styles.dayLabel}>{daySchedule.day}</p>
          <div className={styles.appointmentList}>
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;