import React, { Fragment } from 'react'
import Header from '../components/Header'
import github from '../assets/img/github.png'
import Footer from '../components/Footer';

function ProjectCashBook() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'><span className='text-4xl pl-3'>CashBook</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={process.env.PUBLIC_URL + '/cashbook.png'} alt="moamoa" className='object-contain'/>
            </div>
            <div className='leading-8'>
              <p>가계부 응용프로그램</p>
              <p className='text-sm mb-4'>프로젝트 기간 : </p>
              <h3><span className='text-indigo-400 pr-2'>•</span></h3>
              <p className='mb-3'>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span>
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span></h3>
              <p className='mb-3'>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span>
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span></h3>
              <p className='mb-4'>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span><br/>
                <span className='text-amber-300 pl-6 pr-2'>-</span>

              </p>
                
              
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/FRONTENDSCHOOL7/final-18-moamoa" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectCashBook