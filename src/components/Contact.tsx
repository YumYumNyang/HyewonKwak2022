import Image from "next/image";
import React from "react";
import logo from "../../public/sm-yum.png";
const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Contact = () => {
  // const img = document.getElementById("logo");
  // const url = URL.createObjectURL(img);
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-1 mb-4 sm:mb-0">
      <div className="w-40 h-40 sm:w-32 sm:h-32 md:w-24 md:h-24 lg:w-24 lg:h-24 lg-pad:w-24 lg-pad:h-24 relative">
        <Image
          id="logo"
          alt="logo"
          src={logo}
          objectFit="contain"
          layout="fill"
        ></Image>
      </div>
      <div className="font-subTitle text-center text-2xl md:text-base lg:text-base lg-pad:text-base  text-blue font-bold">
        contact
        <br />
        me!
      </div>
      <div className="font-desc flex space-x-1 md:text-2xs lg:text-2xs lg-pad:text-2xs">
        <a href="mailto:khw121699@gmail.com?subject:Let's Talk">email</a>
        <div>·</div>
        <a href="https://github.com/YumYumNyang">github</a>
        <div>·</div>
        <a href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/">
          linkedIn
        </a>
      </div>
      <div className="font-desc text-white bg-blue px-2 md:text-2xs lg:text-xs lg-pad:text-xs ">
        resume
      </div>
    </div>
  );
};

export default Contact;
