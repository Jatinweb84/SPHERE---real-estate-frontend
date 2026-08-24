import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router";
import SmoothScroll from "./Components/SmoothScroll";
import PropertyCategories from "./Components/PropertyCategory";

function App() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
      <PropertyCategories />
    </>
  );
}

export default App;
