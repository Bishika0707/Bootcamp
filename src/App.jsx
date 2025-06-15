import React from "react";
import Heading from "./components/Heading";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <Heading/>
    <p className="m-4">this is a paragraph
    </p>
    <div className="text-red-400">App</div>
    <Heading/>
    <Login/> */}
    </>
  );
};
export default App;
