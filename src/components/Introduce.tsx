import Image from "next/image";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import yum from "../../public/mac-yum.png";
import { buttonAnimation } from "../utils/buttonAnimation";
import { talkAnimation } from "../utils/talkAnimtaion";

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const Introduce = () => {
  const el = useRef<any>(null);
  const typed = useRef<any>(null);
  useEffect(() => {
    const options = {
      strings: [
        `HI! : ) I’m Hyewon Kwak, a creative front-end developer based in south korea who has passion for web technologies, design, and problem-solving.`,
        `Front-end development is attractive
because I can create visual parts that are actually visible to user
and think of problem solving parts
such as performance and state managements at the same time.`,
        `To be a better developer, I’m trying to write a better code
through doubts and concerns about the code.
I have an attitude to learn actively.`,
        `I like the process of getting better results by putting heads together with people,
the joy that I can feel when I persistently think about difficult problems and solve them.`,
      ],
      typeSpeed: 30,
      backSpeed: 10,
      backDelay: 1000,
      loopCount: 3,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <AnimateSharedLayout>
      <div className="w-10/12 flex flex-col items-center ">
        <div className="w-full flex flex-col rounded-xl bg-white my-20">
          <div className="flex items-center w-full h-10 bg-gray rounded-t-xl space-x-2 px-4">
            <div className="w-4 h-4 rounded-full bg-red"></div>
            <div className="w-4 h-4 rounded-full bg-yellow"></div>
            <div className="w-4 h-4 rounded-full bg-green"></div>
          </div>
          <div className="break-all h-52 bg-black p-10 sm:p-3 md:p-3 lg:p-5 xl:p-5 font-code text-sm sm:text-2xs md:text-xs lg:text-xs min-h-60 text-white rounded-b-xl">
            <span className="" ref={el} />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={item}
          className="logo w-80 h-80 relative sm:w-44 md:w-52 lg:w-60 xl:w-68 "
        >
          <Image
            id="logo"
            alt="logo"
            src={yum}
            objectFit="contain"
            className="rounded-full"
            layout="fill"
          ></Image>
        </motion.div>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={talkAnimation}
          href="mailto:khw121699@gmail.com?subject:Let's Talk"
          className="text-center text-white font-title text-7xl sm:text-4xl md:text-5xl lg:text-5xl mb-10 "
        >
          {`let's talk!`}
        </motion.a>
      </div>
    </AnimateSharedLayout>
  );
};

export default Introduce;
