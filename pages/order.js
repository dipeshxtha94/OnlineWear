import React from 'react'
import styles from '../styles/order.module.css'

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h3 className={styles.onlinewear}>ONLINEWEAR.COM</h3>
        <h1 className={styles.orderid}>Order Id: #65873</h1>
        <p className={styles.p}>Your order has been successfully placed</p>
        <table>
          <thead>
            <tr className={styles.tr}>
            <th className={styles.th}>Item Description</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Item Total</th>
          </tr>
          </thead>
          <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>Wear the code</td>
            <td className={styles.td}>1</td>
            <td className={styles.td}>रु 500</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Wear the code</td>
            <td className={styles.td}>1</td>
            <td className={styles.td}>रु 500</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Wear the code</td>
            <td className={styles.td}>1</td>
            <td className={styles.td}>रु 500</td>
          </tr>
          </tbody>
        </table>
        <p className={styles.subtotal}>Subtotal रु1000</p>
        <button className={styles.trackorder}>Track Order</button>
      </div>
      <div className={styles.section2}>
        <img src="/tshirt.jpg" alt="" height={200} width={200} />
      </div>
    </div>
  )
}

export default Order