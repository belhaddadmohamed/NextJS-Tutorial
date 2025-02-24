'use client'
import React from 'react'

const Button = () => {
  return (
    <button className='btn btn-primary m-4' onClick={() => console.log('clicked')}>Add to cart</button>
  )
}

export default Button