import React from 'react'
import { Link } from 'react-router-dom'
import moamoa from '../assets/img/moamoa.png'
import obstacleFree from '../assets/img/obstacle-free.png'
import cashBook from '../assets/img/cashbook.png'
import pomodoro from '../assets/img/pomodoro.png'


function Project() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='project'>
      <h3 className='py-10 text-3xl text-center'>PROJECTS</h3>
        <div className='p-10 bg-gray-700 rounded-xl flex flex-col items-center' >
        <div className='grid grid-cols-2 gap-3 justify-center text-center'>
          <Link to='/project/moamoa' className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
            <img className=' mb-3' src={moamoa} alt="moamoa" />
            <div>
              <h4 className='text-xl'>MOAMOA<span className='text-sm'>(팀프로젝트)</span></h4>
              <p>축제와 체험 정보를 공유하는 SNS 플랫폼</p>
            </div>
          </Link>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
            <img className=' mb-3' src={obstacleFree} alt="obstacle-free" />
            <div>
              <h4 className='text-xl'>Obstacle-Free</h4>
              <p>관광지의 편의시설 정보를 확인할 수 있는 서비스</p>
            </div>
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
            <img className='mb-3' src={cashBook} alt="" />
            <div>
              <h4 className='text-xl'>CashBook</h4>
              <p>가계부 응용프로그램</p>
            </div>
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
            <img className='mb-3' src={pomodoro} alt="pomodoro" />
            <div>
              <h4 className='text-xl'>POMOODORO</h4>
              <p>뽀모도로 타이머를 적용한 TodoList </p>
            </div>
          </div>
        </div>
        <div className='text-5xl leading-4 mt-4 text-gray-200'>.</div>
        <div className='text-5xl leading-4 text-gray-300'>.</div>
        <div className='text-5xl leading-4 text-gray-400'>.</div>
        <Link to='/project'> <button  className='m-auto my-0 px-4 py-2 mt-4 bg-neutral-900 rounded-full hover:bg-amber-400 hover:text-neutral-900 hover:transition-all hover:duration-200 hover:font-bold'><span className='tracking-wider text-lg'>More</span></button></Link>
      </div>
    </div>
  )
}

export default Project