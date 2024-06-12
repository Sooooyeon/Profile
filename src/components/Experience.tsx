import React from 'react'
import reactLibrary from '../assets/img/react-lib.png'
import typescript from '../assets/img/ts.png'

function Experience() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='experience'>
      <h3 className='py-10 text-3xl text-center'>EXPERIENCE</h3>
      <div className='p-10 bg-gray-700 rounded-xl' >
        <h4  className='w-fit px-4 py-2 mt-2 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>Work</h4>
        <div className='border-l-4 border-indigo-400 pl-5'>
          <h5 className='text-xl'>이지젠</h5>
          <p className='mb-2'>(2022.8 - 2023.5)</p>
          <p className='pb-10'>- 이지젠, 이지젠 보건소몰 웹 페이지 제작 및 운영<br/>
            - 카달로그, 패키지 디자인, 상세페이지 등 전반적인 디자인 업무 담당<br/>
            - SNS 운영 담당</p>
          <h5 className='text-xl'>피앙</h5>
          <p className='mb-2'>(2021.9 - 2022.8)</p>
          <p className='pb-10'>- 웹페이지 수정 및 사이트 운영 담당<br/>
            - 패키지 디자인, 배너, 콘텐츠 디자인 등 전반적인 디자인 업무 담당<br/>
            - SNS 마케팅 담당</p>
          <h5 className='text-xl'>마미데이</h5>
          <p className='mb-2'>(2021.2 - 2021.7)</p>
          <p className='pb-10'>- 마미데이 웹페이지 수정 및 사이트 운영<br/>
            - 전반적인 디자인 업무 담당<br/>
            - 라이브커머스 기획</p>
        </div>
        <h4  className='w-fit px-4 py-2 mt-20 mb-4 bg-neutral-900 rounded-full tracking-wider text-lg'>Books<span className='text-sm'> (전자책 집필 참여)</span></h4>
        <div className='border-l-4 border-indigo-400 pl-5'>
          <div className='flex items-center flex-wrap '>
            <div className='flex flex-col'>
              <h5 className='text-xl mb-2.5'>핵심만 담은 React 상태 관리 찍어먹기</h5>
              <div>
                <p className='mb-2.5'>React 상태관리 라이브러리의 특징 집필</p>
                <a href='https://paullabworkspace.notion.site/React-4423cc4341e14f8ab2c7a5f34ad1e409' target='blank' className='w-fit px-3 py-2 mb-8 h-10  bg-gray-200 text-neutral-900 text-sm rounded-full hover:bg-indigo-400 hover:text-white hover:transition-all hover:duration-200'>eBook Notion 바로가기</a>
                <a href='https://ridibooks.com/books/2773000082?_s=search&_q=%ED%95%B5%EC%8B%AC%EB%A7%8C%EB%8B%B4%EC%9D%80%EB%A6%AC%EC%95%A1%ED%8A%B8&_rdt_sid=search&_rdt_idx=2' target='blank'className='w-fit px-3 py-2 ml-2 h-10  bg-gray-200 text-neutral-900 text-sm rounded-full hover:bg-indigo-400 hover:text-white hover:transition-all hover:duration-200'>리디북스에서 보기</a>
              </div>
            </div>
            <img src={reactLibrary} alt="핵심만 담은 React 상태 관리 찍어먹기" className='w-28 ml-6' />
          </div>
          <div className='flex items-center flex-wrap mt-20'>
            <div className='flex flex-col'>
              <h5 className='text-xl'>핵심만 담은 타입스크립트 찍어먹기</h5>
              <div>
                <p className='mb-2.5'>5장, 8장, 9장 중 일부 집필</p>
                <a href='https://muddy-butterkase-06d.notion.site/16e54d4babfa481db7b200a56b0405e2' target='blank' className='w-fit px-3 py-2 mb-8 h-10  bg-gray-200 text-neutral-900 text-sm rounded-full hover:bg-indigo-400 hover:text-white hover:transition-all hover:duration-200'>eBook Notion 바로가기</a>
                <a href='https://ridibooks.com/books/2773000094?_s=search&_q=%ED%95%B5%EC%8B%AC%EB%A7%8C%EB%8B%B4%EC%9D%80%EB%A6%AC%EC%95%A1%ED%8A%B8&_rdt_sid=search&_rdt_idx=1' target='blank'className='w-fit px-3 py-2 ml-2 h-10  bg-gray-200 text-neutral-900 text-sm rounded-full hover:bg-indigo-400 hover:text-white hover:transition-all hover:duration-200'>리디북스에서 보기</a>
              </div>
            </div>
            <img src={typescript} alt="핵심만 담은 타입스크립트 찍어먹기" className='w-28 ml-6' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience