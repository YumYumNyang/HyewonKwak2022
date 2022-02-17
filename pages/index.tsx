import type { NextPage } from "next";
import RotateSpark from "../src/components/RotateSpark";
import yumyumnyang from '../public/yumyumnyang.png';
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col flex-auto min-w-full items-center justify-center text-center">
      <div className="font-title tracking-wider uppercase text-3xl sm:text-2xl">
        Hi! I'm Hyewon Kwak
      </div>
      <div className="relative h-80 w-80 bg-contain sm:w-64 sm:h-64">
        <Image
          id="logo"
          src={yumyumnyang}
          objectFit="contain"
          layout="fill"
        />
        <div className="absolute top-40 sm:top-32 right-0 sm:right-3 font-desc text-left whitespace-pre break-normal text-xs sm:text-2xs">{`based in
busan, south korea`}</div>
        <RotateSpark
          className="absolute top-14 left-0 w-14 sm:w-10 flex"
        />
        <RotateSpark
          className="absolute top-0 left-5 w-20 sm:w-14 flex"
        />
        <RotateSpark
          className="absolute top-48 right-0 w-12 sm:w-10 sm:top-40 flex"
        />
      </div>
      <div className="font-title tracking-wider uppercase text-3xl sm:text-2xl text-blue">
        frontend developer!
      </div>
      <div className="font-subTitle whitespace-pre break-normal text-xs sm:text-2xs ">{`A creative FRONT-end developer 
with a passion For
web Technologies,
Design, and Problem solving.
_`}</div>
    </div>
  );
};

export default Home;
