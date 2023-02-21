import React from 'react'
import styles from '../styles/tshirt.module.css'
import Link from 'next/link'
import Product from '../models/product'
import mongoose from 'mongoose'


const Tshirt = ({products}) => {
  return (
    <div className={styles.container}>
      {Object.keys(products).map((item)=>{
        return<Link key={products[item]._id} passHref={true} href={`/product/${products[item].slug}`}><div className={styles.items}>
        <img className={styles.img} src={products[item].img} width={180} height={230} />
        <div className={styles.desc}>
        <h2 className={styles.h2}>{products[item].title}</h2>
        <h3 className={styles.h3}>{products[item].category}</h3>
        <h4 className={styles.h4}>रु {products[item].price}</h4>
        <span className={styles.h4}>
          {products[item].size.includes("S") && <p className={styles.sizeitem}>S</p>}
          {products[item].size.includes("M") && <p className={styles.sizeitem}>M</p>}
          {products[item].size.includes("L") && <p className={styles.sizeitem}>L</p>}
          {products[item].size.includes("XL") && <p className={styles.sizeitem}>XL</p>}
          {products[item].size.includes("XXL") && <p className={styles.sizeitem}>XXL</p>}
          </span>
          <div className={styles.color}>
          {products[item].color.includes("red") && <button className={styles.red}></button>}
          {products[item].color.includes("white") && <button className={styles.white}></button>}
          {products[item].color.includes("blue") && <button className={styles.blue}></button>}
          {products[item].color.includes("green") && <button className={styles.green}></button>}
          {products[item].color.includes("black") && <button className={styles.black}></button>}
          </div>
          </div>

      </div></Link>})}
      
    </div>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  } 
  let products= await Product.find({category: "tshirt"})
  let tshirts={}
  for(let item of products){
     if(item.title in tshirts){
       if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
        tshirts[item.title].color.push(item.color)
       }
       if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
        tshirts[item.title].size.push(item.size)
       }
     }
     else{
        tshirts[item.title]= JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
           tshirts[item.title].color= [item.color]
           tshirts[item.title].size= [item.size]
        }
     }
  }
  return {
    props: {products: JSON.parse(JSON.stringify(tshirts))} // will be passed to the page component as props
  }
}
export default Tshirt