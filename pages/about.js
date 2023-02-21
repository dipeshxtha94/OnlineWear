import React, { useEffect, useState } from 'react'
import styles from "../styles/about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
       <h2 className={styles.h2}>Hi! We are Onlinewear</h2>
       <p className={styles.p}>Hey, You are in right place. We offers the best and quality products to fulfill your desire.</p>
       <img className={styles.img} src="/about.jpg" alt="" height={200} width={200} />
       </div>
  )
}

export default About