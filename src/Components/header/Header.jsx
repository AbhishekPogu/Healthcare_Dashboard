import React from 'react';
import styles from './Header.module.css';
import userAvatar from '../../assets/icons/avatar.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Healthcare.</h1>
      </div>
      <div className={styles.searchBar}>
     
        <span className={styles.searchIcon}>🔍</span> 
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.userInfo}>
    
        <span className={styles.icon}>🔔</span>
        <img src={userAvatar} alt="User Avatar" className={styles.avatar} /> 
        <span>John Doe</span>
        
        <span className={styles.addIcon}>➕</span>
      </div>
    </header>
  );
}

export default Header;