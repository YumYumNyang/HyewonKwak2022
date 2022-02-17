import React from "react";

type Props = {
  className: string;
};
const RotateSpark = ({ className }: Props) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<svg class="animate-[rotate_8s_infinite_linear]" width="162" height="144" viewBox="0 0 162 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.0124 0.264906L99.2774 49.7162L150.713 36.2771L112.24 68.9163L161.719 93.1452L107.045 89.8526L125.584 137.557L86.7366 100.261L63.475 143.496L63.2101 94.0443L11.7747 107.483L50.2475 74.8443L0.768408 50.6154L55.442 53.9079L36.9034 6.204L75.7509 43.4996L99.0124 0.264906Z" fill="#FFE81E"/>
</svg>
        `,
      }}
    ></div>
  );
};

export default RotateSpark;
