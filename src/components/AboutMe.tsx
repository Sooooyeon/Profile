import React from 'react'
import name from '../assets/img/icon-name.png'
import calendar from '../assets/img/icon-calendar.png'
import location from '../assets/img/icon-location.png'
import phone from '../assets/img/icon-phone.png'
import email from '../assets/img/icon-mail.png'
import edu from '../assets/img/icon-edu.png'

function AboutMe() {
  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='about'>
        <h3 className='py-10 text-3xl text-center'>ABOUT ME</h3>
        <div className='grid grid-cols-3 gap-10 justify-center text-center'>
          <div className='flex flex-col items-center'>
            <img src={name} className='w-16'  alt="이름" />
            <div>
              <h3 className='text-xl mt-3'>이름</h3>
              <p className='text-lg mt-1'>장수연</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={calendar} className='w-16'  alt="생년월일" />
            <div>
              <h3 className='text-xl mt-3'>생년월일</h3>
              <p className='text-lg mt-1'>1995.09.30</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={location} className='w-16'  alt="위치" />
            <div>
              <h3 className='text-xl mt-3'>주소지</h3>
              <p className='text-lg mt-1'>서욽특별시 금천구</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={phone} className='w-16'  alt="연락처" />
            <div>
              <h3 className='text-xl mt-3'>연락처</h3>
              <p className='text-lg mt-1'>010.2589.3284</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={email} className='w-16'  alt="이메일" />
            <div>
              <h3 className='text-xl mt-3'>이메일</h3>
              <p className='text-lg mt-1'>tn56dus@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img src={edu} className='w-16'  alt="학력" />
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