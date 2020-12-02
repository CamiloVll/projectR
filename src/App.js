import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Methods from './components/pages/Methods';
//import Solutions from './components/pages/Solutions';
//import Resources from './components/pages/Resources';
import Graphic from './components/Notices/Graphic';
import Sensibility from './components/Notices/Sensibility';
import Simplex from './components/Notices/Simplex';
import Simp from "./components/metodos/todos";
import Metodos from './components/metodos'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/graphic' component={Graphic} />
          <Route path='/sensibility' component={Sensibility} />
          <Route path='/simplex' component={Simplex} />
          <Route exact path="/metodos" component={Metodos} />
          <Route exact path="/metodos/todos" component={Simp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

