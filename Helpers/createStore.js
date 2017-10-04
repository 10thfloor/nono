import { windowOnLoad } from "./routerHelpers.js";

const createStore = (reducer, initialState) => {
  const listeners = new Map();
  const GLOBAL_LISTENERS = Symbol("Global store listeners");
  listeners.set(GLOBAL_LISTENERS, []);

  const stateObjectName = "APP_STATE";
  windowOnLoad(stateObjectName);

  let state = localStorage.getItem(stateObjectName);

  if (!state) {
    state = reducer();
    localStorage.setItem(stateObjectName, JSON.stringify(state));
  }

  const getState = () => JSON.parse(localStorage.getItem(stateObjectName));

  const dispatch = (action, storeListenerBucketName) => {
    localStorage.setItem(
      stateObjectName,
      JSON.stringify(
        reducer(JSON.parse(localStorage.getItem(stateObjectName)), action)
      )
    );
    if (storeListenerBucketName) {
      listeners.get(storeListenerBucketName).forEach(listener => listener());
    } else {
      listeners.get(GLOBAL_LISTENERS).forEach(listener => listener());
    }
  };

  const subscribe = (listener, storeListenerBucketName) => {
    if (storeListenerBucketName) {
      listeners.set(
        storeListenerBucketName,
        listeners[storeListenerBucketName] || []
      );
      listeners.get(storeListenerBucketName).push(listener);
      return () => {
        listeners.set(
          storeListenerBucketName,
          listeners.get(storeListenerBucketName).filter(l => l !== listener)
        );
      };
    } else {
      listeners.get(GLOBAL_LISTENERS).push(listener);
      return () => {
        listeners.set(
          GLOBAL_LISTENERS,
          listeners.get(GLOBAL_LISTENERS).filter(l => l !== listener)
        );
      };
    }
  };

  return new Proxy(
    {
      getState,
      dispatch,
      subscribe,
      listeners
    },
    {
      get: function(target, name, reciever) {
        return target[name];
      }
    }
  );
};

export default createStore;
