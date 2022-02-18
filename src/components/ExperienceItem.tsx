import React from "react";

interface Props {
  title: string;
  desc: string;
  period: string;
}

const ExperienceItem = ({ title, desc, period }: Props) => {
  return (
    <div className="container flex justify-between p-20 sm:flex-col md:flex-col lg:flex-col sm:p-3 md:p-3 lg:p-5 xl:p-10">
      <div>
        <div className="text-3xl font-subTitle  sm:text-2xl md:text-2xl lg:text-3xl ">
          {title}
        </div>
        <div className="mt-2 font-etc py-2">{desc}</div>
      </div>
      <div className="font-desc py-2">{period}</div>
    </div>
  );
};

export default ExperienceItem;
