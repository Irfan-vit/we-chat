import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
  const { authData } = useAuth()
  console.log(authData, 'inside')
  const newPostApi = async (postData) => {
    console.log(postData, 'inside')
    const res = await axios.post(
      `/api/posts`,
      {
        ...postData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data)
    return res.data
  }
  const editPostApi = async (postData) => {
    console.log(postData, 'inside')
    const res = await axios.delete(
      `/api/posts/`,
      {
        ...postData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data)
    return res.data
  }
  const addPostsMutation = useMutation(newPostApi)
  return { addPostsMutation }
}

export default useMutatePostsData