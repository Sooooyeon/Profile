import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import moamoa from '../assets/img/moamoa.png'
import obstacleFree from '../assets/img/obstacle-free.png'
import cashBook from '../assets/img/cashbook.png'
import pomodoro from '../assets/img/pomodoro.png'
import project from '../assets/data/project.json';


function Project() {
  const {pathname} = useLocation();
  console.log(pathname)
  const navigate = useNavigate();

    type ProjectItem = {
      id: number,
      name: string,
      desc: string,
      img: string
    }

  interface ProjectData {
    project: ProjectItem[]
  }
  
  const projects:ProjectItem[] = (project as ProjectData).project;

  console.log(projects);
  console.log(projects[0].id);
  console.log(projects[1].id);
  console.log(projects[3].id);


  return (
    <div className='max-w-5xl container mx-auto pt-28 tracking-wide' id='project'>
      <h3 className='py-10 text-3xl text-center'>PROJECTS</h3>
        <div className='p-10 bg-gray-700 rounded-xl flex flex-col items-center' >
          <div className='grid grid-cols-2 gap-3 justify-center text-center'>
            { 
              projects.map((item, index)=>(
                (pathname === '/' && index < 4)?
                <div onClick={()=>navigate(`/project/${item.name}`)} className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
                <img className=' mb-3' src={process.env.PUBLIC_URL + item.img} alt="moamoa" />
                <div>
                  <h4 className='text-xl'>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
                :
                null
              ))
            }
            {
              projects.map((item)=>(
                pathname === '/project' ?
                <div onClick={()=>navigate(`/project/${item.name}`)} className='bg-white rounded-xl text-neutral-900 flex flex-col items-center justify-between p-3 hover:border-4 hover: border-gray-700 hover:outline hover: outline-amber-400 hover:outline-4 hover:transition-all hover:duration-200'>
                <img className=' mb-3' src={process.env.PUBLIC_URL + item.img} alt="moamoa" />
                <div>
                  <h4 className='text-xl'>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
                :
                null
              ))
            }
          </div>
          {
            pathname === '/' ? 
            <>
            <div className='text-5xl leading-4 mt-4 text-gray-200'>.</div>
            <div className='text-5xl leading-4 text-gray-300'>.</div>
            <div className='text-5xl leading-4 text-gray-400'>.</div>
            <Link to='/project'> <button  className='m-auto my-0 px-4 py-2 mt-4 bg-neutral-900 rounded-full hover:bg-amber-400 hover:text-neutral-900 hover:transition-all hover:duration-200 hover:font-bold'><span className='tracking-wider text-lg'>More</span></button></Link> 
            </>
            :
            null
          }
          
      </div>
    </div>
  )
}

export default Project