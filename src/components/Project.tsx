import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='project'>
      <h3 className='py-10 text-3xl text-center'>PROJECTS</h3>
        <div className='p-10 bg-gray-700 rounded-xl flex flex-col items-center' >
        <div className='grid grid-cols-2 gap-3 justify-center text-center'>
          <Link to='/project/moamoa' className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3'>
            <img className=' mb-3' src={process.env.PUBLIC_URL + "moamoa.png"} alt="" />
            <div>
              <h4 className='text-xl'>MOAMOA<span className='text-sm'>(팀프로젝트)</span></h4>
              <p>축제와 체험 정보를 공유하는 SNS 플랫폼</p>
            </div>
          </Link>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3'>
            <img className=' mb-3' src={process.env.PUBLIC_URL + "obstacle-free.png"} alt="" />
            <div>
              <h4 className='text-xl'>Obstacle-Free</h4>
              <p>관광지의 편의시설 정보를 확인할 수 있는 서비스</p>
            </div>
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3'>
            <img className='mb-3' src={process.env.PUBLIC_URL + "cashbook.png"} alt="" />
            <div>
              <h4 className='text-xl'>CashBook</h4>
              <p>가계부 응용프로그램</p>
            </div>
          </div>
          <div className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3'>
            <img className='mb-3' src={process.env.PUBLIC_URL + "pomodoro.png"} alt="" />
            <div>
              <h4 className='text-xl'>POMOODORO</h4>
              <p>뽀모도로 타이머를 적용한 TodoList </p>
            </div>
          </div>
        </div>
        <div className='text-5xl leading-4 mt-4 text-gray-200'>.</div>
        <div className='text-5xl leading-4 text-gray-300'>.</div>
        <div className='text-5xl leading-4 text-gray-400'>.</div>
        <Link to='/project' className='m-auto my-0 px-4 py-2 mt-4 bg-neutral-900 rounded-full hover:bg-amber-400 hover:text-neutral-900 hover:transition-all hover:duration-200 hover:font-bold'><span className='tracking-wider text-lg'>More</span></Link>
      </div>
    </div>
  )
}

export default Project