import React from "react";
import PokemonCard from "./PokemonCard";
import Topbar from "../topbar/Topbar";
import Pagination from "../pagination/Pagination";

function ListView() {
  return (
    <div>
      <div className="w-[1440px]">
        <Topbar />
        <div
          className=" lg:h-[1024px] bg-[#F6F6F6] relative
    "
        >
          <div className="absolute top-[190px] left-[119px] right-[120px] bottom-[244px]">
            <div className="grid grid-cols-1 gap-x-0 gap-y-[340px] lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ListView;
