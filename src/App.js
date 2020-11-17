import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import PlanetsDetails from './components/planet/PlanetsDetails';
import Home from './components/home/Home';
import Start from './components/home/Start';
import Game from './components/game/Game';
import NavBar from './components/home/NavBar';
import FormValidation from './components/about/Form';
import { GameProvider } from './components/game/GameContext';
import { StartProvider } from './components/home/StartContext';

export default function App() {
  return (
    <GameProvider>
      <StartProvider>
        <div className="App">
          <Router>
            <div className="mainContainer">
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/start" component={Start} />
                <Route path="/game" component={Game} />
                <Route path="/about">
                  <FormValidation />
                  <About />
                </Route>
                <Route exact path="/:id" component={PlanetsDetails} />
              </Switch>
            </div>
          </Router>
        </div>
      </StartProvider>
    </GameProvider>
  );
}
