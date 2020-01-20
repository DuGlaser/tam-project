import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = props => {
  const { html, setHtml } = props;

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="editor"
      width="50vw"
      height="90vh"
      fontSize={20}
      highlightActiveLine={true}
      tabSize={2}
      showPrintMargin={false}
      onChange={prev => setHtml(prev)}
      value={html}
    />
  );
};

export default Editor;
