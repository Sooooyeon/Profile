import React from 'react'
import Work from './experience/Work'
import Books from './experience/Books'
import Education from './experience/Education'
import Certificate from './experience/Certificate'

function Experience() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide mb-28' id='experience'>
      <h3 className='py-10 text-3xl text-center'>EXPERIENCE</h3>
      <div className='p-10 bg-gray-700 rounded-xl' >
        <h4  className='w-fit px-4 py-2 mt-2 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>Work</h4>
        <Work/>
        <h4  className='w-fit px-4 py-2 mt-20 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>Books<span className='text-sm'> (전자책 집필 참여)</span></h4>
        <Books/>
        <h4  className='w-fit px-4 py-2 mt-20 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>EDUCATION</h4>
        <Education/>
        <h4  className='w-fit px-4 py-2 mt-20 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>CERTIFICATE</h4>
        <Certificate/>
      </div>

    </div>
  )
}

export default Experience