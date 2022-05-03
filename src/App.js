import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React, { useEffect, useState } from "react";

import "./Fa/css/all.min.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./Components/js/Home";
import { About } from "./Components/js/About";
import Service from "./Components/js/Service";
import Contact from "./Components/js/Contact";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import Paginations from "./Components/js/Paginations";

function App() {
  const [loader, setLoader] = useState(true);
  const [getData, setGetData] = useState([]);
  const getComment = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setGetData(res.data);
        setLoader(false);
      })
      .catch((res) => {
        console.log("error");
      });
  };
  useEffect(() => {
    getComment();
  });
  return (
    <BrowserRouter>
      {/* {loader ? (
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About getData={getData} />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )} */}
      <Paginations />
    </BrowserRouter>
  );
}

export default App;
