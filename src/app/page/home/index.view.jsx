import style from './style.module.css'
import { Layout } from '../../container/layout'
import { Search } from '../../container/search'
import { PokemonList } from '../../container/pokemon-list'
import { PokemonCard } from '../../container/pokemon-card'
import { SkeletonLoader } from '../../components/skeleton-loading/skeleton-loading'

export const HomeView = () => {
  return (
    <Layout>
      <div className={style.home_container}>
        <Search />
        <PokemonList
          onLoading={(item, index) => <SkeletonLoader key={index} />}
          onError={() => console.log('cagaste')}
        >
          {(pokemon) => (
            <PokemonCard
              key={`${pokemon.id}card`}
              name={pokemon.name}
              image={pokemon.sprites.front_shiny}
              id={pokemon.id}
              types={pokemon.types}
              favorite={pokemon.favorite}
            />
          )}
        </PokemonList>
      </div>
    </Layout>
  )
}
