import { Action, Dispatch } from "@reduxjs/toolkit"
import type {MiddlewareAPI} from "@reduxjs/toolkit"

export const localStorageMiddleware = ( state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action)
        //console.log({state}, state.getState())
        //console.log(action) <= return type: 'pokemons/toggleFavorite' & action.payload (pokemon selected)
        if(action.type === 'pokemons/toggleFavorite') {
            const {pokemons} = state.getState()
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons))
            return;
        }
    }
}