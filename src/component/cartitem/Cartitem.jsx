import React from 'react'
import "./cartitem.styles.scss"
const Cartitem = ({cartitem}) => {
    const {title, quantity, image,price} =cartitem
  return (
    <div className='cart-item-container'>
    <img src={image} alt={title} />
    <div className='item-details'>
      <span className='name'>{title}</span>
      <span className='price'>
        <strong>
          {quantity} x {price}
        </strong>
      </span>
    </div>
  </div>
  )
}

export default Cartitem
