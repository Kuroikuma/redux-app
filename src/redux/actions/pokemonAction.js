import { getPokemons } from '../../api/getPokemons'
import { ACTION_TYPES } from './type'

const setPokemon = (pokemons) => {
  return {
    type: ACTION_TYPES.SET_POKEMON,
    payload: pokemons,
  }
}

export const setError = (error) => {
  return {
    type: ACTION_TYPES.SET_ERROR,
    payload: error,
  }
}

export const setLoading = () => {
  return {
    type: ACTION_TYPES.SET_LOADING,
  }
}

export const setFavorites = (pokemonID) => {
  return {
    type: ACTION_TYPES.SET_FAVORITE,
    payload: pokemonID,
  }
}

export const getPokemonsWithDetails = () => async (dispatch) => {
  try {
    dispatch(setLoading())
    const response = await getPokemons()
    const pokemonList = response
    const res = await Promise.all(
      pokemonList.map((pokemon) =>
        fetch(pokemon.url)
          .then((res) => res.json())
          .then((response) => {
            return response
          })
      )
    )

    dispatch(setPokemon(res))

    return dispatch(setLoading())
  } catch (error) {
    dispatch(setError(true))
  }
}
