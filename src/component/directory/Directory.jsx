import React from 'react'
import Directoryitem from '../directoryitem/Directoryitem';
import "./directory.styles.scss"
import image from "../../assets/images/teewhy.jpg";
import image2 from "../../assets/images/teewhy2.jpg"
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route:"shop"
  },
  {
    id: 2,
    title: "JACKET",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route:"shop"
  },
  {
    id: 3,
    title: "SNEAKERS",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "WRISTWATCH",
    imageUrl:
      "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&w=300",
      route:"shop"
  },
  {
    id: 5,
    title: "MENS",
    imageUrl: image2,
    route:"shop"
  },
  {
    id: 6,
    title: "WOMENS",
    imageUrl: image,
    route:"shop"
  },

  {
    id: 7,
    title: "PERFUME",
    imageUrl:
      "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route:"shop"
  },

  {
    id: 7,
    title: "Shoes",
    imageUrl:
      "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route:"shop"
  },
];
const Directory = () => {
  
    return (
      <div className="directory-container">
        {categories.map((category) => (
          <Directoryitem key={category.id} category={category} />
        ))}
      </div>
    );
  };
  
  export default Directory; 