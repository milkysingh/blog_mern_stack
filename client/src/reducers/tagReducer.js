import actionTypes from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.SELECTED_TAGS:
      // const selectedTags = [...state];
      // const tagExist = selectedTags.findIndex(tag => {
      //   return tag === action.payload;
      // });

      // if (tagExist === -1) {
      //   selectedTags.push(action.payload);

      //   return selectedTags;
      // }

      // selectedTags.splice(tagExist, 1);

      // return selectedTags;
      return action.payload;

    default:
      return state;
  }
};
