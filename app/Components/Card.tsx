import React from 'react'
import Button from './Button'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
        <div>Card</div>
        <hr />
        <Button />
    </div>
    
  )
}

export default Card