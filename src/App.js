// App.js
import Navbar from "./view/nav/NavBar";
import React from 'react';
import Home from "./view/home/Home";
import Footer from "./view/footer/Footer";
import Product from "./view/product/Product";
import Pricing from "./view/pricing/Pricing";
import Blog from "./view/blog/blog";
import Contact from './view/contact/contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
