import React from "react";
import PokemonCard from "./PokemonCard";

function PokemondCardList() {
  return (
    <div
      className="absolute grid grid-cols-4 gap-y-[350px] gap-[306px]
    "
    >
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
}

export default PokemondCardList;
