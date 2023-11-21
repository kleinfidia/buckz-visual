import React from "react";
import Olive from "../assets/olive.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full h-40 flex-col space-y-6 flex items-center justify-center bg-black fixed">
      <div className=" flex ">
        <Link to="/">
          <img src={Olive} alt="olive" className=" w-10 h-8 " />
        </Link>
      </div>
      <div className=" text-white flex space-x-5 ">
        <Link to="/Galleries">Galleries</Link>
        <Link to="/Videos">Services</Link>
        <Link to="/Testimonials">Testimonials</Link>
        <Link to="/About">About</Link>
        <Link to="/Blog">Blog</Link>
        
        
      </div>
    </div>
  );
};

export default Navbar;
