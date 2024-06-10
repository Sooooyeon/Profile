import React from 'react'

type Props = {}

function AboutMe({}: Props) {
  return (
    <div className='py-5 mt-44'>
      <div className='max-w-6xl container mx-auto flex items-center justify-center gap-16'>
        <img src="" alt="프로필사진" className='w-80 h-80 bg-white rounded-full' />
        <div className='text-indigo-300'>
          <h2>안녕하세요 0000 입니다.</h2>
          <p>어쩌구 저쩌구 소개글 </p>
        </div>
      </div>
      <div>
        <h3>skill</h3>
      </div>
    </div>
  )
}

export default AboutMe