import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getPokemons,
  getPokemonsWithDetails,
  getSinglePokemon,
} from '../api/getPokemons'
import { setError, toggleLoading } from './ui'

const initialState = {
  list: [],
  singlePokemon: {},
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

export const fetchSinglePokemons = createAsyncThunk(
  '@pokemon/fetchSinglePokemons',
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoading())
      const response = await getSinglePokemon()

      const single = response

      dispatch(setSinglePokemon(single))

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
    setSinglePokemon: (state, action) => {
      state.singlePokemon = action.payload
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

export const { setPokemons, setFavorites, setSinglePokemon } =
  pokemonSlice.actions

export default pokemonSlice.reducer
