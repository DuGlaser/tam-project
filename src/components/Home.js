import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Appbar from "../components/Appbar";

const Home = () => {
  return (
    <nav>
      <Appbar />
      <List>
        <ListItem component={Link} to={"/"}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem component={Link} to={"/about"}>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem component={Link} to={"/users"}>
          <ListItemText>Users</ListItemText>
        </ListItem>
      </List>
    </nav>
  );
};
export default Home;
