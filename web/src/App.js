import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListComponent from './component/discs/list.component';
import AddComponent from './component/discs/add.component';
import EditComponent from './component/discs/edit.component';

function App() {
  return (
    <div className="container">
          <Router>
              <div className="col-md-10">
                  <Switch>
                      <Route path="/" exact component={ListComponent} />
                      <Route path="/discs" component={ListComponent} />
                      <Route path="/add" component={AddComponent} />
                      <Route path="/edit" component={EditComponent} />
                  </Switch>
              </div>
          </Router>
    </div>
  );
}

export default App;
