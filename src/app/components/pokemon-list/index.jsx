import './style.css'

export const PokemonListView = ({
  children,
  list = [],
  error,
  onError,
  loading,
  onLoading,
}) => {
  return (
    <>
      {error && onError()}
      {loading && (
        <div className="PokemonList">{Array(12).fill('').map(onLoading)}</div>
      )}
      <div className="PokemonList">
        {!loading && list.length && list.map(children)}
      </div>
    </>
  )
}
