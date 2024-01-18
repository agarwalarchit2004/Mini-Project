import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Routes from "./Context/Routes";
import Divider from "./components/divider";
import Caro from "./components/Caro";
import Collection from "./components/Collection";

function App() {
  const data = JSON.parse(localStorage.getItem("userDetails"));
  if (!data) {
    localStorage.setItem("userDetails", JSON.stringify({}));
    console.log(JSON.parse(localStorage.getItem("userDetails")));
  }

  return (
    <>
      <Navbar />
      <Routes />
      <Divider />
      {/* <Collection /> */}
     
      <Footer/>
    </>
  );
}

export default App;
