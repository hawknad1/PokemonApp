import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex flex-row absolute left-[500px] top-[17px] gap-2 border-[1px] w-full md:max-w-[440px] md:h-[48px] py-2 rounded-full cursor-pointer shadow-sm hover:shadow-md transition">
      <div className="flex flex-row items-center">
        <div className="text-[#DFDFDF] px-3 py-2">
          <AiOutlineSearch size="18px" />
        </div>
        <input
          type="text"
          placeholder="Enter pokemon name"
          className="outline-none font-General font-normal text-lg w-[360px] text-[#7B7B7B]"
        />
      </div>
    </div>
  );
}

export default SearchBar;
