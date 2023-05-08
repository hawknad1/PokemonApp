import React from "react";

function AboutModal() {
  return (
    <div>
      <div className="absolute top-[574px] left-[69px] flex justify-center items-center w-[510px] h-[52px]">
        <p className="text-2xl font-semibold font-Clash">About</p>
      </div>
      <div className="w-[510px] h-[172px] left-[69px] top-[628px] absolute bg-gradient-to-r from-[#FFFFFF] via-[#d9d9d948] to-[#FFFFFF]">
        <div className="flex justify-center">
          <div className="mt-[18px] ">
            <div className="flex gap-x-[39px]">
              <p className="font-Clash text-xl">Height</p>
              <p className="font-Clash text-xl font-semibold">1.0m</p>
            </div>
            <div className="flex gap-x-[39px] mt-[18px]">
              <p className="font-Clash text-xl">Weight</p>
              <p className="font-Clash text-xl font-semibold">13.0kg</p>
            </div>
            <div className="flex gap-x-[39px] mt-[18px]">
              <p className="font-Clash text-xl">Abilities</p>

              <div>
                <li className="font-Clash text-xl font-semibold">overgrow</li>
                <li className="font-Clash text-xl font-semibold">
                  chlorophyll
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
