import React from 'react';
import styles from "../styles/sponsor.module.css"
import wolframe from "../assets/wolframe.svg"

const Sponsors = () => {
  return (
    <div>
       <h2 style={{color: 'white'}}className={styles.heading}>Sponsors</h2>
       <div className={styles.sponsorGrid }>
       <div className={styles.sponsor}>
              <a rel="noreferrer" href="https://www.wolframalpha.com/" target="_blank">
                <img src={wolframe} alt="wolframe" width="318"></img>
              </a>
            </div>
            </div>
    </div>
  );
}

export default Sponsors;
