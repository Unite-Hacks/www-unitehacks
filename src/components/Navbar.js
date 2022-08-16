import React from 'react';
import styles from "../styles/navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        UNITE
      </div>
      <div className={styles.buttonWrapper}>
      <button className={styles.button}>
        Sponsor Us
      </button>
      </div>
    </div>
  );
}

export default Navbar;
