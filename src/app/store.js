import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";

/** Redux middleware example */
const myLogger = store => next => action => {
  //   console.log("ACTION taken : ", action);
  next(action);
};

const store = createStore(
  combineReducers({ math, user }),
  {},
  applyMiddleware(myLogger, createLogger(), thunk, promise)
);

export default store;
