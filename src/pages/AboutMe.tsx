import React from 'react'

type Props = {}

function AboutMe({}: Props) {
  return (
    <div className='max-w-4xl container mx-auto py-5 mt-40 flex flex-col'>
      <div className='flex items-center justify-center gap-16 mb-16'>
        <div className='text-indigo-300 w-2/3'>
          <h2 className='text-4xl mb-9'>0000 개발자 000 입니다.</h2>
          <p>어쩌구 저쩌구 소개글 </p>
        </div>
        <img src="" alt="프로필사진" className='w-1/3 aspect-square bg-white rounded-full' />
        
      </div>

      <div>
        <h3>skill</h3>
      </div>
    </div>
  )
}

export default AboutMe