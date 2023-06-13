import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../components/usecontext/useContext'
import { StudentContext } from '../components/usecontext/studentContext';
function GrandChild() {
  const userData=useContext(AppContext)
  console.log(userData);
  const studentData=useContext(StudentContext);
  console.log(studentData)
  return (
    <div>
        <h1>This is Grand Child Component</h1>
    </div>
  )
}

export default GrandChild