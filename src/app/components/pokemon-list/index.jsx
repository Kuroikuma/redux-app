import './style.css'

export const PokemonListView = ({
  children,
  list = [],
  error,
  onError,
  loading,
  onLoading,
}) => {
  const band = list.length ? true : ''

  return (
    <>
      {error && onError()}
      {loading && (
        <div className="PokemonList">{Array(12).fill('').map(onLoading)}</div>
      )}
      <div className="PokemonList">
        {!loading && band && list.map(children)}
      </div>
    </>
  )
}
