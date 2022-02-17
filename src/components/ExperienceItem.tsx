import React from "react";

interface Props {
  title: string;
  desc: string;
  period: string;
}

const ExperienceItem = ({ title, desc, period }: Props) => {
  return (
    <div className="container flex justify-between p-20">
      <div>
        <div className="text-3xl font-subTitle">{title}</div>
        <div className="mt-2 font-etc">{desc}</div>
      </div>
      <div className="font-desc">{period}</div>
    </div>
  );
};

export default ExperienceItem;
