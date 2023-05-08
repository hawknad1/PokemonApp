import React from "react";
import LogoImg from "../../assets/logo.png";

function Logo() {
  return (
    <div className="flex absolute top-[12px] left-[38px] items-center gap-3">
      <img src={LogoImg} alt="logo-png" height="84" width="130" />
    </div>
  );
}

export default Logo;
