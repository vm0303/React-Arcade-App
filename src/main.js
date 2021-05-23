import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/Home";
import toh from "./towersOfHanoi/toh";
import slidingPuzzle from "./slidingPuzzle";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/toh" component={toh} />
      {<Route path="/slidingPuzzle" component={slidingPuzzle} />}
    </Switch>
  </main>
);

export default Main;
