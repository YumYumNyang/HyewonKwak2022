import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  subTitle: string;
  description: string;
}
const RightProject = ({ src, title, subTitle, description }: Props) => {
  return (
    <div className="container flex justify-between p-20">
      <div className="flex flex-col justify-between">
        <div className="font-subTitle text-6xl border-text-black">{title}</div>
        <div className="font-subTitle text-lg">{subTitle}</div>
        <div className="font-desc">{description}</div>
      </div>
      <div className="relative flex w-2/5  h-52">
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
