import { combineReducers } from 'redux'
import pokemonReducer from '../../slices/pokemon'
import uiReducer from '../../slices/ui'

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
})
