import React, { Fragment } from 'react'
import Header from '../components/Header'
import github from '../assets/img/github.png'
import cash1 from '../assets/img/cash1.png'
import cash2 from '../assets/img/cash2.png'
import cash3 from '../assets/img/cash3.png'
import cash4 from '../assets/img/cash4.png'
import cash5 from '../assets/img/cash5.png'
import cash6 from '../assets/img/cash6.png'
import cash7 from '../assets/img/cash7.png'
import cash8 from '../assets/img/cash8.png'
import cash9 from '../assets/img/cash9.png'
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
              <img src={process.env.PUBLIC_URL + '/cashbook.png'} alt="cashbook" className='object-contain'/>
              <img src={cash1} alt="비로그인" />
              <img src={cash2} alt="로그인" />
              <img src={cash3} alt="입금기능" />
              <img src={cash4} alt="출금기능" />
              <img src={cash5} alt="편집기능" />
              <img src={cash6} alt="삭제기능" />
              <img src={cash7} alt="우클릭 편집 및 삭제" />
              <img src={cash8} alt="월변경" />
              <img src={cash9} alt="월마감" />
            </div>
            <div className='leading-8'>
              <p>가계부 응용프로그램</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 24.05.27 ~ 24.05.29 (3일)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/csharp-512BD4?style=for-the-badge&logo=csharp&logoColor=white" alt='csharp'/>
                <img src="https://img.shields.io/badge/dotnet-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt='dotnet'/>
              </div>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>비로그인 시 입금, 출금 버튼 비활성화<br/>
                <span className='text-amber-300 pr-2'>-</span>입금, 출금 내역 등록<br/>
                <span className='text-amber-300 pr-2'>-</span>편집 및 삭제 기능<br/>
                <span className='text-amber-300 pr-2'>-</span>입금합, 출금합, 잔액 계산<br/>
                <span className='text-amber-300 pr-2'>-</span>파일 자동 저장<br/>
                <span className='text-amber-300 pr-2'>-</span>월 변경 기능<br/>
                <span className='text-amber-300 pr-2'>-</span>월 마감(잔액이월) 기능
              </p>
              
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/Sooooyeon/CashBook" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectCashBook