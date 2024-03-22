import React from "react";
import Directory from "../../../component/directory/Directory"
import image from "../../../assets/images/teewhy.jpg";
import image2 from "../../../assets/images/teewhy2.jpg";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "JACKET",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
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
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: image2,
    },
    {
      id: 6,
      title: "WOMENS",
      imageUrl: image,
    },

    {
      id: 7,
      title: "PERFUME",
      imageUrl:
        "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: 7,
      title: "Shoes",
      imageUrl:
        "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <Directory categories={categories}/>
  );
};

export default Home;
