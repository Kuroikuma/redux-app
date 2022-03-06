import { Success } from '../icons/success'
import { Error } from '../icons/error'
import './notification.style.css'

export const NotificationView = ({ notification, isError, message }) => {
  return (
    <div className={notification ? 'notification show' : 'notification'}>
      <p>{isError ? message[0] : message[1]}</p>
      {isError ? <Error /> : <Success />}
    </div>
  )
}
