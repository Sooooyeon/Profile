import React from 'react'

function MyInfo() {
  return (
    <div className='flex items-center justify-center gap-16 px-4'>
      <div className='text-indigo-300 w-2/3'>
        <h2 className='text-5xl mb-9 leading-normal text-amber-400' id='greeting'><div className='text-3xl'><p className='mb-4'>안녕하세요!</p>○ 동그라미 개발자 , </div><span className='text-white'>장수연</span>입니다! </h2>
        <p className='text-md'>동그란 성격으로 변화에 잘 적응하며, 주변 사람들과의 조화를 중시하는 개발자 장수연입니다 : )<br/>다른 이들과 지식을 공유하며 성장하는 것을 즐깁니다. 알고리즘 스터디, 기술서 읽기 스터디 등에 참여하며 지식을 확장하고 있습니다. 꾸준함의 가치를 믿으며 매일 꾸준한 공부, 1일 1커밋을 하기위해 노력합니다.</p>
      </div>
      <img src="" alt="프로필사진" className='w-1/3 aspect-square bg-white rounded-full' />
      
    </div>
  )
}

export default MyInfo