import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      {" "}
      <header className="bg-black py-3">
        <h1 className="text-white text-center">Your Fashion Partner</h1>
      </header>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
};

export default Home;
