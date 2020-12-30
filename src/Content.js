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
      <div style={{display: "flex", padding: "20px"}}>
        <div style={{display: "flex", flexDirection: "column", width: "100px" }}>
          <Link to="/">Home</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/dogs">Dogs</Link>
        </div>
        <div>
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
