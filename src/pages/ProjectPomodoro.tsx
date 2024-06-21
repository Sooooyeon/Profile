import React, { Fragment } from 'react'
import Header from '../components/Header'
import github from '../assets/img/github.png'
import pomo1 from '../assets/img/pomo1.gif'
import pomo2 from '../assets/img/pomo2.gif'
import pomo3 from '../assets/img/pomo3.gif'
import Footer from '../components/Footer';


function ProjectObstacleFree() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'><span className='text-4xl pl-3'>POMPDORO</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={process.env.PUBLIC_URL + '/pomodoro.png'} alt="pomodoro" className='object-contain'/>
              <img src={pomo1} alt="타이머 기능"/>
              <iframe height="315" src="https://www.youtube.com/embed/Y9Q-blg-Bc4" title="pomodoro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              <img src={pomo2} alt="할일 관리"/>
              <img src={pomo3} alt="캘린더"/>
            </div>
            <div className='w-1/2 leading-8'>

              <p>뽀모도로 타이머를 적용한 TodoList</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 24.03.21 ~ 24.03.22 (2일)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
              </div>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>타이머<br/>
                <span className='text-amber-300 pr-2'>-</span>할 일 관리<br/>
                <span className='text-amber-300 pr-2'>-</span>캘린더<br/>
                <span className='text-amber-300 pr-2'>-</span>날씨 정보 표시
              </p>
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/Sooooyeon/POMODORO/tree/main" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectObstacleFree