import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateGroup from "./features/CreateGroup";
import GroupOverview from "./features/GroupOverview";
import Home from "./features/Home";
import MainLayout from "./features/MainLayout";
import TraitMap from "./features/TraitMap";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/traits">
          <TraitMap />
        </Route>
        <Route path="/groups/create">
          <CreateGroup />
        </Route>
        <Route path="/groups/:id">
          <GroupOverview />
        </Route>
      </Switch>
    </MainLayout>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
