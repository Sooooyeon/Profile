import React from 'react'

function AboutMe() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='about'>
        <h3 className='py-10 text-3xl text-center'>ABOUT ME</h3>
        <div className='grid grid-cols-3 gap-10 justify-center text-center'>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-name.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>이름</h3>
              <p className='text-lg mt-1'>장수연</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-calendar.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>생년월일</h3>
              <p className='text-lg mt-1'>1995.09.30</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-location.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>주소지</h3>
              <p className='text-lg mt-1'>서욽특별시 금천구</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-phone.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>연락처</h3>
              <p className='text-lg mt-1'>010.2589.3284</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-mail.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>이메일</h3>
              <p className='text-lg mt-1'>tn56dus@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={process.env.PUBLIC_URL + "icon-name.png"} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>학력</h3>
              <p className='text-lg mt-1'>한국방송통신대학교<br/>(컴퓨터과학과)</p>
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default AboutMe