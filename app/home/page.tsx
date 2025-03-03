import React from 'react'
import styles from './home.module.css'

const home = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to my blog</h1>
      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>
    </div>
  )
}

export default home