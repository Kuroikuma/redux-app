import { SearchView } from '../../components/search'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePokemons, setSearch } from '../../../slices/pokemon'
import { useNavigate } from 'react-router-dom'
import { Notification } from '../notification/Notification'
import { useEffect } from 'react'

export const Search = () => {
  const message = ['error dea', 'success full']

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const search = useSelector((state) => state.pokemon.search)
  const loading = useSelector((state) => state.ui.loading)
  const error = useSelector((state) => state.ui.error)
  const pokemon = useSelector((state) => state.pokemon.singlePokemon)

  useEffect(() => {
    if (!error && search) {
      navigate(`single-pokemon/${search}`)
      dispatch(setSearch(''))
    }
  }, [pokemon])

  //// ACTION CREATOR
  const setSearched = (event) => {
    const value = event.target.value
    dispatch(setSearch(value))
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSinglePokemons(search))
  }

  return (
    <SearchView
      setSearched={setSearched}
      submitSearch={submitSearch}
      search={search}
      Notification={Notification}
      message={message}
      loading={loading}
    />
  )
}
