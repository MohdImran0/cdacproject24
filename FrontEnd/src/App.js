import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";

export default function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}
