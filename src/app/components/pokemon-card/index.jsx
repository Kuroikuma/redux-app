import './style.css'
import { FAV_COLOR, MAIN_COLOR } from '../../../utils/constant/colors'
import { FavIcon } from '../icons/fav'

export const PokemonCardView = ({
  name,
  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  id,
  types,
  favorite,
  setFavorite,
  goSinglePokemon,
}) => {
  return (
    <div
      onClick={goSinglePokemon}
      className="pokemonCard"
      style={{ backgroundColor: MAIN_COLOR }}
    >
      <button onClick={setFavorite} className="favIcon">
        <FavIcon fill={favorite ? FAV_COLOR : '#e6e9ed'} />
      </button>

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
          <div key={`${id}-${name}`} className="pokemonCard__label">
            <p>{type.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
