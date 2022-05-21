import React from 'react';

export const Information = (props) => {
  return (
    <div>
      <div className="font-sans pokemons-info block bg-gray-800 text-white rounded-lg drop-shadow-2xl">
        <div className="pt-2 flex items-center justify-center">
          <img src={props.props.image} className="w-[10rem]" alt={props.props.name} ></img>
        </div>

        <div className="p-4 flex items-center justify-center">
          <div className="font-bold pr-1">Name: </div>
          <div> {props.props.name}</div>
        </div>

        <div className="p-4 flex items-center justify-center">
          <div className="font-bold pr-1 ">Order: </div>
          <div> {props.props.order}</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-4 items-center justify-center text-center ">
            <div className="font-bold pr-1 ">Moves: </div>
            {props.props.moves.map((key) => {
              return (
                <div key={key} className="block">
                  <div className="block pb-2">{key}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}