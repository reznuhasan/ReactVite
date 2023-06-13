import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../components/usecontext/useContext'
import { StudentContext } from '../components/usecontext/studentContext';
import { countContext } from './GrandParent';
function GrandChild() {
  const userData=useContext(AppContext)
  console.log(userData);
  const studentData=useContext(StudentContext);
  console.log(studentData)
  const counterContext=useContext(countContext);
  console.log(counterContext)
  return (
    <div>
        <button type='button' onClick={()=>counterContext.countDispatch({type:"INCREMENT",value:5})}>INCREMENT</button>
        <button type='button' onClick={()=>counterContext.countDispatch({type:"DECREMENT",value:5})}>DECREMENT</button>
    </div>
  )
}

export default GrandChild