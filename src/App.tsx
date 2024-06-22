import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectMoamoa from './pages/ProjectMoamoa';
import ProjectResumates from './pages/ProjectResumates'
import ProjectObstacleFree from './pages/ProjectObstacleFree';
import ProjectCashBook from './pages/ProjectCashBook';
import ProjectPomodoro from './pages/ProjectPomodoro';
import ProjectFruitsFruits from './pages/ProjectFruitsFruits';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<ProjectList/>} />
        <Route path='/project/MOAMOA' element={<ProjectMoamoa/>} />
        <Route path='/project/Resumates' element={<ProjectResumates/>} />
        <Route path='/project/Obstacle-Free' element={<ProjectObstacleFree/>} />
        <Route path='/project/CashBook' element={<ProjectCashBook/>} />
        <Route path='/project/Pomodoro' element={<ProjectPomodoro/>} />
        <Route path='/project/Fruits-Fruits' element={<ProjectFruitsFruits/>} />
      </Routes>
    </div>
  );
}

export default App;
