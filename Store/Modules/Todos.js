const INIT = Symbol();
export const FETCH_TODOS = Symbol();
export const LOADING_TODOS = Symbol();

const counterReducer = function(
  state = {
    todos: [],
    loading: false
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case LOADING_TODOS:
      return {
        ...state,
        loading: true
      };
    case FETCH_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
