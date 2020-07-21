import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import Workload from './components/Workload';

// component ekle login içine//

const Main = props => (
    <Switch>
        <Route exact path = '/' component={Welcome}/>
        <Route exact path = '/Welcome' component={Dashboard}/>
        <Route exact path = '/Workload' component={Workload}/>
    </Switch>
);

export default Main;