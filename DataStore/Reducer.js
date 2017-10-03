const INIT = Symbol.for("INIT");
export const INCREMENT_COUNTER = Symbol.for("INCREMENT_COUNTER");

const appReducer = function(
  state = {
    counter_1: 0,
    counter_2: 0
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      return state;
  }
};

export default appReducer;
