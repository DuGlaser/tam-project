import React from "react";
import Appbar from "./Appbar";
import TextArea from "./TextArea";

const DetailPage = props => {
  const { title } = props;
  return (
    <>
      <Appbar />
      <h1>{title}</h1>
      <TextArea />
    </>
  );
};

export default DetailPage;
