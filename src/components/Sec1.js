import React, {useState} from 'react';
import styles from "../styles/header.module.css"

const Sec1 = () => {
  const unite = "🆄🅽🅸🆃🅴";
  console.log(unite);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className={styles.hugetext}>
      UNITE.
      </div>
      <div className={styles.boxContainer}>
      <div className={styles.calendar}>
      THIS FALL 2022
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        Donate
      </button>
        <iframe className={styles.donation} src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
      </div>
      </div>
    </div>
  ); 
}

export default Sec1;
