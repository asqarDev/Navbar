import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React from "react";

import "./Fa/css/all.min.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./Components/js/Home";
import {About} from "./Components/js/About";
import Service from "./Components/js/Service";
import Contact from "./Components/js/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
