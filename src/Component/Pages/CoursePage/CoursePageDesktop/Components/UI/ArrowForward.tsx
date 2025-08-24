/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowForward = ({
  className,
  arrowForward = "https://c.animaapp.com/CcleGMh5/img/arrow-forward.svg",
}) => {
  return (
    <img
      className={`absolute w-6 h-6 top-0 left-0 ${className}`}
      alt="Arrow forward"
      src={arrowForward}
    />
  );
};
