'use client'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import HearthIcon from '@/app/components/icons/HearthIcon';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { toggleFavorite } from '@/app/store/pokemons/pokemons';

interface Props{
    pokemon: SimplePokemon;
}

export default function PokemonsCard({pokemon} : Props) {
    const {id,name} = pokemon;

    // Accedemos a la store para obtener pokemon favorito
    const isFavorite = useAppSelector(state => state.pokemons[id] !== undefined); // <= [id] = {id} = pokemon | !== undefined devolverá true aquellos pokemons favoritos
  //  console.log(isFavorite)
    const dispatch = useAppDispatch();
  return (
    <div className="mx-auto right-0 mt-2 w-60" key={id}>
                <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={100}
                    height={100}
                    alt={name}
                    priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link href={`pokemons/${name}`}
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Read More
                        </Link>
                    </div>
                    </div>
                    <div className="border-b">
                        <div onClick={() => dispatch(toggleFavorite(pokemon))} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer select-none">
                                <div className="text-red-600">
                                    {isFavorite ? <HearthIcon fill='red'/> : <HearthIcon fill='none'/>}
                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {isFavorite ? 'In favorites' : 'Not favorite'}
                                </p>
                                <p className="text-[10px] text-gray-500">Make this your favourite pokemon</p>
                                </div>
                            
                        </div>
                    </div>
                </div>
        </div> 
  )
}
