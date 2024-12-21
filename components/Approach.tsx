"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Planning & Strategy",
    description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
  },
  {
    title: "Development & Progress Update",
    description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
  },
  {
    title: "Development & Launch",
    description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
  }
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Our <span className="text-purple">approach</span>
      </h1>
      <div className="h-[80vh] mt-20">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default Approach;
