import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Business from './pages/Business';
import Politic from './pages/Politc';
import Sport from './pages/Sport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path='/' element = {<App/>}/> 
    <Route path='/sport' element = {<Sport/>}/>
    <Route path='/business' element = {<Business/>}/> 
    <Route path='/politic' element = {<Politic/>}/>
    </Routes>
  </Router>,
);

