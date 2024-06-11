import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='w-screen bg-neutral-900 h-24 fixed top-0 left-1/2 transform -translate-x-1/2 px-4 border-b-2 border-gray-700'>
      <header className='max-w-6xl container mx-auto h-24  flex justify-between items-center gap-16'>
        
          <img className='w-32' src={process.env.PUBLIC_URL + "profile-logo.png"} alt="Developer SooyeonJang" />
          <nav>
              <ul className='flex space-x-8'>
                <a href="#about" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>ABOUT ME</a>
                <a href="#skills" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>SKILLS</a>
                <a href="#project" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>PROJECTS</a>
                <a href="#experience" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>EXPERIENCE</a>
              </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header