import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectMoamoa from './pages/ProjectMoamoa';
import ProjectObstacleFree from './pages/ProjectObstacleFree';
import ProjectCashBook from './pages/ProjectCashBook';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<ProjectList/>} />
        <Route path='/project/MOAMOA' element={<ProjectMoamoa/>} />
        <Route path='/project/Obstacle-Free' element={<ProjectObstacleFree/>} />
        <Route path='/project/CashBook' element={<ProjectCashBook/>} />
      </Routes>
    </div>
  );
}

export default App;
