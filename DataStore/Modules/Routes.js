const INIT = Symbol.for("INIT");
const SET_ROUTE = Symbol.for("SET_ROUTE");

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
      return { ...state, [action.payload]: action.payload };
    default:
      return state;
  }
};

export default routerReducer;
