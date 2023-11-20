import React from 'react'
import { Carding } from '../component'
import { Oneknee, Stylish, Young } from '../assets'

const Home = () => {
  return (
    <div className=' w-full'>  
      <Carding source={Young} />
      <Carding source={Stylish}/>
      <Carding source={Oneknee} />
    </div>
  )
}

export default Home