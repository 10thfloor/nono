const createStore = (reducer, initialState) => {
  const listeners = new Map();
  const stateObject = "APP_STATE";
  let state = localStorage.getItem(stateObject);

  if (!state) {
    state = reducer();
    localStorage.setItem(stateObject, JSON.stringify(state));
  }

  const getState = () => JSON.parse(localStorage.getItem(stateObject));

  const dispatchToSlice = (action, slice) => {
    localStorage.setItem(
      stateObject,
      JSON.stringify(
        reducer(JSON.parse(localStorage.getItem(stateObject)), action)
      )
    );
    listeners[slice].forEach(listener => listener());
  };

  const subscribeToSlice = (listener, slice) => {
    listeners[slice] = listeners[slice] || [];
    listeners[slice].push(listener);
    return () => {
      listeners[slice] = listeners[slice].filter(l => l !== listener);
    };
  };

  return {
    getState,
    dispatchToSlice,
    subscribeToSlice
  };
};

export default createStore;
