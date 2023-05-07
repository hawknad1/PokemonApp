import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import SideModal from "../side modal/SideModal";
import About from "../modals/About";
import useColor from "../../useColor";

function PokemonView() {
  const [isHovering, setIsHovering] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const { color, themeBlue, themeYellow, themeRed, themeColor } = useColor();

  return (
    <>
      <div className="flex justify-center items-center cursor-pointer">
        <div
          className={`absolute bottom-[13px] py-3 px-5 bg-[#39BADF] w-[268px] h-[46px] rounded-[14px]`}
        >
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-white font-General font-normal text-base">
                View Pokemon
              </p>
            </div>
            <div className="">
              <AiFillEye size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonView;

{
  /* <div className="absolute flex left-1/2 bg-[#E85382]">
<div className="relative -left-1/2">Pokemon</div>
</div>  absolute top-20*/
}
