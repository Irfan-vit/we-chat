import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = () => {
  const ud = JSON.parse(localStorage.getItem('authData'))
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
    return res.data.posts
  }
  const getPostApi = async ({ queryKey }) => {
    const res = await axios.get(
      `/api/posts/436dd4a9-77d5-466a-af00-2cc732bf18e9`,
    )
    return res.data.post
  }
  const getUserPostApi = async ({ queryKey }) => {
    const user = queryKey[1]
    const res = await axios.get(`/api/posts/user/${user}`)
    return res.data.posts
  }
  const getPostsQuery = useQuery(['getPosts'], getPostsApi)
  const getPostQuery = useQuery(['getPost', ud.user._id], getPostApi, {
    enabled: !!ud.user._id,
  })
  const getUserPostsQuery = useQuery(
    ['getUserPosts', ud.user.username],
    getUserPostApi,
    {
      enabled: !!ud.user.username,
    },
  )

  return { getPostsQuery, getPostQuery, getUserPostsQuery }
}

export default useGetPosts