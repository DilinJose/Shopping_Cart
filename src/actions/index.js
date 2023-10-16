import { getData } from "../api/Services";

export const getPosts = () => async (dispatch) => {
  const  {data}  = await getData("posts");

  dispatch({
    type: "GET_POSTS",
    payload: data,
  });
};
