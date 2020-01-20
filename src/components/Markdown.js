import React, { useState } from "react";
import Appbar from "./Appbar";
import Editor from "./Editor";
import Preview from "./Preview";
import { Box } from "@material-ui/core";

const Markdown = () => {
  const [html, setHtml] = useState("");

  return (
    <>
      <Appbar />
      <Box display="flex">
        <Editor html={html} setHtml={setHtml} />
        <Preview html={html} />
      </Box>
    </>
  );
};

export default Markdown;
