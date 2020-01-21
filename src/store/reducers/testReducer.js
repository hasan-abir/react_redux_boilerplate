const initState = {
  msg: "Hello"
};

const testReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_MESSAGE":
      return {
        ...state,
        msg: action.payload
      };
    default:
      return state;
  }
};

export default testReducer;
