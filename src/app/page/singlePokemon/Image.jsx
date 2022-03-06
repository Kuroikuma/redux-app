import { SkeletonLoader } from '../../components/skeleton-loading/skeleton-loading'
import './singlePokemon.style.css'

export const Image = ({ loading, img }) => {
  return (
    <div className="singleContainer__img">
      {loading ? <SkeletonLoader /> : <img src={img && img} alt={img} />}
    </div>
  )
}
