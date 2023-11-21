import React from "react";
import { useState } from "react";

const Formz = () => {
  const [isclicked, setisclicked] = useState(false);

  const handlebuttonclick = () => {
    setisclicked(true);
  };
  return (
    <form>
      <p>Name</p>
      <div className=" space-x-3">
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
      </div>
      <p>
        Email<p className=" text-sm">(required)</p>
      </p>
      <div>
        <input type="email" className=" w-full" />
        <label>
          <input type="checkbox" />
          sign up for updates
        </label>
      </div>
      <p>Phone</p>
      <div>
        <input type="number" className=" w-full" />
      </div>
      <p>What services are you interested in?</p>

      <div>
        <label>
          <input type="checkbox" />
          Branding shoot
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Marketing campaign
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Videography
        </label>
      </div>
      <p>preffered date</p>
      <div>
        <input type="date" />
      </div>
      <p>What is your budget</p>
      <div>
        <input type="number" />
      </div>
      <p>Message</p>
      <div>
        <input type="text" className=" w-full h-32 " />
      </div>
      <button
        onClick={handlebuttonclick}
        className={`${
          isclicked ? "bg-black text-white" : " bg-slate-500"
        }  border w-full h-16 `}
      >
        <input type="submit" />
      </button>
    </form>
  );
};

export default Formz;
