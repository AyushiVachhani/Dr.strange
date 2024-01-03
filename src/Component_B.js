import React from 'react'
import { useDispatch } from 'react-redux'
import './index.css';

const Component_B = () => {
    const dispatch = useDispatch();
    const handelChange=(e)=>{
        const value = e.target.value;
        dispatch({type: 'SET_VAL' , payload: value});
    }
  return (
    <>
    <div className='block_b'>
      <h1>Component B</h1>
      <input type='text'  id ="text_box"onChange={handelChange} placeholder='Type here'/>
      </div>
    </>
  )
}

export default Component_B
