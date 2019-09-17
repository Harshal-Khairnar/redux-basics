import { createStore } from "redux";

const initialState = {
  count: 1,
  lastActions: [{ count: 1, action: "INITIAL" }],
  user: "harshal"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        count: state.count + action.payload,
        lastActions: [
          ...state.lastActions,
          { count: action.payload, action: "ADD" }
        ]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        count: state.count - action.payload,
        lastActions: [
          ...state.lastActions,
          { count: action.payload, action: "SUBTRACT" }
        ]
      };
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("STORE updated !!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 50
});

store.dispatch({
  type: "SUBTRACT",
  payload: 90
});
