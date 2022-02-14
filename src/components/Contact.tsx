import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mb-4">
      <Image src="/sm-yum.png" width="250" height="250"></Image>
      <div className="font-subTitle text-center text-2xl text-blue font-bold">
        contact <br /> me!
      </div>
      <div className="font-desc flex space-x-1">
        <a>instagram</a>
        <div>·</div>
        <a>github</a>
        <div>·</div>
        <a>linkedin</a>
      </div>
      <div className="font-desc text-white bg-blue px-2">resume</div>
    </div>
  );
};

export default Contact;
