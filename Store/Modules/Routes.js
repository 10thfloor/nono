const INIT = Symbol();
export const SET_ROUTE = Symbol();

const routerReducer = function(
  state = {
    page: "/"
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default routerReducer;
