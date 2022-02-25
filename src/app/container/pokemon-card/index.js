import { PokemonCardView } from '../../components/pokemon-card/index'

export const PokemonCard = ({ name, image, id, types }) => {
  return <PokemonCardView name={name} image={image} id={id} types={types} />
}
