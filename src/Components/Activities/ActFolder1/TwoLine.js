import React from 'react'
import { Outlet } from 'react-router-dom'
import Line from '../Line'

const TwoLine = () => {
  return (
    <div className='bg-warning' style={{height:"100%"}}>
      <div className='bg-danger col-8 d-flex justify-content-center align-items-center' style={{height:"70%"}}>
      <Line name={"M"}></Line>
      </div>
      <div className='bg-secondary d-flex justify-content-center align-items-center' style={{height:"30%"}} >
        2
      </div>
    </div>



  )
}

export default TwoLine