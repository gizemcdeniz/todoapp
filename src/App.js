import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { AddKolon } from './components/AddKolon';
import { EditKolon } from './components/EditKolon';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <GlobalProvider>
      <Router>
      <Switch>
          <Route exact path= "/" component={Welcome}/>
          <AddKolon path="/addkolon" component={AddKolon} />
          <EditKolon path="/edit/:id" component={EditKolon}/>
      </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
