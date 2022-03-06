const API = process.env.POKEAPI || 'https://pokeapi.co/api/v2/'

export const getPokemons = async (limit = 151) => {
  const baseUrl = `${API}pokemon?limit=${limit}`
  try {
    const res = await fetch(baseUrl)
    const response = await res.json()
    return response.results
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonsWithDetails = async (pokemonList) => {
  const res = await Promise.all(
    pokemonList.map((pokemon) =>
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((response) => {
          console.log(
            '🚀 ~ file: getPokemons.js ~ line 21 ~ .then ~ response',
            response
          )

          return response
        })
    )
  )
  return res
}

export const getSinglePokemon = async (name) => {
  try {
    const res = await fetch(`${API}pokemon/${name}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(
      '🚀 ~ file: getPokemons.js ~ line 39 ~ getSinglePokemon ~ error',
      error
    )
  }
}
