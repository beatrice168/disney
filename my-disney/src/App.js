import './App.css';
import React from 'react';
import NavBar from '../../my-disney/src/Components/NavBar';
import Home from '../../my-disney/src/Components/Home';
import DisneyList from '../../my-disney/src/Components/DisneyList';
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
