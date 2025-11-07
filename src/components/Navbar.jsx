import React from 'react'
import { FaDiceD20 } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center  h-20 bg-yellow-600 w-full'>
      <h1 className='text-2xl'>Pathfinder Stats</h1>
    <FaDiceD20 size={50}/>
    </div>
  )
}

export default Navbar
