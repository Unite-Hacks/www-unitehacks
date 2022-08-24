import React from 'react';
import styles from "../styles/sponsor.module.css"
import wolframe from "../assets/wolframe.svg"
import desmos from "../assets/desmos.svg"
import echo3d from "../assets/echo3d.svg"
const Sponsors = () => {
  return (
    <div>
       <h2 style={{color: 'white'}}className={styles.heading}>Sponsors</h2>
       <div className={styles.sponsorGrid }>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://www.desmos.com" target="_blank">
                <img src={desmos} alt="desmos" width="200"></img>
              </a>
            </div>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://www.wolframalpha.com/" target="_blank">
                <img src={wolframe} alt="wolframe" width="318"></img>
              </a>
            </div>
            <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://www.echo3d.co/" target="_blank">
                <img src={echo3d} alt="echo" width="200"></img>
              </a>
            </div>
            </div>
    </div>
  );
}

export default Sponsors;
