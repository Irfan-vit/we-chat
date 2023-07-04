import { Navigate, useLocation } from 'react-router-dom'

export default function RequiresAuth({ children }) {
 const token = (localStorage.getItem)
  const location = useLocation()
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}