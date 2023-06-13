import React from 'react'
import Parent from './Parent'

function GrandParent() {
  return (
    <div>
        <h1>this my GrandParent</h1>
        <Parent/>
    </div>
  )
}

export default GrandParent