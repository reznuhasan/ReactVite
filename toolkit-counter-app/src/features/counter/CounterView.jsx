import React from 'react'
import ButtonView from './ButtonView';
import { useSelector } from 'react-redux';

function CounterView() {
    const count=useSelector(state=>state.counter.count)
    
  return (
    <div>
        <h1>Count:{count}</h1>
        <ButtonView/>
    </div>
  )
}

export default CounterView;