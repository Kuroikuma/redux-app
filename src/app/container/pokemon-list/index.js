import React, { useEffect } from 'react'
import { PokemonListView } from '../../components/pokemon-list'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../../../slices/pokemon'

export const PokemonList = ({ children, onLoading }) => {
  const dispatch = useDispatch()

  //// ACTION CREATOR
  const setPokemons = () => {
    dispatch(fetchPokemons())
  }

  /// GET STATE
  const list = useSelector((state) => state.pokemon.list)
  const error = useSelector((state) => state.ui.error)
  const loading = useSelector((state) => state.ui.loading)

  useEffect(() => {
    if (!list.length) {
      setPokemons()
    }
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
