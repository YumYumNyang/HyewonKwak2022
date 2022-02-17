import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <div className="text-center font-title text-8xl m-20">{title}</div>;
};

export default Title;
