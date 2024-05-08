import React from 'react'
import "./cartitem.styles.scss"
const Cartitem = ({cartitem}) => {
    const {title, quantity} =cartitem
  return (
    <div className='ty'>
      <h5>{title}</h5>
      <span>{quantity}</span>
    </div>
  )
}

export default Cartitem
