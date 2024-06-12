import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='project'>
      <h3 className='py-10 text-3xl text-center'>PROJECTS</h3>
        <div className='p-6 bg-gray-700 rounded-xl' >
        <div className='grid grid-cols-2 gap-3 justify-center text-center'>
          <Link to='/project/moamoa' className='bg-white rounded-xl text-neutral-900 flex flex-col items-center'>
            <h4>box1</h4>
            <img src="" alt="" />
          </Link>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center'>
            <h4>box1</h4>
            <img src="" alt="" />
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center'>
            <h4>box1</h4>
            <img src="" alt="" />
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center'>
            <h4>box1</h4>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project