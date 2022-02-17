import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-center font-title text-7xl sm:text-4xl md:text-5xl lg:text-5xl lg-pad:text-5xl my-20 sm:my-8 md:my-5 lg:my-5 lg-pad:my-5">
      {title}
    </div>
  );
};

export default Title;
