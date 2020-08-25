/*
commentList -> displays the list of comments.
props:
  -comments (array) ->array of comments

*/
import React from "react";
import PropTypes from "prop-types";

//material ui
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: 10,
    borderRadius: 20,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  header: { borderRadius: 20 },
}));

export default function Comments(props) {
  const classes = useStyles();

  const { comments } = props;

  return (
    <>
      {comments.map((e) => {
        return (
          <div key={e.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <InsertEmoticonIcon
                  style={{ fontSize: 40, color: "#37475A" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={e.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`${e.email} - `}
                    </Typography>

                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                      style={{ overflowWrap: "break-word" }}
                    >
                      {`${e.body}`}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider light />
          </div>
        );
      })}
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
