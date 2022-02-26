import React, { useEffect } from 'react'
import { PokemonListView } from '../../components/pokemon-list'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetails } from '../../../redux/actions/pokemonAction'

export const PokemonList = ({ children, onLoading }) => {
  const dispatch = useDispatch()

  //// ACTION CREATOR
  const setPokemons = () => {
    dispatch(getPokemonsWithDetails())
  }

  /// GET STATE
  const list = useSelector((state) => state.pokemonReducer.list)
  const error = useSelector((state) => state.pokemonReducer.error)
  const loading = useSelector((state) => state.pokemonReducer.loading)

  useEffect(() => {
    setPokemons()
  }, [])

  return (
    <PokemonListView
      loading={loading}
      onLoading={onLoading}
      error={error}
      list={list}
    >
      {children}
    </PokemonListView>
  )
}
