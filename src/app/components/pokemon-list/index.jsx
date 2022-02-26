import './style.css'

export const PokemonListView = ({
  children,
  list = [],
  error,
  onError,
  loading,
  onLoading,
}) => {
  console.log('🚀 ~ file: index.jsx ~ line 11 ~ loading', loading)

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
