import { SimplePokemon } from '../interfaces/simple-pokemon'
import PokemonsCard from './PokemonsCard';


interface Props{
    pokemons: SimplePokemon[];
}

export default function PokemonsGrid({pokemons}: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map((pokemon) => (
                
                <PokemonsCard key={pokemon.id} pokemon={pokemon}/>

            ))}
    </div>
    
  )
}
