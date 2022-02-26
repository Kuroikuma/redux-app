import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons'
import { setError, toggleLoading } from './ui'

const initialState = {
  list: [],
}

export const fetchPokemons = createAsyncThunk(
  '@pokemon/fetchPokemons',
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoading())
      const response = await getPokemons()

      const pokemonList = response
      const res = await getPokemonsWithDetails(pokemonList)

      dispatch(setPokemons(res))

      dispatch(toggleLoading())
    } catch (error) {
      dispatch(setError(true))
    }
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.list = action.payload
    },
    setFavorites: (state, action) => {
      const currentPokemonItem = state.list.findIndex(
        (item) => item.id === action.payload
      )

      if (currentPokemonItem >= 0) {
        state.list[currentPokemonItem].favorite =
          !state.list[currentPokemonItem].favorite
      }
    },
  },
})

export const { setPokemons, setFavorites } = pokemonSlice.actions

export default pokemonSlice.reducer
