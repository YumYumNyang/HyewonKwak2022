import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../../public/sm-yum.png";
import { buttonAnimation } from "../utils/buttonAnimation";
const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Contact = () => {
  const contact = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity:1, y: 0,
      transition: {
        delay: 1.3,
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };
  const item = {
    hidden: {opacity: 0, y:-20},
    show: {opacity:1, y: 0, transition: {duration: 0.8}}
    
  }
  const image = {
    show: {
      opacity: 1,
      scale: [0, 1.2, 0.9, 1],
      transition: {
        delay: 1.5,
        times:  [0, 0.5, 0.6, 0.8],
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={contact}
      className="flex flex-col items-center mb-4 sm:mb-0 space-y-2"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={image}
        className="w-40 h-40 sm:w-32 sm:h-32 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-32 xl:h-32 relative"
      >
        <Image
          id="logo"
          alt="logo"
          src={logo}
          objectFit="contain"
          layout="fill"
        ></Image>
      </motion.div>
      <motion.div
        variants={item}
        className="font-subTitle text-center text-2xl md:text-base lg:text-base xl:text-base text-blue font-bold"
      >
        contact
        <br />
        me!
      </motion.div>
      <motion.div
        variants={item}
        className="font-desc flex space-x-1 md:text-2xs lg:text-2xs xl:text-xs "
      >
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="mailto:khw121699@gmail.com?subject:Let's Talk"
        >
          email
        </motion.a>
        <div>·</div>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="https://github.com/YumYumNyang"
        >
          github
        </motion.a>
        <div>·</div>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/"
        >
          linkedIn
        </motion.a>
      </motion.div>
      <motion.button
        layout
        variants={item}
        whileTap={{ scale: 0.8 }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "transparent",
          borderColor: "blue",
          color: "blue",
        }}
        className="font-desc text-white bg-blue border-2 border-white dark:border-black px-2 md:text-2xs lg:text-xs box-border"
      >
        resume
      </motion.button>
    </motion.div>
  );
};

export default Contact;
