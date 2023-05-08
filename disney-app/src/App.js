import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import DisneyList from './Components/DisneyList';
import {Route,Routes}from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <nav>
        <NavBar/>
        <Routes>
          <Route exact path='/'element={<Home/>}/>
          <Route path='/disneylist'element={<DisneyList/>}/>
          </Routes>
      </nav>
    </div>
  );
}

export default App;
