import React from "react";
import Carding from "../component/Carding";
import { Young } from "../assets";

const About = () => {
  return (
    <div className=" w-full p-20 space-y-20 pt-60">
      <div className=" md:flex lg:flex space-x-10">
        <div className=" space-y-10 md:w-2/3 sm:w-3/4 ">
          <p className=" font-extrabold text-5xl ">ABOUT LEMNY</p>
          <p className=" text-lg">
            Welcome to my world of visual storytelling. First my brand name.
            Well aside from priding myself on high quality work, I try my best
            to provide everyone with royal experience. Focusing on comfort has
            been the base of my brand and my business from day one. My passion
            for the creative arts has always been the driving force behind my
            work. With a background in creative writing and drawing, I try to
            weave together the power of imagery and narrative, using my camera
            as a tool to share captivating stories with the world. Through my
            lens, the ordinary transforms into the extraordinary. Each piece of
            art is a carefully crafted masterpiece, capturing the essence of the
            moment and revealing the hidden beauty in even the simplest of
            moments. No matter the subject my goal is to bring out the inherent
            beauty and emotion in every frame. With a deep understanding of
            visual aesthetics and storytelling, I strategically plan and execute
            projects, ensuring that every element aligns seamlessly to deliver a
            powerful message. Connecting with people and understanding their
            unique narratives has helped me create visual experiences that
            resonate deeply with different audiences. Contact me today to
            collaborate on your next creative project, and discover the
            transformative power of my artistry and storytelling. Together, we
            can create a visual masterpiece that will captivate and inspire
            audiences around the world.
          </p>
        </div>
        <Carding source={Young} />
      </div>
    </div>
  );
};

export default About;
