import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Home = () => {
  return (
    <nav>
      <List>
        <ListItem component={Link} to={"/"}>
          <ListItemText>hoge</ListItemText>
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
