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
    <div className="container flex-auto flex justify-center p-20 sm:flex-col md:flex-col lg:flex-col sm:p-3 md:p-3 lg:p-5 xl:p-8">
      <div className="relative flex w-3/6 h-60 sm:w-full md:w-full lg:w-full xl:w-3/5  ">
        <Image
          alt={title}
          src={src}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="font-subTitle border-text-black dark:border-text-whtie-white sm:text-3xl md:text-3xl  lg:text-4xl xl:text-5xl dark:border-text-white-white text-6xl">
          {title}
        </div>
        <div className="font-subTitle  sm:text-xs md:text-xs lg:text-sm text-lg xl:text-base">
          {subTitle}
        </div>
        <div className="font-desc sm:text-2xs md:text-2xs lg:text-xs xl:text-sm  ">
          {description}
        </div>
      </div>
    </div>
  );
};

export default LeftProject;
