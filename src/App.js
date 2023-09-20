import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs"; 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestaurantDetail from "./Components/RestaurantDetail";

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/RestaurantDetail/:id" element={<RestaurantDetail/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
