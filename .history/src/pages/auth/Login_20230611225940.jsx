import { useLocation, useNavigate } from 'react-router-dom'
import useLogin from '../../backend/queryHooks/auth/useLogin'
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loginMutation } = useLogin()
  loginMutation.isSuccess?navigate(`${location?.state?.from?.pathname || '/'}`, { replace: true })
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const userData = {
              username: formData?.get('userName'),
              password: formData?.get('password'),
            }
            console.log(userData)
            loginMutation.mutate(userData)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="userName" required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password" required />
          </label>
          <button>login</button>
        </form>
        <button
          onClick={() => {
            loginMutation.mutate({
              username: 'adarshbalika',
              password: 'adarshBalika123',
            })
          }}
        >
          Guest
        </button>
      </div>
    </>
  )
}
export default Login