import { pokemonReducer } from './pokemonReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({ pokemonReducer })
