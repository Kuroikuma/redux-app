import style from './style.module.css'
import { Layout } from '../../container/layout'
import { Search } from '../../container/search'
import { PokemonList } from '../../container/pokemon-list'
import { PokemonCard } from '../../container/pokemon-card'

export const HomeView = () => {
  return (
    <Layout>
      <div className={style.home_container}>
        <Search />
        <PokemonList>
          {(pokemon) => (
            <PokemonCard
              key={`${pokemon.id}-${pokemon.name}`}
              name={pokemon.name}
              image={pokemon.sprites.front_shiny}
              id={pokemon.id}
              types={pokemon.types}
            />
          )}
        </PokemonList>
      </div>
    </Layout>
  )
}
