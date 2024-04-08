import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// '1' : {id: '1', name: 'bulbasaur'}
interface FavouritePokemons {
    [key:string] : SimplePokemon
}

// Leer local storage MALA PRÁCTICA EN REDUX!! 
const getInitialState = ():FavouritePokemons => {
    //fixing error in npm run build at getInitialState (opción medianamente mala)
    if (typeof localStorage === 'undefined') return {};
    
    const storage = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
    return storage;
}

const initialState:FavouritePokemons = {
   ...getInitialState(),
    //'1': {id: '1', name: 'bulbasaur'},
    //'3': {id: '3', name: 'venusaur'},
    //'5': {id: '5', name: 'charmeleon'},
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite (state, action:PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const {id} = pokemon;

            // Si existe el pokemon en el state example: '1'
            if(state[id] !== undefined) {
                delete state[id]
          
            } else { // Si no, lo agregamos el valor de action al state
                state[id] = pokemon;

            }
            
            // localStorage MALA PRÁCTICA EN REDUX!! 
           // localStorage.setItem('favorites-pokemons', JSON.stringify(state))
        }
    }

})

export const {toggleFavorite} = pokemonsSlice.actions
export default pokemonsSlice.reducer;