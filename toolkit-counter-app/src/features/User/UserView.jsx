import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserView() {
  const dispatch=useDispatch()
  const users=useSelector(state=>state.user)
  console.log(users)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  const {isLoading,user,error}=users;
  
  return (
    <div>
        <h1>User</h1>
        {
          (isLoading) && <h1>Loading....</h1>
        }
        {
          (user) && user.map(u=><h1>{u.name}</h1>)
        }
        {
          (error) && <h1>{error.message}</h1>
        }
    </div>
  )
}

export default UserView