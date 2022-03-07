import './favorites.style.css'
import { Layout } from '../../container/layout'
import { Search } from '../../container/search'
import { PokemonList } from '../../container/pokemon-list'
import { SkeletonLoader } from '../../components/skeleton-loading/skeleton-loading'
import { PokemonCard } from '../../container/pokemon-card'

export const FavoritesView = () => {
  return (
    <Layout>
      <div className={'fav_container'}>
        <Search />
        <PokemonList
          band="favorites"
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
