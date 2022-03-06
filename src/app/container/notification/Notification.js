import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NotificationView } from '../../components/notification/Notification.view'

export const Notification = ({ message }) => {
  const [notification, setNotification] = useState(false)
  const [isError, setIsError] = useState(false)

  const error = useSelector((state) => state.ui.error)
  const search = useSelector((state) => state.pokemon.search)

  const toggleNotification = () => {
    setNotification(!notification)
    setTimeout(() => {
      setNotification(false)
      console.log('que pasho')
    }, 3000)
  }

  useEffect(() => {
    if (error && search) {
      toggleNotification()
    }
    setIsError(error)
  }, [error])

  return (
    <NotificationView
      notification={notification}
      isError={isError}
      message={message}
    />
  )
}
