import React, { useState } from "react";
import PokemonView from "./PokemonView";
import PokemonImageCard from "./PokemonImageCard";
import LowerInfoCard from "./LowerInfoCard";

function PokemonCard() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative shadow-2xl "
    >
      <div
        className={`absolute top-[190px] left-[120px] transition-all duration-700 ease-in-out  w-72 hover:h-[329px] h-[268px] bg-white rounded-[20px]`}
      >
        <div className="">
          <div className="flex justify-center items-center">
            <PokemonImageCard />
            <LowerInfoCard />
          </div>
          <div>{hover && <PokemonView />}</div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
