import Image from "next/image";
import React from "react";
import yum from "../../public/mac-yum.png";

const Introduce = () => {
  return (
    <div className="w-10/12 flex flex-col items-center ">
      <div className="w-full flex flex-col rounded-xl bg-white my-40">
        <div className="flex items-center w-full h-10 bg-gray rounded-t-xl space-x-2 px-4">
          <div className="w-4 h-4 rounded-full bg-red"></div>
          <div className="w-4 h-4 rounded-full bg-yellow"></div>
          <div className="w-4 h-4 rounded-full bg-green"></div>
        </div>
        <div className="text-black p-20 sm:p-3 md:p-3 lg:p-5 lg-pad:p-5  font-code text-sm sm:text-2xs md:text-xs lg:text-xs lg-pad:text-xs">{`HI! : ) I’m Hyewon Kwak, a creative front-end developer based in south korea
who has passion for web technologies, design, and problem-solving.

Front-end development is attractive 
because I can create visual parts that are actually visible to user
and think of problem solving parts 
such as performance and state managements at the same time.

To be a better developer, I’m trying to write a better code 
through doubts and concerns about the code. 
I have an attitude to learn actively.

I like the process of getting better results by putting heads together with people,
the joy that I can feel when I persistently think about difficult problems and solve them.`}</div>
      </div>
      <div className="logo w-80 h-80 relative">
        <Image
          id="logo"
          alt="logo"
          src={yum}
          objectFit="contain"
          className="rounded-full"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
};

export default Introduce;
