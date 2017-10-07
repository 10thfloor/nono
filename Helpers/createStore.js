import { windowOnLoad, routerListenerBucket } from "./routerHelpers.js";
import assert from "./assert.js";
import asyncResource from "./asyncResource.js";

const createStore = (reducer, initialState) => {
  const listeners = new Map();
  const GLOBAL_LISTENERS_MAP_KEY = Symbol("Global store listeners.");

  listeners.set(GLOBAL_LISTENERS_MAP_KEY, []);

  const LOCAL_STORAGE_APP_STATE = "nono-v1";
  windowOnLoad(LOCAL_STORAGE_APP_STATE);

  let state = localStorage.getItem(LOCAL_STORAGE_APP_STATE);

  if (!state) {
    state = reducer();
    localStorage.setItem(LOCAL_STORAGE_APP_STATE, JSON.stringify(state));
  }

  const getState = () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP_STATE));

  const dispatch = (action, LISTNERS_MAP_KEY) => {
    localStorage.setItem(
      LOCAL_STORAGE_APP_STATE,
      JSON.stringify(
        reducer(
          JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP_STATE)),
          action
        )
      )
    );
    if (LISTNERS_MAP_KEY) {
      listeners.get(LISTNERS_MAP_KEY).forEach(listener => listener());
    } else {
      listeners.get(GLOBAL_LISTENERS_MAP_KEY).forEach(listener => listener());
    }
  };

  const dispatchAsync = async (action, LISTNERS_MAP_KEY) => {
    assert(action.loading, "Must provide action.loading to do async!");

    dispatch({ type: action.loading }, LISTNERS_MAP_KEY);
    const payload = await asyncResource[action.type]();
    action.payload = payload;
    dispatch(action, LISTNERS_MAP_KEY);
  };

  const subscribe = (listener, LISTNERS_MAP_KEY) => {
    if (LISTNERS_MAP_KEY) {
      listeners.set(LISTNERS_MAP_KEY, listeners[LISTNERS_MAP_KEY] || []);
      listeners.get(LISTNERS_MAP_KEY).push(listener);
      return () => {
        listeners.set(
          LISTNERS_MAP_KEY,
          listeners.get(LISTNERS_MAP_KEY).filter(l => l !== listener)
        );
      };
    } else {
      listeners.get(GLOBAL_LISTENERS_MAP_KEY).push(listener);
      return () => {
        listeners.set(
          GLOBAL_LISTENERS_MAP_KEY,
          listeners.get(GLOBAL_LISTENERS_MAP_KEY).filter(l => l !== listener)
        );
      };
    }
  };

  return {
    getState,
    dispatch,
    dispatchAsync,
    subscribe,
    listeners
  };
};

export default createStore;
