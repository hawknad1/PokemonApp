import React from "react";
import Frame from "../../assets/Frame.png";
import LogoImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="absolute left-[528.74px] top-[122px] ">
      <img
        src={LogoImg}
        alt="main-logo"
        className="xl:h-[248.25px]  lg:h-[230px] lg:w-[350px]  xl:w-[382.51px] "
      />
    </div>
  );
}

export default Logo;
