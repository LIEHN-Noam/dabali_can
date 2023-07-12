import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Dates from "../components/Dates";
import Footer from "../components/Footer";
import Food from "../components/Food";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Dates />
      <Food />
      <Footer />
    </div>
  );
};

export default Home;
