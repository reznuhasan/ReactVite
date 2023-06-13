import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { MyContext } from '../components/usecontext/myContext'
import { rizwanContext } from '../components/usecontext/rizwanContext'

function Child() {
    const myData=useContext(MyContext)
    console.log(myData)
    const rizwanData=useContext(rizwanContext);
    console.log(rizwanData)
  return (
    <div>
        <h1>This is child Component</h1>
        <GrandChild/>
    </div>
  )
}

export default Child