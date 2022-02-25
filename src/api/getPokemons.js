const API = process.env.POKEAPI || 'https://pokeapi.co/api/v2/'

export const getPokemons = (limit = 151) => {
  const baseUrl = `${API}pokemon?limit=${limit}`
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      return response.results
    })
    .catch((error) => {
      console.log(error)
    })
}
