import React from "react";
import PokemonCard from "./PokemonCard";
import Topbar from "../topbar/Topbar";
import Pagination from "../pagination/Pagination";

function ListView() {
  return (
    <div className="w-[1440px]">
      <Topbar />
      <div
        className="h-[1024px] bg-[#F6F6F6] relative
    "
      >
        <div className="absolute top-[190px] left-[119px] right-[120px] bottom-[244px]">
          <div className="grid grid-cols-4 gap-x-4 gap-y-[335px]">
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
  );
}

export default ListView;
