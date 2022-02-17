import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  subTitle: string;
  description: string;
}
const LeftProject = ({ src, title, subTitle, description }: Props) => {
  return (
    <div className="container flex justify-between p-20">
      <div className="relative flex w-2/5 h-52">
        <Image
          src={src}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="font-subTitle text-6xl border-text-black dark:border-text-whtie-white ">
          {title}
        </div>
        <div className="font-subTitle ">{subTitle}</div>
        <div className="font-desc">{description}</div>
      </div>
    </div>
  );
};

export default LeftProject;
