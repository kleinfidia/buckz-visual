import React from "react";
import { Carding } from "../component";
import { Oneknee, Stylish, Young } from "../assets";

const Home = () => {
  return (
    <div className=" w-full p-20 space-y-20 pt-60">
      <div className=" md:flex lg:flex space-x-10">
        <Carding source={Young} />

        <div className=" md:w-1/3 sm:w-3/4  md:py-20">
          <p className=" font-extrabold text-5xl">PHOTO BY NEHEMY</p>
          <p className=" sm:text-lg md:text-xl font-serif ">
            VISUALS MATTER! Whether you’re leading a marketing campaign and
            seeking to put a team together or you’re looking for someone to
            document a special moment. Who you choose and how they execute
            matters! I’m Nehemy, a Miami based visual artist. Hopefully my
            portfolio is enough to help you decide whether I am the right
            creator for you and your vision.
          </p>
        </div>
      </div>
      <div className=" md:flex lg:flex space-x-10">
        <div className=" md:w-1/3 sm:w-3/4  md:py-20 ">
          <p className=" font-extrabold text-5xl">FASHION</p>
          <p className=" sm:text-lg md:text-xl font-serif ">
          Fashion photography holds a special place in my heart and is a
          significant focus of my extensive portfolio. It's where my passion
          truly shines through! I absolutely love immersing myself in the world
          of fashion, capturing the vibrant colors, creative sets, and exquisite
          attention to detail that people use to express their unique style.
          It's not just a profession for me; it's a genuine fascination with the
          art of self-expression. Let's collaborate and bring your fashion
          vision to life!
          </p>
        </div>
        <Carding source={Stylish} className=" order-first" />
      </div>
      <div className=" md:flex lg:flex space-x-10">
        <Carding source={Oneknee} />
        <div className=" md:w-1/3 sm:w-3/4  md:py-20">
          <p className=" font-extrabold text-5xl">STUDIO</p>
          <p className=" sm:text-lg md:text-xl font-serif ">
          Playing with light and shadows to create captivating artistic concepts
          brings me pure joy. Being able to create and capture a moment,
          emotion, or facials is something I take pride in.
          </p>.
        </div>
      </div>
    </div>
  );
};

export default Home;
