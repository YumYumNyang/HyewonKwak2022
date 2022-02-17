import Image from "next/image";
import React from "react";

interface Props {
  src: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}
const LeftProject = ({ src, title, subTitle, description }: Props) => {
  return (
    <div className="container flex-auto flex justify-between p-20 sm:flex-col md:flex-col lg:flex-col  sm:p-3 md:p-3 lg:p-5 ">
      <div className="relative flex w-3/6 h-60 sm:w-full sm:h-40 md:w-full md:h-50 lg:w-full lg:h-72 ">
        <Image
          alt={title}
          src={src}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="font-subTitle text-6xl border-text-black dark:border-text-whtie-white sm:text-4xl md:text-4xl  lg:text-4xl  dark:border-text-white-white">
          {title}
        </div>
        <div className="font-subTitle text-lg sm:text-xs md:text-xs lg:text-sm ">
          {subTitle}
        </div>
        <div className="font-desc sm:text-2xs md:text-2xs lg:text-xs ">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LeftProject;
