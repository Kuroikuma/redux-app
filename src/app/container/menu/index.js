import { MenuView } from '../../components/menu'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  let navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return <MenuView goHome={goHome} />
}
