import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/HOME/Home";
import Navigation from "./component/routes/Navigationbar/Navigation";
import Signin from "./component/routes/Signin/Signin";




const Shop = () => {
  return <div>I AM THE SHOP COMPONENT</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
        {/* NEXTED ROUTING */}
      </Route>
    </Routes>
  );
};

export default App;
