import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Router' 
import kolon from './kolon.css'


function App() {
  return (
     <BrowserRouter>
     <Route component={Main}/>
     </BrowserRouter>
  );
}

export default App;
