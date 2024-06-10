import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/profile-logo.png'

type Props = {}

function Header({}: Props) {
  return (
    <div className='w-screen bg-neutral-900 h-28 fixed top-0 left-1/2 transform -translate-x-1/2'>
      <header className='max-w-6xl container mx-auto h-28  flex justify-between items-center'>
        
          <img className='w-40' src={process.env.PUBLIC_URL + "profile-logo.png"} alt="Developer SooyeonJang" />
          <nav>
              <ul className='flex space-x-16'>
                <Link to="/" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>ABOUT ME</Link>
                <Link to="/projects" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>PROJECTS</Link>
                <Link to="/contact" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>CONTACT</Link>
              </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header