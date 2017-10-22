import axios from "axios";
export const AUTHTOKEN = "whatever-you-want";
export const APIURL = "http://localhost:3001";

export const fetchCategories = () =>
  axios({
    method: "get",
    url: `${APIURL}/categories`,
    data: {},
    headers: { Authorization: AUTHTOKEN }
  });

export const addPost = data => {
  axios({
    method: "post",
    url: `${APIURL}/posts`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });
};

export const editPost = data =>
  axios({
    method: "put",
    url: `${APIURL}/posts/${data.id}`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });
