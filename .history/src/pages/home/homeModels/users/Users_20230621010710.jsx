import './users.css'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import useMutateToggleFollow from '../../../../backend/queryHooks/follow/useMutateToggleFollow'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const Users = () => {
  const [suggestedUsers, setSuggestedUsers] = useState('')
  const { getUserQuery } = useGetUsers('c32e8a58-6e47-4dfb-83ce-23d9792ffbac')
  const queryclient = useQueryClient()
  const searchUsers = queryclient
    .getQueryData(['getUsers'])
    ?.filter((user) => user.username.includes(suggestedUsers))
  const {
    toggleFollowMutation,
    toggleUnfollowMutation,
  } = useMutateToggleFollow()
  console.log(toggleUnfollowMutation?.data,toggleFollowMutation)
  const data = JSON.parse(localStorage.getItem('authData'))

  return (
    <>
      <div className="users-container">
        <div className="search-users">
          <input
            type="text"
            onChange={(e) => {
              setSuggestedUsers(e.target.value)
            }}
          />
        </div>
        {searchUsers?.map((user) => (
          <div key={user._id} className="user">
            <div className="image-user">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div className="about-user">
              <p>{user.username}</p>
              <button
                onClick={() => {
                  toggleFollowMutation.mutate(user._id)
                }}
              >
                follow
              </button>
              <button
                onClick={() => {
                  toggleUnfollowMutation.mutate(user._id)
                }}
              >
                Unfollow
              </button>
            </div>
          </div>
        ))}
        <div>
          <span>Show more</span>
        </div>
      </div>
    </>
  )
}

export default Users