import React from "react";
import "./assets/styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Paths from "./Routes/Paths";

export default function App() {
  return (
    <>
      <Navbar />
      <Paths />
      <Footer />
    </>
  );
}
