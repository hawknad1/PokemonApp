import React from "react";

function BottomToggle() {
  return (
    <div className="absolute left-0 top-[927px] w-[659px] h-[97px] bg-white ">
      <div className="flex justify-center">
        <div className="flex flex-row w-[428px] h-16 rounded-[60px] items-center p-2 bg-[#E9E9E9] justify-between">
          <div className="bg-white py-[12px] px-[40px] rounded-full cursor-pointer ">
            <p className="font-General text-lg font-medium">About</p>
          </div>
          <div className="py-[12px] px-[40px] cursor-pointer">
            <p className="font-General text-lg font-medium">Stats</p>
          </div>
          <div className="py-[12px] px-[40px] cursor-pointer">
            <p className="font-General text-lg font-medium">Similar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomToggle;
