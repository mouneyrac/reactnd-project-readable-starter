import { combineReducers } from "redux";

import {
  SET_USER_FULLNAME,
  RESET_CATEGORIES,
  SET_POSTS,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  SET_SORTING,
  SET_POST_COMMENTS,
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT
} from "../actions";

function user(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER_FULLNAME:
      const { fullname } = action;
      return {
        ...state,
        fullname: fullname
      };
    default:
      return state;
  }
}

function sorting(state = initialSorting, action) {
  switch (action.type) {
    case SET_SORTING:
      const { sorting } = action;
      return sorting;
    default:
      return state;
  }
}

function categories(state = initialCategoriesState, action) {
  switch (action.type) {
    case RESET_CATEGORIES:
      const { categories } = action;
      return categories;
    default:
      return state;
  }
}

function posts(state = initialPostsState, action) {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      return posts ? posts : {};
    case DELETE_POST:
      const { postId } = action;

      return {
        ...state,
        [postId]: null
      };
    case ADD_POST:
    case UPDATE_POST:
      const { post } = action;

      return {
        ...state,
        [post.id]: post
      };

    default:
      return state;
  }
}

function comments(state = initialCommentsState, action) {
  switch (action.type) {
    case SET_POST_COMMENTS:
      const { comments } = action;
      return comments ? { ...state, ...comments } : {};
    case DELETE_COMMENT:
      const { commentId } = action;

      return {
        ...state,
        [commentId]: null
      };
    case ADD_COMMENT:
    case UPDATE_COMMENT:
      const { comment } = action;

      return {
        ...state,
        [comment.id]: comment
      };

    default:
      return state;
  }
}

const initialUserState = {
  fullname: "Anonymous"
};

const initialCategoriesState = {
  loading: { path: "loading", name: "Loading categories..." },
  waiting: { path: "redux", name: "Thank you for waiting :)" }
};

const initialPostsState = [];

const initialCommentsState = [];

const initialSorting = "points";

export default combineReducers({
  user,
  categories,
  posts,
  sorting,
  comments
});
