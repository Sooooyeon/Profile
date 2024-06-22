import React, { Fragment } from 'react'
import Header from '../components/Header'
import resumates from '../assets/img/resumates.png'
import github from '../assets/img/github.png'
import Footer from '../components/Footer';

function ProjectMoamoa() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'>[팀프로젝트]<span className='text-4xl pl-3'>Resumates</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={resumates} alt="resumates" className='object-contain'/>
            </div>
            <div className='w-1/2 leading-8'>
              <p>이력서 템플릿으로 이력서를 생성할 수 있는 서비스</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 24.06.17 ~ 24.07.10 (약 3주, <span className='text-amber-300'> 현재 진행중</span>)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
                <img  src="https://img.shields.io/badge/react-2D333B?style=for-the-badge&logo=react&logoColor=61DAFB" alt='react'/>
                <img  src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=#5A29E4" alt='Axios'/>
                <img  src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt='nodedotjs'/>
                <img  src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt='mongodb'/>
                <img  src="https://img.shields.io/badge/Styled component-2D333B?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093" alt='styledcomponents'/>
                <img  src="https://img.shields.io/badge/prettier-2D333B?style=for-the-badge&logo=prettier&logoColor=#F7B93E" alt='prettier'/>
                <img  src="https://img.shields.io/badge/Eslint-2D333B?style=for-the-badge&logo=Eslint&logoColor=#4B32C3" alt='Eslint'/>
              </div>
              <h3><span className='text-indigo-400 pr-2'>•</span>구현 UI</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>회원가입 페이지<br/>
                <span className='text-amber-300 pr-2'>-</span>템플릿 목록 페이지<br/>
                <span className='text-amber-300 pr-2'>-</span>버튼 컴포넌트
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>회원가입<br/>
                <span className='text-amber-300 pr-2'>-</span>이력서 저장 및 인쇄
              </p>
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/Resumates/Resumates" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectMoamoa