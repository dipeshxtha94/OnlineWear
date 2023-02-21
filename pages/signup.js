import React, { useState } from 'react'
import styles from "../styles/contact.module.css"
import Link from "next/link"

const Signup = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [firstname, setFirstname]= useState("")
  const [lastname, setLastname]= useState("")
  const [allele, setAllEle]= useState([])
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    var newEle= {email:email, password:password}
    setAllEle([...allele, newEle])
    setEmail("")
    setPassword("")
    setFirstname("")
    setLastname("")
    alert("You have Signed in!")}
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} action="">
      <h1 className={styles.h1}>Signup</h1><br/>
        <label className={styles.firstnamelabel} htmlFor="firstnamelabel">Firstname:</label><input type="text" className={styles.firstname} value={firstname} autoComplete="off" onChange={(e)=>{setFirstname(e.target.value)}} required/><label className={styles.lastnamelabel} htmlFor="lastname">Lastname:</label><input type="text" className={styles.lastname} value={lastname} autoComplete="off" onChange={(e)=>{setLastname(e.target.value)}} required /><br/>
        <label className={styles.emaillabel} htmlFor='email'>E-mail:</label> <input type='email' className={styles.email} value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="off" required />
         <label className={styles.passwordlabel} htmlFor="password">Password:</label> <input type='password' className={styles.password} value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off" required/><br/>
        <input type='submit' className={styles.submit} value='Signup'/>
        <Link href="/login"><p className={styles.p}>Have Already an Account? login</p></Link>
      </form>
    </div>
  )
}

export default Signup