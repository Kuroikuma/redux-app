import { Layout } from '../../container/layout'
import './singlePokemon.style.css'
import { Image } from './Image'
import { Bar } from './Bar'
import { Section } from './Aside'

export const SinglePokemonView = ({ loading, handleImage, img }) => {
  return (
    <Layout>
      <main className="singleContainer">
        <Image loading={loading} img={img} />
        <Bar handleImage={handleImage} />
        <Section />
      </main>
    </Layout>
  )
}
