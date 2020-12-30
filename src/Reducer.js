export default function Reducer(
  state = {
    isAuthenticated: false,
    username: null
  }, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload || "user"
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null
      };

    default:
      return state;
  }
};
