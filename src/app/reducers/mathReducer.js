const mathReducer = (
  state = {
    count: 1,
    lastActions: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        count: state.count + action.payload,
        lastActions: [...state.lastActions, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        count: state.count - action.payload,
        lastActions: [...state.lastActions, action.payload]
      };
      break;
  }
  return state;
};

export default mathReducer;
