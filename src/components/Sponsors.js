import React from 'react';
import styles from "../styles/sponsor.module.css"
import wolframe from "../assets/wolframe.svg"
import vercel from "../assets/vercel.svg"
import xyz from "../assets/xyz.svg"
const Sponsors = () => {
  return (
    <div>
       <h2 style={{color: 'white'}}className={styles.heading}>Sponsors</h2>
       <div className={styles.sponsorGrid }>
       <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://vercel.com/" target="_blank">
                <img src={vercel} draggable="false" alt="vercel" width="200"></img>
              </a>
            </div>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://www.wolframalpha.com/" target="_blank">
                <img src={wolframe} draggable="false" alt="wolframe" width="318"></img>
              </a>
            </div>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://gen.xyz/" target="_blank">
                <img src={xyz} draggable="false" alt="xyz" width="200"></img>
              </a>
            </div>
            </div>
    </div>
  );
}

export default Sponsors;
