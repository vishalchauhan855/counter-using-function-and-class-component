import React, { useState } from 'react'

function FuntionCounter() {
  const[count,setCount]=useState(0)
  function inc(){
    setCount( count+1)
  }

   function dec(){
     count > 0 ? setCount(count - 1) : null;
  }


  return (
    
    <>
    <div className=' col-lg-5 mx-auto shadow my-5 p-4 bg-light rounded-bottom-3'>
        <h1 className=' text-center text-opacity-50'>{count}</h1>
        <div className=' btn-group d-flex justify-content-center p-2'>
            <button className='btn btn-info shadow  text' onClick={inc}>Increment</button>
            <button className=' btn btn-danger shadow' onClick={dec}>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default FuntionCounter
