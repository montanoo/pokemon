import React from "react";
import { pokemons } from "./pokemon-info";

export const Pokemon = () => {
  return (
    <>
      <div className="pokemon-wrapper">
        {Object.keys(pokemons).map(key => {
          return (
            <div key={key} className="name"> {pokemons[key].name} </div>
          )
        })}
      </div>
    </>
  );
};
