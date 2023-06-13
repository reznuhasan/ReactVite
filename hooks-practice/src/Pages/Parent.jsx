import React, { useContext } from 'react'
import Child from './Child'
import { AdminContext } from '../components/usecontext/adminContext'

function Parent() {
    const adminData=useContext(AdminContext);
    console.log(adminData)
  return (
    <div>
        <h1>This is Parent component</h1>
        <Child/>
    </div>
  )
}

export default Parent