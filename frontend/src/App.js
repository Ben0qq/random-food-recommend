import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Education from './components/Education/Education';
import Career from './components/Career/career';
import Main from './components/Main/main'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route path="/career">
            <Career/>
          </Route>
          <Route exact path="/links">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
