import axios from "axios";
export const AUTHTOKEN = "whatever-you-want-2";
export const APIURL = "http://localhost:3001";

export const fetchCategories = () =>
  axios({
    method: "get",
    url: `${APIURL}/categories`,
    data: {},
    headers: { Authorization: AUTHTOKEN }
  });

export const fetchPosts = () =>
  axios({
    method: "get",
    url: `${APIURL}/posts`,
    data: {},
    headers: { Authorization: AUTHTOKEN }
  });

export const fetchPostComments = postId => {
  return axios({
    method: "get",
    url: `${APIURL}/posts/${postId}/comments`,
    data: {},
    headers: { Authorization: AUTHTOKEN }
  });
};

export const fetchCategory = categoryId =>
  axios({
    method: "get",
    url: `${APIURL}/${categoryId}/posts`,
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

export const updatePost = data =>
  axios({
    method: "put",
    url: `${APIURL}/posts/${data.id}`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });

export const deletePost = data =>
  axios({
    method: "delete",
    url: `${APIURL}/posts/${data}`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });

export const deleteComment = data =>
  axios({
    method: "delete",
    url: `${APIURL}/comments/${data}`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });

export const addComment = data => {
  axios({
    method: "post",
    url: `${APIURL}/comments`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });
};

export const updateComment = data =>
  axios({
    method: "put",
    url: `${APIURL}/comments/${data.id}`,
    data: data,
    headers: { Authorization: AUTHTOKEN }
  });
