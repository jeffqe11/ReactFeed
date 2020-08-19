import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // getting posts
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        //cannot get posts
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const fetchPostsRequest = () => {
  return {
    type: "FETCH_POST_REQUEST",
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_POST_SUCCESS",
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: error,
  };
};
