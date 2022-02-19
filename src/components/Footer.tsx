import { motion } from "framer-motion";
import React from "react";
import { buttonAnimation } from "../utils/buttonAnimation";

const Footer = () => {
  return (
    <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-t-2 text-xs sm:text-tiny md:text-tiny lg:text-tiny  sm:flex-col sm:justify-center md:flex-col md:justify-center  border-black dark:border-white">
      <div>© HYEWON KWAK 2022. ALL RIGHTS RESERVED.</div>
      <div className="flex space-x-2">
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="mailto:khw121699@gmail.com?subject:Let's Talk"
        >
          email
        </motion.a>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="https://github.com/YumYumNyang"
        >
          github
        </motion.a>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/"
        >
          linkedIn
        </motion.a>
        <motion.a
          whileTap="tap"
          whileHover="hover"
          variants={buttonAnimation}
          href="https://yumyumnyang.github.io/"
        >
          Blog
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
