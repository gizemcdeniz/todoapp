import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Main from './Router' 

function App() {
  return (
     <BrowserRouter>
     <Route component={Main}/>
     </BrowserRouter>
  );
}

export default App;
