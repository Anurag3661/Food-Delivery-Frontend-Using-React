import React, { useState } from "react";
import Navbar from "./components/navbarr/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopupp from "./components/LoginPopupp/LoginPopupp";


const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
   {showLogin?<LoginPopupp setShowLogin={setShowLogin}></LoginPopupp>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
};

export default App;
