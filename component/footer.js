import React from 'react';
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import Link from'next/link';

const Footer = () => {
  return (
    <div className={styles.section}>
   <div className={styles.container}>
     <div className={styles.content}>
      <Image className={styles.img} src="/favicon.ico" width={30} height={30} /> 
      <Link href={'/'}><a><h1 className={styles.h1}>Onlinewear</h1></a></Link>
      <p>We have your every wishes design!</p>
     </div>
     <div className={styles.content}>
      <h4>CATEGORIES</h4>
      <ul>
        <li>First Link</li>
        <li>Second Link</li>
        <li>Third Link</li>
        <li>Fourth Link</li>
      </ul>
     </div>
     <div className={styles.content}>
     <h4>CATEGORIES</h4>
      <ul>
        <li>First Link</li>
        <li>Second Link</li>
        <li>Third Link</li>
        <li>Fourth Link</li>
      </ul>
     </div>
     <div className={styles.content}>
     <h4>CATEGORIES</h4>
      <ul>
        <li>First Link</li>
        <li>Second Link</li>
        <li>Third Link</li>
        <li>Fourth Link</li>
      </ul>
     </div>
   </div>
   <p className={styles.onlinewear}>© 2020 Onlinewear- All Rights Reserved</p>
   </div>
  )
}

export default Footer