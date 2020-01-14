import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress
} from "@material-ui/core";
import Appbar from "../components/Appbar";

const Home = props => {
  const { isLoading } = props;
  // TODO:useEffectを使ってリストを取得?
  const chatroom = ["About"];
  return (
    <nav>
      <Appbar />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {chatroom.map(v => {
            return (
              //TODO: URLはサーバー側が発行した
              //ルームを一意に決定できる文字列にする
              <ListItem component={Link} to={`/${v}`}>
                <ListItemText>部屋のタイトル</ListItemText>
              </ListItem>
            );
          })}
        </List>
      )}
    </nav>
  );
};
export default Home;
