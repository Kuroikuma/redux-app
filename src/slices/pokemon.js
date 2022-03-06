import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getPokemons,
  getPokemonsWithDetails,
  getSinglePokemon,
} from '../api/getPokemons'
import { setError, toggleLoading } from './ui'

const initialState = {
  list: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  singlePokemon: {},
  singlePokemonImg: '',
  search: '',
}

export const fetchPokemons = createAsyncThunk(
  '@pokemon/fetchPokemons',
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoading())

      console.log('13')
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
  async (name, { dispatch }) => {
    console.log('🚀 ~ file: pokemon.js ~ line 38 ~ name', name)
    try {
      dispatch(toggleLoading())
      dispatch(setError(false))
      const response = await getSinglePokemon(name)

      const single = response
      console.log('🚀 ~ file: pokemon.js ~ line 45 ~ single', single)

      if (single) {
        dispatch(setSinglePokemon(single))
      } else {
        throw 'name not found in database'
      }

      dispatch(toggleLoading())
    } catch (error) {
      dispatch(toggleLoading())
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
    setImg: (state, action) => {
      state.singlePokemonImg = action.payload
    },
    setSinglePokemon: (state, action) => {
      state.singlePokemon = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setFavorites: (state, action) => {
      const currentPokemonItem = state.list.findIndex(
        (item) => item.id === action.payload
      )

      if (currentPokemonItem >= 0) {
        state.list[currentPokemonItem].favorite =
          !state.list[currentPokemonItem].favorite

        if (JSON.parse(localStorage.getItem('favorites'))) {
          const favorites = JSON.parse(localStorage.getItem('favorites'))
          localStorage.setItem(
            'favorites',
            JSON.stringify(favorites.concat(state.list[currentPokemonItem]))
          )
        } else {
          localStorage.setItem(
            'favorites',
            JSON.stringify([state.list[currentPokemonItem]])
          )
        }
      }
    },
  },
})

export const {
  setPokemons,
  setFavorites,
  setSinglePokemon,
  setImg,
  setSearch,
} = pokemonSlice.actions

export default pokemonSlice.reducer
