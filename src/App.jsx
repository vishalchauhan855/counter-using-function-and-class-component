import React from 'react'
import FuntionCounter from './Layouts/FuntionCounter'
import ClassComponent from'./Layouts/ClassComponent'

function App() {
  return (
  <>
  <h1 className=' text-light text-center text-capitalize my-5'>Function  component</h1>

  <FuntionCounter/>
  <h1 className=' text-light text-center text-capitalize'>class component</h1>
  <ClassComponent/>
  </>
  )
}

export default App
