import React from "react";

interface Props {
  title: string;
  desc: string;
  period: string;
}

const ExperienceItem = ({ title, desc, period }: Props) => {
  return (
    <div className="container flex justify-between p-20 sm:flex-col   sm:p-3 md:p-3 lg:p-5 xl:p-5">
      <div>
        <div className="text-3xl font-subTitle  sm:text-base md:text-2xl lg:text-3xl ">
          {title}
        </div>
        <div className="mt-2 font-etc py-2   sm:text-2xs md:text-xs lg:text-sm">
          {desc}
        </div>
      </div>
      <div className="overflow-visible font-desc py-2  sm:text-left sm:text-xs md:text-xs lg:text-xs xl:text-sm text-right">
        {period}
      </div>
    </div>
  );
};

export default ExperienceItem;
