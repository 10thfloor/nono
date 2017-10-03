import { windowOnLoad } from "./routerHelpers.js";

const createStore = (reducer, initialState) => {
  const listeners = new Map();
  listeners.set("global", []);

  const stateObjectName = "APP_STATE";
  windowOnLoad(stateObjectName);

  let state = localStorage.getItem(stateObjectName);

  if (!state) {
    state = reducer();
    localStorage.setItem(stateObjectName, JSON.stringify(state));
  }

  const getState = () => JSON.parse(localStorage.getItem(stateObjectName));

  const dispatchWithSlice = (action, slice) => {
    localStorage.setItem(
      stateObjectName,
      JSON.stringify(
        reducer(JSON.parse(localStorage.getItem(stateObjectName)), action)
      )
    );
    listeners.get(slice).forEach(listener => listener());
  };

  const subscribeToListOfNamedListeners = (listener, slice) => {
    listeners.set(slice, listeners[slice] || []);
    listeners.get(slice).push(listener);
    return () => {
      listeners.set(slice, listeners.get(slice).filter(l => l !== listener));
    };
  };

  const subscribe = listener => {
    listeners.get("global").push(listener);
    return () => {
      listeners.set(
        "global",
        listeners.get("global").filter(l => l !== listener)
      );
    };
  };

  return {
    getState,
    subscribe,
    dispatchWithSlice,
    subscribeToListOfNamedListeners
  };
};

export default createStore;
