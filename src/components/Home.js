import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Appbar from "../components/Appbar";

const chatroom = ["hoge", "huga", "huge"];

const Home = () => {
  return (
    <nav>
      <Appbar />
      <List>
        {chatroom.map(_ => {
          return (
            //TODO: URLはサーバー側が発行した
            //ルームを一意に決定できる文字列にする
            <ListItem component={Link} to={"/about"}>
              <ListItemText>部屋のタイトル</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
export default Home;
