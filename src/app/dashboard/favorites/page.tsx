import FavoritesPokemons from "@/pokemons/components/FavoritesPokemons";


export const metadata = {
  title: 'Favorites',
  description: 'List of all favorites pokemons'
}


export default async function PokemonsPage() {
  return (
    <FavoritesPokemons/>
  )
}