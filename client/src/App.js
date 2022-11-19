import React from "react";
import "./assets/styles.css";
import Navbar from "./components/Navbar";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Services from "./components/Services";

import Footer from "./components/Footer";
import UploadVideo from "./components/UploadVideo";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Services />

      <Footer />

      {/* <Router>
        <Route path="/" element={<Home />} />

        <Route exact path="/services" element={<Services />} />
        <Route exact path="/Features" element={<Features />} />
        <Route exact path="/uploadvideo" element={<UploadVideo />} />
      </Router> */}
    </>
  );
}
