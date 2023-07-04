import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const { authData } = useAuth()
  console.log(authData, 'inside')
  const mutateUserApi = async (userData) => {
    const res = await axios.post(`/api/users/edit`, userData, {
      headers: { authorization: token },
    })
    console.log(res.data)
    return res.data
  }
  const userDataMutation = useMutation(mutateUserApi)
  return { userDataMutation }
}

export default useMutateUserData