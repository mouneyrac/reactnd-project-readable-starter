import { combineReducers } from "redux";

import { SET_USER_FULLNAME } from "../actions";

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

const initialUserState = {
  fullname: "Anonymous"
};

export default combineReducers({
  user
});
