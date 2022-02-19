import type { NextPage } from "next";
import RotateSpark from "../src/components/RotateSpark";
import yumyumnyang from '../public/yumyumnyang.png';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const title = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: [0, 1.1, 0.95, 1],
    transition: { delay: 0.5, times: [0, 0.6, 0.7, 0.8] },
  },
};

const desc = {
  hidden: { opacity: 0, y: -80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 3, duration: 0.8 },
  },
};

const images = {
  hidden: { opacity: 0, scale: 1.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.3,
      delayChildren: 1.7,
    },
  },
};
const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Home: NextPage = () => {
  const controls = useAnimation();


  return (
    <div className="container flex flex-col flex-auto min-w-full items-center justify-center text-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={title}
        className="font-title tracking-wider uppercase text-3xl sm:text-2xl"
      >
        {`Hi! I'm Hyewon Kwak`}
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={images}
        className="relative h-80 w-80 bg-contain sm:w-64 sm:h-64"
      >
        <Image
          priority={true}
          id="logo"
          alt="logo"
          src={yumyumnyang}
          objectFit="contain"
          layout="fill"
        />
        <RotateSpark
          variant={item}
          className="absolute top-14 left-0 w-14 sm:w-10 flex"
        />
        <RotateSpark
          variant={item}
          className="absolute top-0 left-5 w-20 sm:w-14 flex"
        />
        <RotateSpark
          variant={item}
          className="absolute top-48 right-0 w-12 sm:w-10 sm:top-40 flex"
        />
        <motion.div
          variants={item}
          className="absolute top-40 sm:top-32 right-0 sm:right-3 font-desc text-left whitespace-pre break-normal text-xs sm:text-2xs"
        >{`based in
busan, south korea`}</motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={title}
        className="font-title tracking-wider uppercase text-3xl sm:text-2xl text-blue"
      >
        frontend developer!
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={desc}
        className="font-subTitle whitespace-pre break-normal text-xs sm:text-2xs"
      >{`A creative FRONT-end developer 
with a passion For
web Technologies,
Design, and Problem solving.
_`}</motion.div>
    </div>
  );
};

export default Home;
