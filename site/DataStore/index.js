import createStore from "./Store.js";
import appReducer from "./Reducer.js";

const store = createStore(appReducer);

export default store;
