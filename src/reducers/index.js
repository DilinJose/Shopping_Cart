import { combineReducers } from "redux";

const initialState = {
  posts: [],
  editDatas: {},
};

const stateReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};



export default combineReducers({
  stateReducers,
});
