import style from './style.module.css'
import { Menu } from '../../container/menu'

export const LayoutView = ({ children }) => {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.content}>{children}</div>
    </div>
  )
}
