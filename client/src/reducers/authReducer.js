import actionType from "../actions/types";
export default (state = null, action) => {
  switch (action.type) {
    case actionType.FETCH_User:
      return action.payload.user || false;
    default:
      return state;
  }
};
