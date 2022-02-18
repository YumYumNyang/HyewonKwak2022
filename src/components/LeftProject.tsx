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
    <div className="container flex-auto flex justify-between p-20 sm:flex-col md:flex-col lg:flex-col  sm:p-3 md:p-3 lg:p-5 xl:p-10">
      <div className="relative flex w-3/6 h-60 sm:w-full sm:h-40 md:w-full md:h-50 lg:w-full lg:h-60 xl:h-60 xl:w-3/5  ">
        <Image
          alt={title}
          src={src}

          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="font-subTitle border-text-black dark:border-text-whtie-white sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl dark:border-text-white-white text-6xl">
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
