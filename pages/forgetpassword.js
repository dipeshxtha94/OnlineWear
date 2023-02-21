import React from 'react'
import styles from '../styles/forgetpassword.module.css'
import Link from 'next/link'

const ForgetPassword = () => {
  return (
    <div>
      <form className={styles.form}>
        <h1 className={styles.h1}>Forget Password</h1>
        <label htmlFor='username' className={styles.usernamelabel}>Username:</label>
        <input type="text" className={styles.username} required /><br />
        <input type="submit" className={styles.login} value="Continue" />
        <Link href="/login"><p className={styles.p}>Return? to Login</p></Link>
      </form>
    </div>
  )
}

export default ForgetPassword