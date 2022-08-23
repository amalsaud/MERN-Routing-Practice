import React from "react";
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Value from "./components/Value";
import Color from "./components/Color";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/:value">
            <Value />
          </Route>
          <Route path="/:word/:color/:background">
            <Color />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
