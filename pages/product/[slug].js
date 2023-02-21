import Head from 'next/head';
import { useRouter } from 'next/router'
import styles from '../../styles/slug.module.css'
import { AiFillStar } from 'react-icons/ai' 
import { useState } from 'react';
import mongoose from 'mongoose';
import Product from '../../models/product';

const Post = ({addToCart, product, variants}) => {
  //console.log(product, variants)
  const router = useRouter();
  const { slug } = router.query;

  const [pin, setPin]= useState();
  const [service, setService]= useState()

  const checkPin=async()=>{
    const data= await fetch('http://localhost:3000/api/pincode')
    const pins= await data.json()

    if(pins.includes(parseInt(pin))){
        setService(true)
    }
    else{
      setService(false)
    }
  }
  /*radio button validation */
  const handleClick=()=>{
    var valid= false;
    var a= document.getElementsByName('size');
    /*if(a== undefined){
      alert("**Please select anyone color!")
      return false;
    }*/
    //console.log(a)
    for(var i=0; i<a.length; i++){
       if(a[i].checked==true){
        valid= true
        break
       }
    }
    if(valid){
      addToCart(slug, 1, product.title, size, color, 100)
    }
    else{
      alert("**Please select anyone color!")
      return false;
    }
    
  }

  const [color, setColor]= useState(product.color)
  const [size, setSize]= useState(product.size)



 const refresh=(newcolor, newsize)=>{
  const white= document.getElementById("white")
  const red= document.getElementById("red")
  const green= document.getElementById("green")
  const blue= document.getElementById("blue")
  const black= document.getElementById("black")

  if(white.checked==true){
    let url =`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location= url
    white.setAttribute('checked', '')
  }
  else if(red.checked==true){
    let url =`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location= url
    red.checked= true
  }
  else if(green.checked==true){
    let url =`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location= url
    green.checked= true
  }
  else if(blue.checked==true){
    let url =`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location= url
    blue.checked= true
  }
  else if(black.checked==true){
    let url =`http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location= url
    black.checked= true
  }
  else{
    alert("please select one color")
    return false
  }
    
 }

 

  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
       <div className={styles.container}>
        <img style={{margin: "auto"}} src={product.img} width='250 px' height='300 px' alt="" />
        <div className={styles.section}>
        <h3 className={styles.h3}>{product.category}</h3>
        <h1 className={styles.h1}>{product.title} ({product.size}/{product.color})</h1>
        <div className={styles.review}>
        <span className={styles.checked}><AiFillStar /></span>
        <span className={styles.checked}><AiFillStar /></span>
        <span className={styles.checked}><AiFillStar /></span>
        <span className={styles.checked}><AiFillStar /></span>
        <span className={styles.star}><AiFillStar /></span>
        <span className={styles.span}>3 Review</span></div>
        <p>{product.desc}</p>
        <div className={styles.color}>
          <h1 className={styles.colorname}>Color:</h1>
            {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size) && <><input onClick={()=>{refresh('white', size)}} type='radio' name='color' value='white' id='white' />white </>}
            {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <><input onClick={()=>{refresh('red', size)}} type='radio' name='color' value='red' id='red' />red </>}
            {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) && <><input onClick={()=>{refresh('green', size)}} type='radio' name='green' value='red' id='green' />green </>}
            {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <><input onClick={()=>{refresh('blue', size)}} type='radio' name='color' value='blue' id='blue' />blue </>}
            {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) && <><input onClick={()=>{refresh('black', size)}} type='radio' name='color' value='black' id='black' />black </>}
          <p htmlFor='size' className={styles.size}>size:</p>
          <select value={size} onChange={(e)=>{refreshVariant(color, e.target.value)}} className={styles.sizebox}>
            {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
            {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
            {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
            {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
            {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option> }           
          </select>
        </div>
        <div className={styles.price}>
          <p>रु {product.price}</p>
          <button className={styles.buynow}>Buy Now</button>
          <button onClick={handleClick} className={styles.addtocart}>Add to cart</button>
        </div>
        <div className="pincode">
          <input onChange={(e)=>{setPin(e.target.value)}} className={styles.input} type="text" />
          <button onClick={checkPin} className={styles.check}>Check</button>
          {(!service && service!=null) && <div>**pincode is not valid</div> }
          {(service && service!=null) && <div>pincode is valid</div> }
        </div></div>
      </div>
     </>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  } 
  let product= await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title })
  let colorSizeSlug= {}
  for(let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size]= { slug: item.slug }
    }
    else{
      colorSizeSlug[item.color]= {}
      colorSizeSlug[item.color][item.size]= { slug: item.slug }
    }
  }
 
  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) } // will be passed to the page component as props
  }
}

export default Post