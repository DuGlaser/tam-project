import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  LinearProgress
} from "@material-ui/core";
import Appbar from "../components/Appbar";

const Home = props => {
  const { isLoading, request } = props;

  // [WIP]
  // useEffect(() => {
  //   request(getRoomInfo);
  // }, [room]);
  //

  const room = ["hoge"];
  return (
    <nav>
      <Appbar />
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <List>
          {room.map(rooms => {
            return (
              <ListItem component={Link} to={`/${rooms}`}>
                <ListItemText>{rooms}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      )}
    </nav>
  );
};
export default Home;
