import counterReducer from "./Modules/Counter.js";
import routerReducer from "./Modules/Routes.js";
import todosReducer from "./Modules/Todos.js";

import createStore from "../Helpers/createStore.js";
import combineReducers from "../Helpers/combineReducers.js";

const store = createStore(
  combineReducers({
    counters: counterReducer,
    routes: routerReducer,
    todos: todosReducer
  })
);

// ?? Destructured imports don't work without this
const dispatch = store.dispatch;
const subscribe = store.subscribe;
const dispatchAsync = store.dispatchAsync;
const getState = store.getState;

export { dispatch, subscribe, dispatchAsync, getState };
