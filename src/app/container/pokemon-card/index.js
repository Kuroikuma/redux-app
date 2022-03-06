import { PokemonCardView } from '../../components/pokemon-card/index'
import { setFavorites } from '../../../slices/pokemon'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const PokemonCard = ({ name, image, id, types, favorite }) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const goSinglePokemon = () => {
    navigate(`single-pokemon/${name}`)
  }

  //// ACTION CREATOR
  const setFavorite = () => {
    dispatch(setFavorites(id))
  }

  return (
    <PokemonCardView
      goSinglePokemon={goSinglePokemon}
      name={name}
      image={image}
      id={id}
      types={types}
      favorite={favorite}
      setFavorite={setFavorite}
    />
  )
}
//
