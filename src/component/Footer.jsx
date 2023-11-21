import React from "react";
import { Loginput } from "../login";

const Footer = () => {
  return (
    <div className=" bg-gray-500 flex flex-col items-center justify-center py-10 sm:pl-5">
      <div className=" space-x-9 sm:flex md:flex-row lg:flex-row" >
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-bold text-4xl "> GET 15% OFF</p>
          <p>
            Get 15% off your first booking and access to future EXCLUSIVE
            discounts and promotions by subscribing to our email list!
          </p>
          <div className=" flex flex-col space-y-4 ">
            <Loginput placeHolder={"First Name"} type="email" />
            <Loginput placeHolder={"Last Name"} type="email" />
            <Loginput placeHolder={"Email Address"} type="email" />
            <button className=" border border-yellow-500 m-3"   > sign up</button>
          </div>
        </div>
        <div className=" flex space-x-3 font-bold">
            <p >FOLLOW
                <ul>instagram</ul>
                <ul>facebook</ul>
                <ul>tiktok</ul>
            </p>
            <p>
              <ul>Contact us</ul>
              <ul>Privacy policy</ul>
              <ul>Terms and Conditions</ul>
            </p>
        </div>
      </div>
      <div className=" text-yellow-400">
        <p className=" font-bold sm:text-lg md:text-2xl lg:text-8xl">BUCKZVISUALS</p>
      </div>
    </div>
  );
};

export default Footer;
