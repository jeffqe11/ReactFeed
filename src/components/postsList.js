//redux
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//material ui
import CircularProgress from "@material-ui/core/CircularProgress";

//component
import Post from "../components/post";

//actions
import { fetchPosts } from "../redux/actions/postActions";
import { fetchComments } from "../redux/actions/commentsActions";

function PostsList(props) {
  const { posts, fetch_Posts, fetch_Comments } = props;

  useEffect(() => {
    fetch_Posts();
    fetch_Comments();
  }, [fetch_Posts, fetch_Comments]);

  return (
    <div>
      {posts.loading ? (
        <CircularProgress />
      ) : posts.error ? (
        "Error loading posts, please try again."
      ) : (
        posts.posts.map((e) => {
          return (
            <Post key={e.id} title={e.title} body={e.body} id={e.id}></Post>
          );
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Posts: () => dispatch(fetchPosts()),
    fetch_Comments: (id) => dispatch(fetchComments(id)),
  };
};

PostsList.propTypes = {
  fetch_Posts: PropTypes.func.isRequired,
  fetch_Comments: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
