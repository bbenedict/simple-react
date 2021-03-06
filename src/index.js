import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Reducer from "./Reducer";
import App from "./App";

const initialState = {
  isAuthenticated: false,
  username: null,
  fontSize: 18,
  theme: 'contrast'
};

const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
