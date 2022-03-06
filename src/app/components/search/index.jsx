import style from './style.module.css'

export const SearchView = ({
  search,
  setSearched,
  submitSearch,
  Notification,
  message,
  loading,
}) => {
  return (
    <>
      <Notification message={message} />
      <form onSubmit={submitSearch}>
        <input
          disabled={loading}
          onChange={setSearched}
          value={search}
          className={style.input}
          type="text"
          placeholder="find your favorite pokemon..."
        />
      </form>
    </>
  )
}
