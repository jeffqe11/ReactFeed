import axios from "axios";

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        //getting comments
        const comment = response.data;

        dispatch(fetchCommentSuccess(comment));
      })
      .catch((error) => {
        // error cannot fetch comments
        dispatch(fetchCommentFailure(error.message));
      });
  };
};

export const fetchCommentRequest = () => {
  return {
    type: "FETCH_COMMENT_REQUEST",
  };
};

export const fetchCommentSuccess = (comments) => {
  return {
    type: "FETCH_COMMENT_SUCCESS",
    payload: comments,
  };
};

export const fetchCommentFailure = (error) => {
  return {
    type: "FETCH_COMMENT_FAILURE",
    payload: error,
  };
};

export const addComment = (comment) => {
  return {
    type: "ADD_COMMENT",
    payload: comment,
  };
};
