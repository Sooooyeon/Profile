import React, { Fragment } from 'react'
import MyInfo from '../components/MyInfo'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Header from '../components/Header'
import Project from '../components/Project'
import Experience from '../components/Experience'

function Home() {
  return (
    <Fragment>
      <Header/>
      <div className='max-w-5xl container mx-auto py-5 mt-48 flex flex-col'>
        <MyInfo/>
        <AboutMe/>
        <Skills/>
        <Project/>
        <Experience/>
      </div>
    </Fragment>
  )
}

export default Home