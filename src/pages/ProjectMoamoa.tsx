import React, { Fragment } from 'react'
import Header from '../components/Header'
import moamoa from '../assets/img/moamoa.png'
import github from '../assets/img/github.png'
import Footer from '../components/Footer';

function ProjectMoamoa() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'>[팀프로젝트]<span className='text-4xl pl-3'>MOAMOA</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={moamoa} alt="moamoa" className='object-contain'/>
              <iframe height="315" src="https://www.youtube.com/embed/0r-J16cTubE?si=rSTrk-iF8XbvE0HR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className='w-1/2 leading-8'>
              <p>축제 및 체험 정보를 공유하는 SNS 플랫폼</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 23.10.12 ~ 23.11.07 (약 4주)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
                <img  src="https://img.shields.io/badge/react-2D333B?style=for-the-badge&logo=react&logoColor=61DAFB" alt='react'/>
                <img  src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=#5A29E4" alt='Axios'/>
                <img  src="https://img.shields.io/badge/Recoil-2D333B?style=for-the-badge&logo=react&logoColor=3578E5" alt='Recoil'/>
                <img  src="https://img.shields.io/badge/Styled component-2D333B?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093" alt='styledcomponents'/>
                <img  src="https://img.shields.io/badge/prettier-2D333B?style=for-the-badge&logo=prettier&logoColor=#F7B93E" alt='prettier'/>
                <img  src="https://img.shields.io/badge/Eslint-2D333B?style=for-the-badge&logo=Eslint&logoColor=#4B32C3" alt='Eslint'/>
              </div>
              <h3><span className='text-indigo-400 pr-2'>•</span>구현 페이지</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>게시글 상세페이지<br/>
                <span className='text-amber-300 pr-2'>-</span>행사 상세페이지<br/>
                <span className='text-amber-300 pr-2'>-</span>메인페이지 구현
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>동적 라우팅 적용<br/>
                <span className='text-amber-300 pr-2'>-</span>좋아요, 댓글, 신고, 삭제 기능<br/>
                <span className='text-amber-300 pr-2'>-</span>카카오 지도 api를 사용한 행사 장소 출력<br/>
                <span className='text-amber-300 pr-2'>-</span>장소 추천 기능
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span>리팩토링</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>axios instance 분리<br/>
                <span className='text-amber-300 pr-2'>-</span>무한 스크롤 적용<br/>
                <span className='text-amber-300 pr-2'>-</span>대비율에 맞는 컬러로 메인 컬러 변경해 접근성 향상<br/>
                <span className='text-amber-300 pr-2'>-</span>성능 개선을 위해 이미지 압축 기능 적용

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

export default ProjectMoamoa