import { getData } from "../api/Services";


export const getPosts = () => async (dispatch) => {
  const  {data}  = await getData("posts");

  dispatch({
    type: "GET_POSTS",
    payload: data,
  });
};



// export const SignupAction = (data, history) => async (dispatch) => {
//   const { data: signupData } = await getData('users/', data);

//   const user = signupData.find((d) => d.email === data.email);

//   if (user) {
//     alert('User Already Exists');
//   } else {
//     let { phNo, ...rest } = data;
//     phNo = encryptPassword(phNo);
//     let values = { ...rest, phNo };
//     await postData('users/', values);
//     history('/login');
//   }
// };
