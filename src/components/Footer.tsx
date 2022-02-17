import React from "react";

const Footer = () => {
  return (
    <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-t-2 text-xs border-black dark:border-white">
      <div>© HYEWON KWAK 2022. ALL RIGHTS RESERVED.</div>
      <div className="flex space-x-2">
        <a href="mailto:khw121699@gmail.com?subject:Let's Talk">email</a>
        <a href="https://github.com/YumYumNyang">github</a>
        <a href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/">
          linkedIn
        </a>
        <a href="https://yumyumnyang.github.io/">Blog</a>
      </div>
    </div>
  );
};

export default Footer;
