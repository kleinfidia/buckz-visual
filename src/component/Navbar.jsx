import React from "react";
import Olive from "../assets/olive.png";

const Navbar = () => {
  return (
    <div className=" w-full h-40 flex-col space-y-6 flex items-center justify-center bg-black">
      <div className=" flex ">
        <img src={Olive} alt="olive" className=" w-10 h-8 " />
      </div>
      <div className=" text-white flex space-x-5 ">
        <p>Galleries</p>
        <p>Videos</p>
        <p>Testimonials</p>
        <p>About</p>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
