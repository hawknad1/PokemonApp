import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

function Topbar() {
  return (
    <div className="relative">
      <div className="fixed w-[1441px] h-[80px] shadow-sm bg-white z-10 ">
        <div className="flex items-center flex-row justify-between">
          <Logo />
          <div className="absolute left-[181px] top-[26px]">
            <p className="font-bold text-[24px]">
              Poke<span className="text-[#39BADF]">book</span>
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
