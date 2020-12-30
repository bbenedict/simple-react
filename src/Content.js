import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Cats from "./Cats";
import Dogs from "./Dogs";

export default function Content() {
  return (
    <Router>
      <div style={{display: "flex", height: "100%" }}>
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            padding: "10px",
            backgroundColor: "green"
          }}>
          <Link to="/" style={{ color: "lightblue", textDecoration: "none" }}>Home</Link>
          <Link to="/cats" style={{ color: "lightblue", textDecoration: "none" }}>Cats</Link>
          <Link to="/dogs" style={{ color: "lightblue", textDecoration: "none" }}>Dogs</Link>
        </div>
        <div style={{ padding: "20px" }}>
          <Switch>
            <Route path="/cats">
              <Cats />
            </Route>
            <Route path="/dogs">
              <Dogs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
