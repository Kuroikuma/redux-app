import style from './style.module.css'

export const SearchView = () => {
  return (
    <input
      className={style.input}
      type="text"
      placeholder="find your favorite pokemon..."
    />
  )
}
