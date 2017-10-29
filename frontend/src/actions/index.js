import * as api from "../utils/api";
import { schema, normalize } from "normalizr";

export const SET_USER_FULLNAME = "SET_USER_FULLNAME";
export const RESET_CATEGORIES = "RESET_CATEGORIES";
export const SET_POSTS = "SET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SET_SORTING = "SET_SORTING";
export const SET_POST_COMMENTS = "SET_POST_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export function setUserFullname({ fullname }) {
  return {
    type: SET_USER_FULLNAME,
    fullname
  };
}

export function setSorting(sorting) {
  return {
    type: SET_SORTING,
    sorting
  };
}

export function setCategories(categories) {
  return {
    type: RESET_CATEGORIES,
    categories
  };
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  };
}

export function setPostComments(comments) {
  return {
    type: SET_POST_COMMENTS,
    comments
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

// Here we create the normalizr schemas.  These define the entity names
// (entities.posts, for example) and how we get the ID for each entity.
//
// We could define a function for idAttribute which returns a key (such as
// combining two fields).
const category = new schema.Entity("categories", {}, { idAttribute: "path" });
const categorySchema = { categories: [category] };

export const fetchCategories = () => dispatch =>
  api.fetchCategories().then(response => {
    dispatch(
      setCategories(
        normalize(response.data, categorySchema).entities.categories
      )
    );
  });

const post = new schema.Entity("posts", {}, { idAttribute: "id" });
const postSchema = { posts: [post] };

export const fetchPosts = (categoryId = 0) => dispatch => {
  if (categoryId) {
    api.fetchCategory(categoryId).then(response => {
      dispatch(setPosts(normalize(response.data, postSchema).result));
    });
  } else {
    api.fetchPosts().then(response => {
      dispatch(
        setPosts(normalize({ posts: response.data }, postSchema).entities.posts)
      );
    });
  }
};

const comment = new schema.Entity("comments", {}, { idAttribute: "id" });
const commentSchema = { comments: [comment] };

export const fetchPostComments = postId => dispatch => {
  api.fetchPostComments(postId).then(response => {
    console.log(response);
    dispatch(
      setPostComments(
        normalize({ comments: response.data }, commentSchema).entities.comments
      )
    );
  });
};
