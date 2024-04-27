"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Passion for problem-solving. 
        <span className="font-medium"> Proficient in both front-end and back-end development</span>, I decided to follow my passion for programming by embarking on a journey of learning. This led me to enroll in a coding at Wethinkcode, 
        where I immersed myself in the world of software development and honed my skills.
        I delved into the realms of both{" "}
        <span className="font-medium">full-stack web development and mobile development </span>
        acquiring proficiency in building robust web applications and creating dynamic mobile experiences.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js
        </span>
        . I am also familiar with TypeScript and Flutter. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time or Part-time position</span> as a software
        developer.
      </p>

      {/* <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">technologies</span>. 
        
      </p> */}
    </motion.section>
  );
}