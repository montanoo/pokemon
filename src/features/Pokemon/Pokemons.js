import React, { useState } from "react";
import { pokemons } from "./pokemon-info";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(pokemons.bulbasaur);
  return (
    <>
      <div className="font-display flex flex-wrap items-center justify-around">
        {Object.keys(pokemons).map((key) => {
          return (
            <div className="pokemons-wrapper px-3 flex items-center py-4">
              <div
                key={key}
                className="bg-gray-800 rounded-lg hover:bg-slate-700 drop-shadow-2xl hover:p-4 ease-in duration-300"
              >
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

      <div className="font-sans pokemons-info block bg-gray-800 text-white rounded-lg drop-shadow-2xl">
        <div className="pt-2 flex items-center justify-center">
          <img src={pokemon.image} className="w-[10rem]" alt={pokemon.name}></img>
        </div>

        <div className="p-4 flex items-center justify-center">
          <div className="font-bold pr-1">Name: </div>
          <div> {pokemon.name}</div>
        </div>

        <div className="p-4 flex items-center justify-center">
          <div className="font-bold pr-1 ">Order: </div>
          <div> {pokemon.order}</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-4 items-center justify-center text-center ">
            <div className="font-bold pr-1 ">Moves: </div>
            {pokemon.moves.map((key) => {
              return (
                <div key={key} className="block">
                  <div className="block pb-2">{key}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
