import React, { useState } from 'react';
import styles from "../styles/navbar.module.css"


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        UNITE
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        Sponsor Us
      </button>
        <iframe className={styles.donation} src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
      </div>
    </div>
  );
}

export default Navbar;
