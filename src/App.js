import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AddEvents from './components/AddEvents/AddEvents';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvent">
            <AddEvents />
          </Route>
          <Route path="/dashboard">{/* <Dashboard /> */}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
