import React from "react";
//material ui
import Grid from "@material-ui/core/Grid";
//component
import PostsList from "./postsList";
import Appbar from "./AppBarFeed";

export default function Layout() {
  return (
    <>
      <Appbar></Appbar>
      <Grid container style={{ paddingTop: 100 }}>
        <Grid item xs></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <PostsList></PostsList>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
}
