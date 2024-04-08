'use client';
import React, { useState } from 'react'
import PokemonsGrid from './PokemonsGrid'
import { useAppSelector } from '@/app/store';
import { SimplePokemon } from '../interfaces/simple-pokemon';

export default function FavoritesPokemons() {
    const favoritePokemons = useAppSelector(state => state.pokemons)
    const pokemons = Object.values(favoritePokemons);
    //console.log(pokemons)

    // Mantener favoritos con state
    const [manteinPokemon, setManteinPokemon] = useState(pokemons)
  return (
    <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-5xl m-2">Favorites Pokemons <small className="text-blue-500">global state</small></span>
        {manteinPokemon.length === 0 ? <span className="text-4xl">There is no favorites pokemons</span> : <PokemonsGrid pokemons={manteinPokemon}/>}
    </div>
  )
}
