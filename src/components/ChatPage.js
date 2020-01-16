import React, { useEffect } from "react";
import Appbar from "./Appbar";
import TextArea from "./TextArea";
import {
  LinearProgress,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const ChatPage = props => {
  const { isLoading, request } = props;

  // useEffect(() => {
  //   request(getMessageList(/*getMessageList*/));
  // }, []);

  const messageList = ["hoge", "huga"];

  return (
    <>
      <Appbar />
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <div>
          {messageList.map(text => {
            return (
              <div>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary={text} />
                  </ListItem>
                  {/* <Divider variant="inset" component="li" /> */}
                </List>
              </div>
            );
          })}
        </div>
      )}
      <TextArea />
    </>
  );
};

export default ChatPage;
