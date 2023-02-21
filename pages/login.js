import React from 'react'
import styles from "../styles/login.module.css"
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <form className={styles.form}>
        <h1 className={styles.h1}>Login Form</h1>
        <label htmlFor='username' className={styles.usernamelabel}>Username:</label>
        <input type="text" className={styles.username} required /><br />
        <label htmlFor="password" className={styles.passwordlabel}>Password:</label>
        <input type="password" className={styles.password} required/><br />
        <div className={styles.div}>
        <input type="checkbox" /> <p className={styles.rememberpassword}>Remember Me</p>  
        <Link href={'/forgetpassword'}><p className={styles.forgetpassword}>Forget Password?</p></Link></div>
        <input type="submit" className={styles.login} value="Login" />
        <Link href="/signup"><p className={styles.p}>New to Onlienwer? Signup</p></Link>
      </form>
    </div>
  )
}

export default Login