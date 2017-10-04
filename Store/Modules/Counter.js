const INIT = Symbol();
export const INCREMENT_COUNTER = Symbol();

const counterReducer = function(
  state = {
    counter_1: 0
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        [action.payload.counter]: state[action.payload.counter] + 1
      };
    default:
      return state;
  }
};

export default counterReducer;
