import React, { useRef, useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import {AiOutlineShoppingCart, AiFillCloseSquare} from 'react-icons/ai'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import {RiAccountPinCircleFill} from 'react-icons/ri'

const Navbar = ({clearCart, cart, addToCart, removeFromCart,subtotal}) => {

  const handleCart=()=>{
     document.getElementById('sidecart').style.display="block";
  }

  const handleClose=()=>{
  document.getElementById('sidecart').style.display="none";
  }
   const handleConsole=()=>{
   }
  
  return (
    <div className={styles.container}>
       <div className={styles.content}>
      <Image className={styles.img} src="/favicon.ico" width={30} height={30} /> 
      <Link href={'/'}><a><h1 className={styles.h1}>Onlinewear</h1></a></Link>
     </div>
     <div className={styles.nav}>
        <Link href={"/tshirt"}><a className={styles.a}>Tshirts</a></Link>
        <Link href={"/hoodies"}><a className={styles.a}>Hoodies</a></Link>
        <Link href={"/contact"}><a className={styles.a}>Contact</a></Link>
        <Link href={"/about"}><a className={styles.a}>About</a></Link>
        </div>
      <div className={styles.loginsignup}>
      <span className={styles.cart} onClick={handleCart}><AiOutlineShoppingCart /></span>
      <Link href={'/login'}><a className={styles.login}><RiAccountPinCircleFill/></a></Link>
      </div>
      <div id="sidecart" className={styles.sidecart}>
        {Object.keys(cart).length!==0? handleCart(): handleConsole()}
        <h1 className={styles.h1sidecart}>Shopping Cart</h1>
        <span className={styles.close} onClick={handleClose}><AiFillCloseSquare /></span>
       <ol className={styles.items} >
        {Object.keys(cart).length==0 && <p className={styles.empty}>Nothing is in cart</p> }
           {Object.keys(cart).map((k)=>{return <li className={styles.li} key={k}>
            <span className={styles.name}>{cart[k].name}</span>
            <span className={styles.plusminus}>
            <span className={styles.plus} onClick={()=>{addToCart(k, 1, cart[k].name, cart[k].size, cart[k].variant, cart[k].price)}}><FaPlusCircle /></span> <span className={styles.number}>{cart[k].qty}</span> <span id="minus" className={styles.minus} onClick={()=>{removeFromCart(k, 1, cart[k].name, cart[k].size, cart[k].variant, cart[k].price)}}><FaMinusCircle /></span></span>
          </li>})}
        </ol>
        <h2 className={styles.subtotal}>Subtotal: {subtotal}</h2>
        <Link href='/checkout'><button className={styles.checkout}>Checkout</button></Link>
        <button onClick={clearCart} className={styles.clearcart}>ClearCart</button>
      </div>
    </div>
  )
}

export default Navbar