import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Education from './components/Education/Education';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/hobby">
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route path="/career">
          </Route>
          <Route exact path="/links">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
