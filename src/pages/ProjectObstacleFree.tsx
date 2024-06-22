import React, { Fragment } from 'react'
import Header from '../components/Header'
import github from '../assets/img/github.png'
import of1 from '../assets/img/of1.gif'
import of2 from '../assets/img/of2.gif'
import of3 from '../assets/img/of3.gif'
import of4 from '../assets/img/of4.gif'
import of5 from '../assets/img/of5.gif'
import Footer from '../components/Footer';

function ProjectObstacleFree() {

  window.scrollTo(0,0);

  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-36 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 className='pb-2.5 mb-10 font-extrabold border-b-2 border-indigo-400 text-lg'><span className='text-4xl pl-3'>Obstacle - Free</span></h2>
          <div className='flex gap-10 text-lg items-start'>
            <div className='w-1/2 flex flex-col gap-3'>
              <img src={process.env.PUBLIC_URL + '/obstacle-free.png'} alt="obstacle-free" className='object-contain'/>
              <img src={of1} alt="옵프 주변장소 출력" />
              <img src={of2} alt="옵프 선택 지역 조회" />
              <img src={of3} alt="옵프 페이지네이션" />
              <img src={of4} alt="옵프 장소검색" />
              <img src={of5} alt="옵프 포커스 이동 접근" />
            </div>
            <div className='w-1/2 leading-8'>

              <p>관광지의 편의시설 정보를 확인할 수 있는 서비스</p>
              <p className='text-sm mb-4'>프로젝트 기간 : 24.04.12 ~ 24.04.16 (5일)</p>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>기술 스택</h3>
              <div className='flex flex-wrap gap-2 mb-3'>
                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='html5'/>
                <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt='css3'/>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
                <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt='jquery'/>
              </div>
              <h3 className='mb-2'><span className='text-indigo-400 pr-2'>•</span>구현 기능</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>-</span>위치 기반 주변 장소 출력<br/>
                <span className='text-amber-300 pr-2'>-</span>지역 선택 조회<br/>
                <span className='text-amber-300 pr-2'>-</span>페이지네이션<br/>
                <span className='text-amber-300 pr-2'>-</span>장소 검색<br/>
                <span className='text-amber-300 pr-2'>-</span>포커스 이동 접근
              </p>
              <h3><span className='text-indigo-400 pr-2'>•</span>트러블 슈팅</h3>
              <p className='mb-3 pl-6'>
                <span className='text-amber-300 pr-2'>nav bar focus가 되지 않는 문제</span><br/>
                <span className='text-amber-300 pr-2'>-</span>문제 : tab키와 enter키로 nav bar에 접근할 수 없는 문제가 있었습니다.<br/>
                <span className='text-amber-300 pr-2'>-</span>원인 : 페이지별로 적용되어 있던 js 파일을 하나로 통합 후 카테고리에 따라 클릭이벤트로 페이지를 이동하도록 설정 해 li태그 내의 a 태그를 제거한 것이 원인이었습니다. li태그는 기본적으로 포커스를 받을 수 있는 요소가 아니어서 접근이 불가능했습니다.<br/>
                <span className='text-amber-300 pr-2'>-</span>해결 : li 태그에 tabindex="0" role="button" 속성을 사용해 포커스를 받을 수 있도록 하고, keyup 이벤트로 enter키를 사용해 접근 가능하도록 개선했습니다.
              </p>
              <button className='bg-amber-400 flex items-center py-2 px-3 mt-2.5 ml-2 rounded-full overflow-hidden hover:scale-105 hover:bg-amber-400'><img src={github} alt="github" className='w-6 pr-1'/><a href="https://github.com/Sooooyeon/Obstacle_Free" target='blank' className='text-neutral-900 text-sm font-bold'>GitHub Repository</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default ProjectObstacleFree