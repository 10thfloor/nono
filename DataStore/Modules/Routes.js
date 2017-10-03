const INIT = Symbol.for("INIT");
const SET_ROUTE = Symbol.for("SET_PAGE");

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
