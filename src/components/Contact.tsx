import Image from "next/image";
import React from "react";

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Contact = () => {
  // const img = document.getElementById("logo");
  // const url = URL.createObjectURL(img);
  return (
    <div className="flex flex-col items-center space-y-2 mb-4">
      <div className="w-40 h-40 relative">
        <Image
          id="logo"
          src="/sm-yum.png"
          objectFit="contain"
          layout="fill"
        ></Image>
      </div>
      <div className="font-subTitle text-center text-2xl text-blue font-bold">
        {`contact 
me!`}
      </div>
      <div className="font-desc flex space-x-1">
        <a href="mailto:khw121699@gmail.com?subject:Let's Talk">email</a>
        <div>·</div>
        <a href="https://github.com/YumYumNyang">github</a>
        <div>·</div>
        <a href="https://www.linkedin.com/in/hyewon-kwak-7ba5531b7/">
          linkedIn
        </a>
      </div>
      <div className="font-desc text-white bg-blue px-2">resume</div>
    </div>
  );
};

export default Contact;
