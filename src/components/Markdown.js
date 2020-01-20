import React, { useState, useEffect } from "react";
import Appbar from "./Appbar";
import Editor from "./Editor";
import Preview from "./Preview";
import { Box, Fab, LinearProgress } from "@material-ui/core";
import { getNoteContent, UpdateNote } from "../query/query";
import SaveIcon from "@material-ui/icons/Save";

const Markdown = props => {
  const { isLoading, request, data } = props;
  const [html, setHtml] = useState("");

  const ID = props.match.params.id;

  useEffect(() => {
    request(getNoteContent(ID));
  }, []);
  //
  const saveMarkdown = () => {
    request(UpdateNote(ID, html));
  };

  // if (!isLoading) {
  //   setHtml(data.note.content);
  // }

  return (
    <>
      <Appbar />
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Box display="flex">
          <Editor html={html} setHtml={setHtml} />
          <Preview html={html} />
          <Fab color="primary" aria-label="add">
            <SaveIcon onClick={saveMarkdown} />
          </Fab>
        </Box>
      )}
    </>
  );
};

export default Markdown;
