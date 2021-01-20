export default function Reducer(state, action) {
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

    case "INCREASE_FONT":
      const incFontSize = state.fontSize < 24 ? state.fontSize + 1 : state.fontSize;
      return {
        ...state,
        fontSize: incFontSize
      };

    case "DECREASE_FONT":
      const decFontSize = state.fontSize > 8 ? state.fontSize - 1 : state.fontSize;
      return {
        ...state,
        fontSize: decFontSize
      };

    default:
      return state;
  }
};
