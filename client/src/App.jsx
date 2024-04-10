import React from "react";
import Navbar from "./components/Navbar";
import Branding from "./components/Branding";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="text-3xl text-center">
      <div className="bg-home">
        <Navbar />
        <Hero />
      </div>
      <Branding />
      <Products />
    </div>
  );
}

export default App;
