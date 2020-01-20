import React, { useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  LinearProgress
} from "@material-ui/core";
import Appbar from "../components/Appbar";
import { getNoteList } from "../query/query";

const Home = props => {
  const { isLoading, request, data } = props;

  if (data.notes.length === 0) {
    request(getNoteList());
  }

  return (
    <nav>
      <Appbar />
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <List>
          {data.notes.map(note => {
            return (
              <ListItem key={note.id} component={Link} to={`/note/${note.id}`}>
                <ListItemText>{note.title}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      )}
    </nav>
  );
};
export default Home;
