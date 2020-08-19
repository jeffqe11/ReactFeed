import { combineReducers } from "redux";
import posts from "./reducers/posts";
import comments from "./reducers/comments";

//combine reducers
const rootReducer = combineReducers({
  posts: posts,
  comments: comments,
});

export default rootReducer;
