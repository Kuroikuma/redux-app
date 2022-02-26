import { PokemonCardView } from '../../components/pokemon-card/index'
import { setFavorites } from '../../../slices/pokemon'
import { useDispatch } from 'react-redux'

export const PokemonCard = ({ name, image, id, types, favorite }) => {
  const dispatch = useDispatch()

  //// ACTION CREATOR
  const setFavorite = () => {
    dispatch(setFavorites(id))
  }

  return (
    <PokemonCardView
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
