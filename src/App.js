
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";

export default function App() {
  return (
    <Router>
       <div className="App mt-5">
          <div className="container">
          <Switch>
          <Route path="/order">
              <Order />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}
