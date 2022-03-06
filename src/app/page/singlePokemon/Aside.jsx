import { useSelector } from 'react-redux'
import './singlePokemon.style.css'

export const Section = () => {
  const pokemon = useSelector((state) => state.pokemon.singlePokemon)
  const band = Object.keys(pokemon).length ? true : ''
  /*const handleStats = (name) => {
    switch (name) {
      case 'hp':
        return 'hp'
      case 'attack':
        return 'att'
      case 'defense':
        return 'def'
      case 'special-attack':
        return 'sa'
      case 'special-defense':
        return 'sd'
      case 'speed':
        return 's'

      default:
        break
    }
  }*/
  console.log(pokemon)
  return (
    <aside className="singleContainer__bar">
      <article className="singleContainer__bar__item">
        <h3>Name</h3>
        <p>{pokemon.name}</p>
      </article>
      <article className="singleContainer__bar__item">
        <h3>Stats</h3>
        <div className="singleContainer__bar__item__pGroup">
          {band && pokemon.stats.map((item) => <p>{item.base_stat}</p>)}
        </div>
      </article>
      <article className="singleContainer__bar__item">
        <h3>Abilities</h3>
        <div className="singleContainer__bar__item__pGroup">
          {band && pokemon.abilities.map((item) => <p>{item.ability.name}</p>)}
        </div>
      </article>
      <article className="singleContainer__bar__item">
        <h3>Type</h3>
        <div className="singleContainer__bar__item__pGroup">
          {band && pokemon.types.map((item) => <p>{item.type.name}</p>)}
        </div>
      </article>
    </aside>
  )
}
