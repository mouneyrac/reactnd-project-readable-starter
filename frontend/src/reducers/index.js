import { combineReducers } from "redux";

import { SET_USER_FULLNAME, RESET_CATEGORIES } from "../actions";

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

function categories(state = initialCategoriesState, action) {
  switch (action.type) {
    case RESET_CATEGORIES:
      const { categories } = action;
      return categories;
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

export default combineReducers({
  user,
  categories
});