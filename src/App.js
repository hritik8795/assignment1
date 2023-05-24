import React from "react";
import { Routes, Route } from "react-router-dom";
import Refer from "./FreindsRefer/Refer";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refer" element={<Refer />} />
      </Routes>
    </div>
  );
};

export default App;
