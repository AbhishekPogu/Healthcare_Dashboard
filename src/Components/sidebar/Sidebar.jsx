import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigationData';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <h3 className={styles.sectionTitle}>General</h3>
        <ul className={styles.navList}>
          {navigationLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                <span className={styles.icon}>{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
    </aside>
  );
}

export default Sidebar;