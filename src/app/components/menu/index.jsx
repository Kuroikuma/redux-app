import style from './style.module.css'
import Logo from '../../../assets/images/logo_v4.svg'

export const MenuView = ({ goHome, goFavorites }) => {
  return (
    <div className={style.container}>
      <div className={`${style.space1} ${style.item}`}></div>
      <div className={`${style.logo} ${style.item}`}>
        <img src={Logo} alt="logo" />
      </div>
      <div onClick={goHome} className={`${style.home} ${style.item}`}>
        <h2>HOME</h2>
      </div>
      <div className={`${style.space2} ${style.item}`}></div>
      <div onClick={goFavorites} className={`${style.favorites} ${style.item}`}>
        <h2>Favorites</h2>
      </div>
    </div>
  )
}
