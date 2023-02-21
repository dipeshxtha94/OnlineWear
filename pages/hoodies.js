import React from 'react'
import Link from 'next/link'
import styles from '../styles/hoodie.module.css'
import Image from 'next/image'

const Hoodies = () => {
  return (
    <div className={styles.container}>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>Hoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>Hoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>Hoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>Hoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>Hoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
      <Link href={'/product/wear-the-hoodie'}><div className={styles.items}>
        <Image className={styles.img} src="/hoodie.jpg" width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>Black Hoodies</h2>
        <h3 className={styles.h3}>HoodiesHoodies</h3>
        <h4 className={styles.h4}>रु 400</h4>
        <h4 className={styles.h4}>XL X XLL</h4></div>
      </div></Link>
    </div>
  )
}

export default Hoodies