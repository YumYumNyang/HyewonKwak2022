import Image from "next/image";
import React from "react";

interface Props {
  src: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}
const RightProject = ({ src, title, subTitle, description }: Props) => {
  return (
    <div className="container flex justify-between p-20 sm:flex-col-reverse md:flex-col-reverse  lg:flex-col-reverse lg-pad:flex-col-reverse sm:p-3 md:p-3 lg:p-5 lg-pad:p-5">
      <div className="flex flex-col justify-between">
        <div className="font-subTitle text-6xl sm:text-4xl md:text-4xl lg:text-4xl lg-pad:text-4xl border-text-black dark:border-text-white-white">
          {title}
        </div>
        <div className="font-subTitle text-lg sm:text-xs md:text-xs lg:text-sm lg-pad:text-sm">
          {subTitle}
        </div>
        <div className="font-desc sm:text-2xs md:text-2xs lg:text-xs lg-pad: text-xs">
          {description}
        </div>
      </div>
      <div className="relative flex w-3/6 h-60 sm:w-full sm:h-36 md:w-full md:h-50  lg:w-full lg:h-60  lg-pad:w-full lg-pad:h-60 ">
        <Image
          src={src}
          objectFit="cover"
          layout="fill"
          objectPosition="center 60%"
        />
      </div>
    </div>
  );
};

export default RightProject;
