import React from "react";
import Appbar from "./Appbar";

const DetailPage = props => {
  const { title } = props;
  return (
    <>
      <Appbar />
      <h1>{title}</h1>
    </>
  );
};

export default DetailPage;
