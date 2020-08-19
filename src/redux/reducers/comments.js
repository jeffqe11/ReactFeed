const initialState = {
  loading: false,
  comments: [],
  error: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COMMENT_SUCCESS":
      return {
        loading: false,
        comments: action.payload,
        error: "",
      };
    case "FETCH_COMMENT_FAILURE":
      return {
        loading: false,
        comments: [],
        error: action.payload,
      };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };

    default:
      return state;
  }
};
