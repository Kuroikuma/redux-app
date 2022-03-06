import { SinglePokemonView } from './SinglePokemon.view'
import { useDispatch, useSelector } from 'react-redux'
import { setImg } from '../../../slices/pokemon'
import { fetchSinglePokemons } from '../../../slices/pokemon'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const SinglePokemon = () => {
  const dispatch = useDispatch()
  let params = useParams()

  /// GET STATE
  const img = useSelector((state) => state.pokemon.singlePokemonImg)
  const loading = useSelector((state) => state.ui.loading)
  const pokemon = useSelector((state) => state.pokemon.singlePokemon)

  useEffect(() => {
    const setPokemon = () => {
      console.log(params.name)
      dispatch(fetchSinglePokemons(params.name))
    }
    setPokemon()
  }, [])

  useEffect(() => {
    if (Object.keys(pokemon).length) {
      dispatch(setImg(pokemon.sprites.other.home.front_shiny))
    }
  }, [pokemon])

  const handleImage = (index) => {
    switch (index) {
      case 1:
        dispatch(setImg(pokemon.sprites.other.home.front_shiny))
        break
      case 2:
        dispatch(setImg(pokemon.sprites.other.home.front_default))
        break
      case 3:
        dispatch(setImg(pokemon.sprites.other.dream_world.front_default))
        break
      case 4:
        dispatch(
          setImg(pokemon.sprites.other['official-artwork'].front_default)
        )
        break

      default:
        break
    }
  }

  return (
    <SinglePokemonView handleImage={handleImage} img={img} loading={loading} />
  )
}
