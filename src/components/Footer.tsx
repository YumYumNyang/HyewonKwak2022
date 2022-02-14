import React from "react";

const Footer = () => {
  return (
    <div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-t-2 text-xs border-black">
      <div>© HYEWON KWAK 2022. ALL RIGHTS RESERVED.</div>
      <div className="flex space-x-2">
        <div>email</div>
        <div>github</div>
        <div>linkedIn</div>
      </div>
    </div>
  );
};

export default Footer;
