import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/NavBar/NavBar";
import React from "react";
import '../global.css';
const WithNavbar = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithNavbar;
