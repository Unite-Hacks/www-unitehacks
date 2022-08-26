import React, { useRef, useState } from 'react';
import styles from "../styles/header.module.css"
import arrow from "../assets/Arrow1.svg"
import uparrow from "../assets/UpArrow.svg"
import plane from "../assets/plane.svg"
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import planemob from "../assets/planemob.svg"

const Header = () => {
  const { width, height } = useWindowSize()
  const [show, setShow] = useState(false)
  const confettiRef = useRef(null)

  const handleShow = toggle => {
    setShow(toggle)
  }
  return (
    <div className={styles.container}>
          <Confetti
          ref={confettiRef}
          recycle={show}
          width={width}
          height={height}
  />
 
      <div>
      <div className={styles.planemob}>
        <img src={planemob} alt={planemob} draggable="false" onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}/>
        </div>
      <div className={styles.plane}>
        
      <img src={plane} alt={plane} draggable="false" onMouseEnter={() => handleShow(true)}
      onMouseLeave={() => handleShow(false)}/>
      </div>
        <span><img src={arrow} alt={arrow} draggable="false" className={styles.arrow}/></span>
        <span className={styles.header}>Come together and</span>
        <span className={styles.align}><img src={uparrow} alt={arrow} draggable="false" className={styles.arrow}/></span>
      </div>
    </div>
  );
}

export default Header;
