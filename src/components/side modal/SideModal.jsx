import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AboutModal from "./AboutModal";
import BottomToggle from "./BottomToggle";

function SideModal({ open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <div
      onClose={onClose}
      className="fixed flex justify-center items-center inset-0 backdrop-blur-[2px] backdrop-contrast-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[659px] relative top-0 left-0 bg-white h-[1024px]"
      >
        <div className="w-[624px] h-[340px] shadow-sm bg-gradient-to-t from-[#3DA0A9] to-[#7FCAD1] absolute left-[17px] top-[17px] rounded-[15px] ">
          <div className="absolute flex justify-center items-center w-16 h-16 bg-white left-[29px] top-[29px] rounded-[9px] shadow-sm cursor-pointer ">
            <ArrowLeftIcon className="h-10 w-10 " />
          </div>
        </div>
        <div className="absolute left-[181px] top-[105px] w-[312px] h-[319px]">
          <img src="src/assets/ivysaur.png" alt="picture" className=" " />
        </div>
        <div className="absolute w-[183px] h-[59px] left-[238px] top-[435px] ">
          <p className="font-Clash text-5xl font-semibold">Ivysaur</p>
          <div className="flex flex-row items-start gap-[10px] px-1 py-3">
            <div className="flex items-center justify-center min-w-[87px] h-[30px] bg-[#EEEEEE] rounded-[40px] ">
              <p className="font-General text-base font-normal">Grass</p>
            </div>
            <div className="flex items-center justify-center min-w-[87px] h-[30px] bg-[#EEEEEE] rounded-[40px] ">
              <p className="font-General text-base font-normal">Poison</p>
            </div>
          </div>
        </div>
        <div className="h-[2px] absolute w-[510px] bg-[#D9D9D9] left-[69px] top-[572px] bg-gradient-to-t from-[#D9D9D9] to-[#FFFFFF]" />
        <AboutModal />
        <BottomToggle />
      </div>
    </div>
  );
}

export default SideModal;
