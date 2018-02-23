import actionTypes from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  try {
    const user = await axios.get("/api/getUser");
    console.log(user);
    dispatch({
      type: actionTypes.FETCH_User,
      payload: { user: user.data }
    });
  } catch (error) {
    throw error;
  }
};
export const saveTags = tag => {
  return {
    type: actionTypes.SELECTED_TAGS,
    payload: tag
  };
};

// export const getAllBlogs = () => async dispatch => {
//   try {
//     const allBlogs = await axios.get("/api/getAllBlogs");

//     dispatch({
//       type: actionTypes.GET_ALL_BLOGS,
//       payload: allBlogs.data.blogs
//     });
//   } catch (error) {
//     throw error;
//   }
// };
// export const fetchBlog = blogId => async dispatch => {
//   try {
//     const blog = await axios.get(`/api/fetchBlog/${blogId}`);
//     console.log(blog.data);
//     dispatch({
//       type: actionTypes.FETCH_BLOG,
//       payload: blog.data
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// export const uploadBlog = values => async dispatch => {
//   // console.log(values);
//   const res = await axios.post("/api/newBlog", values);
//   console.log(res);
//   return { type: "" };
// };
