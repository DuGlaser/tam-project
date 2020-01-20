import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { router, NoteRouter } from "./routes";

const App = () => {
  return <NoteRouter />;
};

export default App;
