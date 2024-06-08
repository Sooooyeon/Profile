import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/profile-logo.png'

type Props = {}

function Header({}: Props) {
  return (
    <header className='h-24 flex justify-between items-center'>
      <img className='w-44' src={process.env.PUBLIC_URL + "profile-logo.png"} alt="Developer SooyeonJang" />
      <nav>
          <ul className='flex space-x-16'>
            <Link to="/" className=''>ABOUT ME</Link>
            <Link to="/projects" className=''>PROJECTS</Link>
            <Link to="/contact" className=''>CONTACT</Link>
          </ul>
      </nav>
    </header>
  )
}

export default Header