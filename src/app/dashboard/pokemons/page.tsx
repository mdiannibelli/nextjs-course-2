import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonsGrid from "@/pokemons/components/PokemonsGrid";

export const metadata = {
  title: 'Pokemons',
  description: 'List of all pokemons'
}

// Petición HTTP generada en el backend, y no con JavaScript ¡¡ESTAMOS DEL LADO DEL SERVIDOR, NO DEL CLIENTE!!
// La respuesta que voy a querer va a ser una promesa que va a responder un array de SimplePokemon
const getPokemons = async(limit= 20, offset= 0):Promise<SimplePokemon[]> => {
    // En la data esperamos un tipado de PokemonsResponse
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))
    // throw new Error()
    return pokemons;
}


export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl m-2">Pokemons List <small className="text-blue-500">static generation</small></span>
        <PokemonsGrid pokemons={pokemons}/>
    </div>
  )
}
