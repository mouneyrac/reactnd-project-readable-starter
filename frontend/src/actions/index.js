import * as api from "../utils/api";
import { schema, normalize } from "normalizr";

export const SET_USER_FULLNAME = "SET_USER_FULLNAME";
export const RESET_CATEGORIES = "RESET_CATEGORIES";

export function setUserFullname({ fullname }) {
  return {
    type: SET_USER_FULLNAME,
    fullname
  };
}

export function setCategories(categories) {
  return {
    type: RESET_CATEGORIES,
    categories
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
