import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';


const App: React.FC = () => {
  return (<>
  <Navbar/>
  <Routes>
    <Route path='/' element={<TodosPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
  </Routes>
  </>);
}

export default App;
