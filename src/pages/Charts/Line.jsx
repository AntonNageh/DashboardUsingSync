import React from 'react'
import { ChartsHeader, Header, LineChart } from '../../Components/'

const Line = () => {
  return (
    <div className='m-4 md:m-10 md:mt-0 mt-24 p-10 bg-white  rounded-3xl'> 
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line