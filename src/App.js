import React from "react";
import "./index.css";
import Home from "./routes/Home";


import { Route, Routes } from "react-router-dom";
import DbXpress from "./routes/DbXpress";
import Produits from "./routes/Produits";
import Can from "./routes/Can"

function App() {
  return (
    <>
      <Routes>
        <Route path="/dabali_can" element={<Home />} />
        <Route path="/dabali_xpress" element={<DbXpress />}/>
        <Route path="/produits" element={<Produits/>}/>
        <Route path="/can_xpress" element={<Can/>}/>
      </Routes>
    </>
  );
}

export default App;
