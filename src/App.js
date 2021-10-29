import React from "react";
import "./App.css";
import Socket from './components/Socket'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "./components/MapView";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
