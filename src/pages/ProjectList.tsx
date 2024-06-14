import React, { Fragment } from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import MoveBtn from '../components/MoveBtn';
import Footer from '../components/Footer';

function ProjectList() {
  
  window.scrollTo(0,0);
  
  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 flex flex-col'>
        <Project></Project>
        <MoveBtn/>
      </div>
        <Footer/>
    </Fragment>
  )
}

export default ProjectList