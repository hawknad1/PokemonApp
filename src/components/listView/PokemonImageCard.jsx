import React from "react";
import Frame from "../../assets/Frame.png";

function PokemonImageCard() {
  return (
    <div className="absolute top-[10px] w-[268px] h-[148px] bg-[#F1F1F1] rounded-[15px]">
      <div className="absolute left-[38px] bottom-[14px] w-[191px] h-[187px]">
        <img src={Frame} alt="logo" />
      </div>
    </div>
  );
}

export default PokemonImageCard;
