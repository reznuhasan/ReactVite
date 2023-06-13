import React, { useContext, useState } from 'react'
import Child from './Child'
import { AdminContext } from '../components/usecontext/adminContext'

function Parent() {
    const [todo,setTodo]=useState({
        title:'',
        description:''
    })
    const adminData=useContext(AdminContext);
    console.log(adminData)
  return (
    <div>
        <span>{todo.title}</span><br />
        <input type="text" value={todo.title} onChange={(e)=>setTodo({
            ...todo,
            title:e.target.value,
        })}/> <br /> <br />
        <textarea name="todo" value={todo.description} onChange={(e)=>setTodo({
            ...todo,
            description:e.target.value
        })}></textarea><br />
        <span>{todo.description}</span>
        <Child/>
    </div>
  )
}

export default Parent