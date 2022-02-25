import { getPokemons } from '../../api/getPokemons'
import { ACTION_TYPES } from './type'

const setPokemon = (pokemons) => {
  return {
    type: ACTION_TYPES.SET_POKEMON,
    payload: pokemons,
  }
}

const setError = (error) => {
  return {
    type: ACTION_TYPES.SET_ERROR,
    payload: error,
  }
}

const setLoading = (loading) => {
  return {
    type: ACTION_TYPES.SET_LOADING,
    payload: loading,
  }
}

export const getPokemonsWithDetails = () => async (dispatch) => {
  try {
    setLoading(true)
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
    setLoading(false)
    return dispatch(setPokemon(res))
  } catch (error) {
    setError(true)
  }
}
