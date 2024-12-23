
import './App.css'; // Ensure your styles are properly linked
import React from "react";
import { Routes, Route } from "react-router-dom";  // Import necessary components from react-router-dom
import Signup from "./Components/Signup";
import Login from "./Components/Login"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Layout from "./Components/Layout";
import Gallery from "./Pages/Gallery";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import WCintegration from "./Components/WCintegration";
import Explore from "./Pages/Explore";
 

function App() {
  return (
    <div className="App">      
      {/* Header Component */}
      <Header />
      
      {/* WCintegration Component */}
      <WCintegration />
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />           {/* Home Page */}
        <Route path="about" element={<About />} />     {/* About Page */}
        <Route path="contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="blog" element={<Blog />} />       {/* Blog Page */}
        <Route path="layout" element={<Layout />} />   {/* Layout Page */}
        <Route path="gallery" element={<Gallery />} /> {/* Gallery Page */}
        <Route path="service" element={<Service />} /> {/* Service Page */}
        <Route path="explore" element={<Explore />} /> {/* Explore Page */}
        
      
        
        {/* Fallback route for 404 - Page Not Found */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* 404 Page */}
      </Routes>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
