import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';

// component ekle login içine//

const Main = props => (
    <Switch>
        <Route exact path = '/' component={Welcome}/>
        <Route exact path = '/Welcome' component={Dashboard}/>
    </Switch>
);

export default Main;