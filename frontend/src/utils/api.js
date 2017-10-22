import axios from "axios";

export const fetchCategories = () =>
  axios({
    method: "get",
    url: "http://localhost:3001/categories",
    data: {},
    headers: { Authorization: "whatever-you-want" }
  });

export const addPost = data => {
  console.log("in add Post");
  console.log(data);
  axios({
    method: "post",
    url: `http://localhost:3001/posts`,
    data: data,
    headers: { Authorization: "whatever-you-want" }
  });
};

export const editPost = data =>
  axios({
    method: "put",
    url: `http://localhost:3001/posts/${data.id}`,
    data: data,
    headers: { Authorization: "whatever-you-want" }
  });
