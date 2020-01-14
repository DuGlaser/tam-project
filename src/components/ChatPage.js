import React from "react";
import Appbar from "./Appbar";
import TextArea from "./TextArea";
import { CircularProgress } from "@material-ui/core";

const ChatPage = props => {
  const { isLoading } = props;
  return (
    <>
      <Appbar />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>ここにチャットを表示</h1>
        </div>
      )}
      <TextArea />
    </>
  );
};

export default ChatPage;
