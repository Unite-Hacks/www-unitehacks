import React, {useRef, useState, useEffect} from 'react';
import styles from "../styles/header.module.css"

const Sec1 = () => {
  const unite = "🆄🅽🅸🆃🅴";
  console.log(unite);
  const [isActive, setIsActive] = useState(false);
  const donateRef = useRef();


  useEffect(() => {
    let handler = (event) => {
      if (!donateRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handler )

    return () => document.removeEventListener('mousedown', handler);
  })

  return (
    <div>
      <div className={styles.hugetext}>
      UNITE.
      </div>
      <div className={styles.boxContainer}>
      <button className={styles.calendar}>
      THIS FALL 2022
      </button>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        Donate
      </button>
        <iframe ref={donateRef} className={styles.donation} src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
      </div>
      </div>
    </div>
  ); 
}

export default Sec1;
