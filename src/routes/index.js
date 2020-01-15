import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import ChatPage from "../containers/ChatPage";

const routes = (
  <div>
    <Switch>
      <Route path="/about">
        <ChatPage title={"About"} />
      </Route>
      <Route path="/users">
        <ChatPage title={"Users"} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default routes;
