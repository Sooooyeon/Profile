import React from 'react'
import logo from '../assets/img/profile-logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
const {pathname} = useLocation();
const navigate = useNavigate();


  return (
    <header className='w-screen bg-neutral-900 h-24 fixed top-0 left-1/2 transform -translate-x-1/2 px-4 border-b-2 border-gray-700'>
      <div className='max-w-6xl container mx-auto h-24  flex justify-between items-center gap-16'>
        
          
          {
            pathname !== '/project'? 
            <>
              <a href='/'><img className='w-32' src={logo} alt="Developer SooyeonJang" /></a>
              <nav>
                <ul className='flex space-x-8'>
                  <a href="#about" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>ABOUT ME</a>
                  <a href="#skills" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>SKILLS</a>
                  <a href="#project" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>PROJECTS</a>
                  <a href="#experience" className='hover:text-amber-400 hover:scale-105 hover:transition-all'>EXPERIENCE</a>
                </ul>
              </nav>
            </>
          :
            <>
              <button onClick={()=> navigate(-1)} className='text-xl p-3 hover:text-amber-400 hover:scale-105 hover:transition-all'>← 이전페이지로</button>
              <a href='/'><img className='w-32' src={logo} alt="Developer SooyeonJang" /></a>
            </>
          }
          
          
      </div>
    </header>
  )
}

export default Header