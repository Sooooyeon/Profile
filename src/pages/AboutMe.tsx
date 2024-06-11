import React from 'react'

type Props = {}

function AboutMe({}: Props) {
  return (
    <div className='max-w-5xl container mx-auto py-5 mt-48 flex flex-col'>
      <div className='flex items-center justify-center gap-16 mb-16'>
        <div className='text-indigo-300 w-2/3'>
          <h2 className='text-5xl mb-9 leading-normal'><p className='text-3xl'>🙋🏻‍♀️안녕하세요!<br/><br/>동그라미 개발자, </p>장수연입니다🙆🏻‍♀️ </h2>
          <p className='text-md'>동그란 성격으로 변화에 잘 적응하며, 주변 사람들과의 조화를 중시하는 개발자 장수연입니다 : )<br/>다른 이들과 지식을 공유하며 성장하는 것을 즐깁니다. 알고리즘 스터디, 기술서 읽기 스터디 등에 참여하며 지식을 확장하고 있습니다. 꾸준함의 가치를 믿으며 매일 꾸준한 공부, 1일 1커밋을 하기위해 노력합니다.</p>
        </div>
        <img src="" alt="프로필사진" className='w-1/3 aspect-square bg-white rounded-full' />
        
      </div>

      <div className='max-w-5xl container mx-auto'>
        <h3 className='mt-20 py-8 text-2xl text-center'>ABOUT ME</h3>
        <div className='grid grid-rows-2 grid-flow-col gap-4 justify-center'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe