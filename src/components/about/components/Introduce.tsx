import Image from "next/image";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import yum from "../../public/mac-yum.png";
import { buttonAnimation } from "../utils/buttonAnimation";
import { talkAnimation } from "../utils/talkAnimtaion";

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};
const browser = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
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
      <div className="w-10/12 xl:w-11/12 flex flex-col items-center">
        <div className="w-full flex sm:flex-col md:flex-col items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={browser}
            className="w-full flex flex-col rounded-xl mb-20"
          >
            <div className="flex items-center w-full h-10 bg-gray rounded-t-xl space-x-2 px-4">
              <div className="w-4 h-4 rounded-full bg-red"></div>
              <div className="w-4 h-4 rounded-full bg-yellow"></div>
              <div className="w-4 h-4 rounded-full bg-green"></div>
            </div>
            <div className="break-all h-44 bg-black dark:bg-white p-5 font-code text-xs sm:text-2xs md:text-2xs lg:text-2xs xl:text-2xs   text-white dark:text-black rounded-b-xl">
              <span ref={el} />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={item}
            className="logo w-80 h-80 relative sm:w-44 md:w-52 lg:w-60 xl:w-64 sm:h-44 md:h-52 lg:h-60 xl:h-64 "
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
        </div>
      </div>
    </AnimateSharedLayout>
  );
};

export default Introduce;
