import "./categoryitems.styles.scss"

import React from 'react'

const Categoryitem = ({category}) => {
    const {imageUrl,title} = category;
  return (
    <div  className='category-container'>
    <div 
    className='background-image'
     style={{ backgroundImage:`url(${imageUrl})`
     }}
     />
     <div className='category-body-container'>
      <h2>{title}</h2>
      <p>SHOP NOW</p>
      </div>
      </div>
  )
}

export default Categoryitem
