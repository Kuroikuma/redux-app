import './singlePokemon.style.css'

export const Bar = ({ handleImage }) => {
  return (
    <ul className="singleContainer__changeImg">
      {Array(4)
        .fill('')
        .map((item, index) => (
          <li
            key={index}
            className="singleContainer__changeImg__item"
            onClick={() => handleImage(index + 1)}
          >
            <p>{index + 1}</p>
          </li>
        ))}
    </ul>
  )
}
