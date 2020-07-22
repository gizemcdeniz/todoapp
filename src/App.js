import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { AddTask } from "./components/AddTask";
import { EditTask } from "./components/EditTask";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Welcome tasks={tasks} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Welcome} />
            <Route path="/add" component={AddTask} />
            <Route path="/edit/:id" component={EditTask} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App;