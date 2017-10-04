import counterReducer from "./Modules/Counter.js";
import routerReducer from "./Modules/Routes.js";

import createStore from "../Helpers/createStore.js";
import combineReducers from "../Helpers/combineReducers.js";

const store = createStore(
  combineReducers({
    counters: counterReducer,
    routes: routerReducer
  })
);

export default store;
