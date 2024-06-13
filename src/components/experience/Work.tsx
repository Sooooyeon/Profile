import React from 'react'
import work from '../../assets/data/work.json';

function Work() {

  type WorkItem = {
    id: number,
    name: string,
    period: string,
    desc: string[]
  }

  interface WorkData {
  work: WorkItem[]
}
  
  const works:WorkItem[] = (work as WorkData).work;

  return (
    <div className='border-l-4 border-indigo-400 pl-5'>
      {works.map((item)=>(
        item.id < 5 ?
        <div key={item.id}>
          <h5 className='text-lg'>{item.name}</h5>
          <p className='mb-2 text-sm'>({item.period})</p>
          <p className='pb-10'>- {item.desc[0]}<br/>
            - {item.desc[1]}<br/>
            - {item.desc[2]}</p>
        </div>
        :
        null
      ))}
    </div>
  )
}

export default Work;