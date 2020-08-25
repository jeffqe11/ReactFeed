/*
AppBarFeed -> This component contains the top bar of the application
props -> n/a
*/

import React from "react";

//material ui
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

//styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    bottom: "auto",
    color: "#FFFFFF",
    backgroundColor: "#2980b9",
    alignItems: "center",
  },
}));

export default function AppBarFeed() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Feed
        </Typography>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}
