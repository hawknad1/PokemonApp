import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative w-[536px] h-[81px] top-[590px] left-[452px] bg-[#E85382] shadow-md rounded-[60px]">
      <div className=" bg-[#FFFFFF] h-[64px] w-[515px] py-2 pr-[9px] pb-5 absolute top-2 left-2.5 border-[1px] border-[#E1E1E1] rounded-[30px]">
        <div className="flex items-center justify-between">
          <div className="px-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter pokemon name"
              className="text-2xl font-normal font-General outline-none w-[405px]"
            />
          </div>
          <div
            onClick={() => navigate("/listview")}
            className="bg-[#DE527F] rounded-full h-12 w-12 flex justify-center items-center cursor-pointer shadow-md"
          >
            <MagnifyingGlassIcon className=" h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

// <div className=" left-[462px] top-[598px] ">
//         <input
//           type="text"
//           placeholder="Enter pokemon name"
//           className=" w-[515px] h-[64px] outline-none border py-2 pr-[9px] pl-5 bg-[#E1E1E1]"
//         />
//       </div>
