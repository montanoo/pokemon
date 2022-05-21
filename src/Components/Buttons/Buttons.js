import React, { useState } from "react";
import { pokemons } from "../../features/Pokemon/pokemon-info";
import { Information } from "../Information/Information";

export const Buttons = () => {
  const [pokemon, setPokemon] = useState(pokemons.bulbasaur);
  return (
    <>
      <div className="font-display flex flex-wrap items-center justify-around">
        {Object.keys(pokemons).map((key) => {
          return (
            <div className="pokemons-wrapper px-3 flex items-center py-4" key={key}>
              <div className="bg-gray-800 rounded-lg hover:bg-slate-700 drop-shadow-2xl hover:p-4 ease-in duration-300">
                <img
                  className="name cursor-pointer "
                  src={pokemons[key].image}
                  alt={pokemons[key].name}
                  onClick={() => setPokemon(pokemons[key])}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Information props={pokemon} />
    </>
  );
};
