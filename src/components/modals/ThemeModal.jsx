import React, { useState } from "react";
import useColor from "../../useColor";

function ThemeModal({ open, onClose }) {
  const { handleThemeBlue, handleThemeRed, handleThemeYellow, handleColor } =
    useColor();

  if (!open) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="fixed flex justify-center items-center inset-0 backdrop-blur-[2px] backdrop-contrast-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative w-[427px] h-[263px] bg-[#EBEBEB] overflow-hidden rounded-[30px]"
      >
        <div className="h-[57px] bg-white flex items-center justify-center">
          <h1 className="font-semibold text-2xl">Choose Theme</h1>
        </div>
        <div className="flex absolute mx-7 gap-9 top-28 left-9">
          <div
            onClick={() => handleColor("bg-[#E85382]")}
            className="h-[74px] w-[74px] bg-[#E85382] rounded-full cursor-pointer hover:scale-105 duration-150 transition"
          />
          <div
            onClick={() => handleColor("bg-[#39BADF]")}
            className="h-[74px] w-[74px] bg-[#39BADF] rounded-full cursor-pointer hover:scale-105 duration-150 transition"
          />
          <div
            onClick={() => handleColor("bg-[#E1A725]")}
            className="h-[74px] w-[74px] bg-[#E1A725] rounded-full cursor-pointer hover:scale-105 duration-150 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;
