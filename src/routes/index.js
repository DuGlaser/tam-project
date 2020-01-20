import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Markdown from "../containers/Markdown";

const NoteRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/note/:id" component={Markdown} />
        </Switch>
      </div>
    </Router>
  );
};

export default NoteRouter;
