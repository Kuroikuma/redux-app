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
      {loading && onLoading()}
      <div className="PokemonList">{list.length && list.map(children)}</div>
    </>
  )
}
