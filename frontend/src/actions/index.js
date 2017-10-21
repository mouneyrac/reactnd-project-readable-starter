export const SET_USER_FULLNAME = "SET_USER_FULLNAME";

export function setUserFullname({ fullname }) {
  return {
    type: SET_USER_FULLNAME,
    fullname
  };
}
