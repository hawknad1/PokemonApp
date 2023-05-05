import React from "react";

function LowerInfoCard() {
  return (
    <div className="flex absolute top-[170px] justify-center items-center">
      <p className="font-[500] text-2xl">charizard</p>
      <div className="flex gap-[10px] absolute top-11">
        <div className="flex py-1 px-3 rounded-[40px] items-center justify-center min-w-[70px] h-[30px] bg-[#EEEEEE] cursor-pointer">
          <p className="font-normal text-base">Fire</p>
        </div>
        <div className="flex py-1 px-3 rounded-[40px] items-center justify-center min-w-[85px] h-[30px] bg-[#EEEEEE] cursor-pointer">
          <img
            src="src/assets/butterfly.png"
            alt="butterfly"
            className="h-4 w-4"
          />
          <p>Flying</p>
        </div>
      </div>
    </div>
  );
}

export default LowerInfoCard;
