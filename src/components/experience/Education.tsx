import React from 'react'
import education from '../../assets/data/education.json';

function Education() {

  type EducationItem = {
    id: number,
    name: string,
    period: string
  }

  interface EducationData {
  education: EducationItem[]
}
  
  const educations:EducationItem[] = (education as EducationData).education;

  console.log(educations);

  return (
    <div className='border-l-4 border-indigo-400 pl-5'>
      {educations.map((item)=>(
        <div key={item.id}>
          <h5 className='text-lg'>{item.name}</h5>
          <p className='mb-4 text-sm'>({item.period})</p>
        </div>
      ))}
    </div>
  )
}

export default Education;