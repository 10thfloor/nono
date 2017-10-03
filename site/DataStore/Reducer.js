const INIT = Symbol("INIT");
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

const appReducer = function(
  state = {
    counter: 0
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default appReducer;
