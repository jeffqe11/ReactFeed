/*
commentField -> This component contains the text field to add comments to posts
props:
  -add_Comment (function) -> send comment to redux status
  -id (number) -> id of the post in which the comment will be added

*/
import React, { useState } from "react";
import PropTypes from "prop-types";
//redux
import { connect } from "react-redux";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

//actions
import { addComment } from "../redux/actions/commentsActions";

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

function CommentField(props) {
  const { add_Comment, id } = props;
  const [comment, setComment] = useState("");

  const classes = useStyles();

  const createRandom = () => {
    return Math.random().toString(36).substr(2, 5);
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  const add = () => {
    var a = {
      postId: id,
      id: createRandom(),
      name: "You",
      email: "you@test.com",
      body: comment,
    };

    setComment("");
    add_Comment(a);
  };
  return (
    <ListItem className={classes.nested}>
      <TextField
        id="standard-full-width"
        label="Share your opinion"
        style={{ margin: 0 }}
        placeholder="Write your comment here"
        fullWidth
        onChange={(text) => {
          setComment(text.target.value);
        }}
        onKeyDown={(e) => {
          enterKey(e);
        }}
        value={comment}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <ListItemSecondaryAction onClick={add}>
        <IconButton edge="end" aria-label="delete">
          <SendIcon color="action" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_Comment: (comment) => dispatch(addComment(comment)),
  };
};

CommentField.propTypes = {
  add_Comment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentField);
