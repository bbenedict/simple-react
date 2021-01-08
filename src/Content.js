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
import OwnershipChart from "./OwnershipChart";

export default function Content() {
  return (
    <Router>
      <div style={{display: "flex", height: "100%" }}>
        <nav 
          style={{
            display: "flex",
            flexDirection: "column",
            width: "13em",
            padding: ".5em",
            backgroundColor: "green"
          }}>
          <h3 style={{margin: ".5em 0 1em 0" }}>
            Table of contents
          </h3>
          <Link to="#main" style={{ color: "white", textDecoration: "none" }}>Skip to main</Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home page</Link>
          <Link to="/cats" style={{ color: "white", textDecoration: "none" }}>List of presidential cats</Link>
          <Link to="/dogs" style={{ color: "white", textDecoration: "none" }}>List of presidentail dogs</Link>
          <Link to="/owners" style={{ color: "white", textDecoration: "none" }}>Pet ownership 2018</Link>
        </nav>
        <main id="main" style={{ padding: "1em" }}>
          <Switch>
            <Route path="/cats">
              <Cats />
            </Route>
            <Route path="/dogs">
              <Dogs />
            </Route>
            <Route path="/owners">
              <OwnershipChart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};
