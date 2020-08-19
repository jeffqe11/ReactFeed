const initialState = {
  loading: false,
  posts: [],
  error: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POST_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_POSTS_FAILURE":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
