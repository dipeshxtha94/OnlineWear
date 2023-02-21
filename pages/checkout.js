import React from 'react'
import styles from '../styles/checkout.module.css'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

const Checkout = ({removeFromCart, addToCart, cart, subtotal}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Checkout</h1>
      <h2 className={styles.h2}>1. Delivery Details</h2>
      <div className={styles.form}>
      <label htmlFor="name" className={styles.namelabel}>Name</label><br /> <input className={styles.name} type="text" name="name" id='name' /><br />
      <label className={styles.emailabel} htmlFor="email">Email</label><br /> <input className={styles.email} type="email" name='email' id='email' /><br />
      <div><label htmlFor="address">Address</label> <textarea className={styles.address} name="address" id="address" cols="40" rows="8"></textarea> </div>
      <label htmlFor="phone">Phone</label><br /> <input className={styles.phone} type="tel" name='phone' id='phone' /> <br />
      <label htmlFor="city">City</label><br /> <input className={styles.city} type="text" name='city' id='city' /><br />
      <label htmlFor="state">State</label><br /> <input className={styles.state} type="text" name='state' id='state' /><br />
      <label htmlFor="pincode">Pincode</label><br /> <input className={styles.pincode} type="text" name='pincode' id='pincode' /></div>
      <div className={styles.review}>
        <h2 className={styles.h2}>2. Review items & pay</h2>
        <div id="sidecart" className={styles.sidecart}>
       <ol className={styles.items} >
        {Object.keys(cart).length==0 && <p className={styles.empty}>Nothing is in cart</p> }
           {Object.keys(cart).map((k)=>{return <li className={styles.li} key={k}>
            <span className={styles.cartname}>{cart[k].name}</span>
            <span className={styles.plus} onClick={()=>{addToCart(k, 1, cart[k].name, cart[k].size, cart[k].variant, cart[k].price)}}><FaPlusCircle /></span> <span className={styles.number}>{cart[k].qty}</span> <span id="minus" className={styles.minus} onClick={()=>{removeFromCart(k, 1, cart[k].name, cart[k].size, cart[k].variant, cart[k].price)}}><FaMinusCircle /></span>
          </li>})}
        </ol>
        <h2 className={styles.subtotal}>Subtotal: {subtotal}</h2>
        
      </div><button className={styles.buynow}>Pay {subtotal}</button>
      </div>
    </div>
  )
}

export default Checkout