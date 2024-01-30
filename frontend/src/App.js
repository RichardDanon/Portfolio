import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import './App.css';
import LandingPage from './Pages/LandingPage'


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={LandingPage} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
