import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about/About';
import PlanetsDetails from './components/planet/PlanetsDetails';
import Home from './components/home/Home';
import Start from './components/home/Start';
import Game from './components/game/Game';
import FormValidation from './components/about/Form';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <div className="toggle">
              <input type="checkbox" />
              <span />
              <span />
              <span />
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/game">Game</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/start" component={Start} />
            <Route path="/game" component={Game} />
            <Route path="/about">
              <FormValidation />
              <About
                name="Romain"
                description="je suis un membre de la Wild Code School"
                avatar="https://randomuser.me/api/portraits/men/40.jpg"
              />
              <About
                name="Laurence"
                description="je suis un membre de la Wild Code School"
                avatar="astro.jpg"
              />
              <About
                name="Antoine"
                description="je suis un membre de la Wild Code School"
                avatar="https://randomuser.me/api/portraits/men/22.jpg"
              />
              <About
                name="Aymeric"
                description="je suis un membre de la Wild Code School"
                avatar="https://randomuser.me/api/portraits/men/61.jpg"
              />
            </Route>
            <Route exact path="/:id" component={PlanetsDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
