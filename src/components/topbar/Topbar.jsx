import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

function Topbar() {
  return (
    <div className="relative">
      <div className="fixed w-[390px] h-[844px] lg:w-[1441px] lg:h-[80px] shadow-sm bg-white z-10 ">
        <div className="flex items-center flex-row justify-between">
          <Logo />
          <div className="absolute left-[150px] top-6 lg:left-[181px] lg:top-[26px]">
            <p className="font-bold font-Clash text-xl lg:text-[24px]">
              Poké<span className="text-[#39BADF]">book</span>
            </p>
          </div>

          <SearchBar />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
