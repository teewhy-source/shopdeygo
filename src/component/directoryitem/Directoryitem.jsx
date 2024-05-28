import "./directoryitem.styles.scss"
import {useNavigate} from "react-router-dom"
import React from 'react'

const  Directoryitem = ({category}) => {
    const {imageUrl,title,route} = category;
    const navigate = useNavigate()

   const navhandler = ()=>navigate(route) 
    return (
      <div  className="directory-item-container" onClick={navhandler} >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="body">
          <h2>{title}</h2>
          <p>shop now</p>
        </div>
      </div>
    );
  };

export default Directoryitem
