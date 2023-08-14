import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
          <div className=' w-full h-screen flex justify-center items-center'>
              <button className='px-4 py-2 rounded-md border bg-blue-500 hover:bg-blue-700 text-gray-300'><Link to={"/login"}>Login pge</Link></button>
       </div>
    </div>
  )
}

export default Home
