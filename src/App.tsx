import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectMoamoa from './pages/ProjectMoamoa';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<ProjectList/>} />
        <Route path='/project/moamoa' element={<ProjectMoamoa/>} />
      </Routes>
    </div>
  );
}

export default App;
