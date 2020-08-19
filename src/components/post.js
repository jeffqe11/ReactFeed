import React from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

//components
import Comments from "./commentsList";
import CommentField from "./commentField";

//lodash
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  header: { borderRadius: 20 },
}));

function Post(props) {
  const { title, body, id, comments } = props;

  const myComments = _.filter(comments, function (o) {
    return o.postId === id;
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          className={classes.header}
          component="div"
          id="nested-list-subheader"
        >
          <Typography variant="h6" gutterBottom>
            Post
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {title}
          </Typography>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem>
        <ListItemIcon>
          <InsertEmoticonIcon style={{ fontSize: 40, color: "#37475A" }} />
        </ListItemIcon>
        <ListItemText primary={body} />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ChatBubbleOutlineRoundedIcon color="action" />
        </ListItemIcon>
        <ListItemText primary="Comments" />
        {open ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        disableStrictModeCompat={true}
      >
        <List component="div" disablePadding>
          <Comments comments={myComments}> </Comments>
          <CommentField id={id}></CommentField>
        </List>
      </Collapse>
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments ? state.comments.comments : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
