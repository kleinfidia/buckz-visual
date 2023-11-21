import React from "react";
import Carding from "../component/Carding";
import { Smiley } from "../assets";
import Formz from "../component/Formz";

const Videos = () => {
  return (
    <div className=" w-full p-20 space-y-20 pt-60">
      <div className=" md:flex lg:flex space-x-10">
        <div className=" space-y-10">
          <p className=" font-extrabold text-5xl">BOOK A MINI SHOOT</p>
          <ol>
            <li>30 MINUTE SHOOT</li>
            <li>1 OUTFIT</li>
            <li>5 HI-RES RETOUCHED PHOTO</li>
          </ol>
          <button className=" border border-black  p-10">
            BOOK YOUR MINI SHOOT
          </button>
        </div>

        <Carding source={Smiley} />
      </div>
      <div className=" md:flex space-x-10">
        <p className=" md:w-1/3 font-bold text-xl">
          READY TO BRING YOUR VISION TO LIFE? WHETHER YOU'RE PLANNING A WEDDING,
          A FASHION SHOOT, OR A CREATIVE PROJECT, WE'RE HERE TO UNDERSTAND YOUR
          GOALS AND DISCUSS HOW WE CAN MAKE YOUR VISION A REALITY. DON'T WAIT,
          SEND IN YOUR INQUIRY AND LET'S CREATE SOMETHING EXTRAORDINARY
          TOGETHER.
        </p>
        <Formz />
      </div>
    </div>
  );
};

export default Videos;
