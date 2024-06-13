import React from 'react'

function MoveBtn() {

  return (
    <div className='font-semibold'>
      <button className='w-16 h-16 bg-amber-400 rounded-full fixed bottom-28 right-10 border-4 border-amber-400'
      onClick={()=> window.scrollTo(0,0)}
      >
        <div className='flex flex-col items-center'>
          <span className='text-neutral-900'>▲</span>
          <span className='text-neutral-900 text-xs'>TOP</span>
        </div>
      </button>
      <button className='w-16 h-16 bg-amber-400 rounded-full fixed bottom-10 right-10 border-4 border-amber-400'
      onClick={()=>window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        <div className='flex flex-col items-center'>
          <span className='text-neutral-900 text-xs mt-2.5'>BOTTOM</span>
          <span className='text-neutral-900'>▼</span>
        </div>
      </button>
    </div>
  )
}

export default MoveBtn
