import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className=" w-full p-20 space-y-20 pt-60 items-center justify-center flex">
      <div className=" md:flex lg:flex space-x-10 ">
        <div >
          <p className=" font-bold text-3xl">CAPTURING LOVE APRIL 2023</p>
          <p>
            Read more <FaArrowCircleDown className=" animate-bounce" />
          </p>
        </div>
        <div>
          <p className=" font-bold text-3xl">PHOTOGRAPHY 101: LIGHTING</p>
          <p>
            Read more <FaArrowCircleDown className=" animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
