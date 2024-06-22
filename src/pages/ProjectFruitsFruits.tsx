import React, { Fragment } from 'react'
import Header from '../components/Header'
import github from '../assets/img/github.png'
import fruits1 from '../assets/img/fruits1.png'
import fruits2 from '../assets/img/fruits2.png'
import fruits3 from '../assets/img/fruits3.png'
import fruits4 from '../assets/img/fruits4.png'
import fruits5 from '../assets/img/fruits5.gif'
import fruits6 from '../assets/img/fruits6.gif'
import Footer from '../components/Footer';


function ProjectObstacleFree() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'><span className='text-4xl pl-3'>Fruits-Fruits</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={fruits6} alt="게임종료"/>
              <img src={fruits5} alt="게임승리"/>
              <img src={fruits1} alt="첫 화면"/>
              <img src={fruits2} alt="실행화면"/>
              <img src={fruits3} alt="게임종료"/>
              <img src={fruits4} alt="게임승리"/>
            </div>
            <div className='w-1/2 leading-8'>

              <p>HTML5, javascript를 사용한 미니게임</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 24.04.28 ~ 24.04.29 (2일)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='html5'/>
                <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt='css3'/>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
              </div>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>키보드로 고양이 조작<br/>
                <span className='text-amber-300 pr-2'>-</span>고양이와 바위 충돌 시 게임 종료<br/>
                <span className='text-amber-300 pr-2'>-</span>고양잉와 과일 충돌 시 점수 획득<br/>
                <span className='text-amber-300 pr-2'>-</span>100점을 획득할 경우 승리하며 게임 종료<br/>
                <span className='text-amber-300 pr-2'>-</span>배경음악 및 충돌 효과음 설정
              </p>
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/Sooooyeon/Fruits-fruits" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectObstacleFree