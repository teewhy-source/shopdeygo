import React from 'react'
import "./cartitem.styles.scss"
const Cartitem = ({cartitem}) => {
    const {name, quantity, imageUrl,price} =cartitem
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={name} />
    <div className='item-details'>
      <span className='name'>{name}</span>
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
