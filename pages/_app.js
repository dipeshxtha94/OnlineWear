import '../styles/globals.css'
import Footer from '../component/footer'
import Navbar from '../component/navbar';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps, handleCart }) {
const [cart, setCart] = useState({})
const [subtotal, setSubtotal]= useState(0)

const saveCart=(mycart)=>{
  localStorage.setItem('cart', JSON.stringify(mycart))
  let subt=0
  let keys= Object.keys(mycart)
  for(let i=0; i<keys.length; i++){
    //console.log(keys)
    subt += mycart[keys[i]].qty * mycart[keys[i]].price
  }
  setSubtotal(subt)
}

const clearCart=()=>{
  setCart({})
  saveCart({})
}

useEffect(()=>{
  try {
     if(localStorage.getItem('cart')){
    setCart(JSON.parse(localStorage.getItem('cart')))
    saveCart(JSON.parse(localStorage.getItem('cart')))
  }
  } catch (error) {
    console.error(error)
    localStorage.clear()
  }
},[])

const addToCart=(itemcode, qty, name, size, variant, price)=>{
  let newcart= cart
  if(itemcode in cart){
    newcart[itemcode].qty= cart[itemcode].qty + qty
  }
  else{
    newcart[itemcode]= {qty:1, name, size, variant, price}
  }
  setCart(newcart)
  saveCart(newcart)
}

const removeFromCar=(itemcode, qty, name, size, variant, price)=>{
  let newcart= cart
  if(itemcode in cart){
    newcart[itemcode].qty= cart[itemcode].qty-qty
  }
  if(cart[itemcode].qty<=0){
    delete newcart[itemcode]
  }
  setCart(newcart)
  saveCart(newcart)
  }

  return<>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCar} saveCart={saveCart} clearCart={clearCart} subtotal={subtotal} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCar} saveCart={saveCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} />
  <Footer />
  </> 
}

export default MyApp
