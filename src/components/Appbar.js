import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() => ({
  appbar: {
    height: "10vh"
  }
}));

const Appbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton component={Link} to="/">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
