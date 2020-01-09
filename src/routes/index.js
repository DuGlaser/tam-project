import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailPage from "../components/detailPage";
import Home from "../components/Home";

const routes = (
  <div>
    <Switch>
      <Route path="/about">
        <DetailPage title={"About"} />
      </Route>
      <Route path="/users">
        <DetailPage title={"Users"} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default routes;
