import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return <HashRouter>
    <>
      <Route exact path='/' component={Home} />
      <h1>App</h1>
    </>
  </HashRouter>;

  ;
}

export default App;
