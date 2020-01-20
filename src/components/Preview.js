import React from "react";
import marked from "marked";

const Preview = props => {
  const { html } = props;
  const style = {
    width: "50vw",
    height: "90vh"
  };
  return (
    <>
      <div
        style={style}
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(html) }}
      ></div>
    </>
  );
};

export default Preview;
