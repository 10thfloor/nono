const INIT = Symbol.for("INIT");
const SET_PAGE = Symbol.for("SET_PAGE");

const routerReducer = function(
  state = {
    page: "/"
  },
  action = {
    type: INIT
  }
) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default routerReducer;
