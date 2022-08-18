import React, {useState} from 'react';
import styles from "../styles/header.module.css"

const Sec1 = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className={styles.hugetext}>
      UNITE.
      </div>
      <div className={styles.calendar}>
      THIS OCTOBER 21 - 23, 2022
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        Donate Us
      </button>
        <iframe className={styles.donation} src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
      </div>
    </div>
  );
}

export default Sec1;
