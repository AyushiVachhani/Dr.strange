import React from 'react'
import { useSelector } from 'react-redux'

const Component_C = () => {
    const value = useSelector((state) => state.value);
  return (
    <>
      <h1>component C</h1>
      <p>value from globle store : {value}</p>
    </>
  )
}

export default Component_C
