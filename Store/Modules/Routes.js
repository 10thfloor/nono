const INIT = Symbol();
export const SET_ROUTE = Symbol();

const routerReducer = function(
  state = {
    page: window.location.pathname || "/"
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
