import './style.css'
import { FAV_COLOR, MAIN_COLOR } from '../../../utils/constant/colors'
import { FavIcon } from '../icons/fav'

export const PokemonCardView = ({
  name,
  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  id,
  types,
}) => {
  return (
    <div className="pokemonCard" style={{ backgroundColor: MAIN_COLOR }}>
      <FavIcon fill={FAV_COLOR} />
      <div className="pokemonCard__content">
        <div className="pokemonCard__image">
          <img src={image} alt="pokemon image" />
        </div>
        <div className="pokemonCard__name">
          <p>{name}</p>
        </div>
      </div>
      <div className="pokemonCard__List__label">
        {types.map((type) => (
          <div className="pokemonCard__label">
            <p>{type.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
