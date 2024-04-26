import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/HOME/Home";
import Navigation from "./component/routes/Navigationbar/Navigation";
import Authentication from "./component/routes/authentication/Authentication";
import Shop from "./component/routes/shop/Shop";





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        {/* NEXTED ROUTING */}
      </Route>
    </Routes>
  );
};

export default App;
