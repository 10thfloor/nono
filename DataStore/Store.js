const createStore = (reducer, initialState) => {
  const listeners = new Map();
  const stateObject = "APP_STATE";
  let state = localStorage.getItem(stateObject);

  if (!state) {
    state = reducer();
    localStorage.setItem(stateObject, JSON.stringify(state));
  }

  const getState = () => JSON.parse(localStorage.getItem(stateObject));

  const dispatchWithSlice = (action, slice) => {
    localStorage.setItem(
      stateObject,
      JSON.stringify(
        reducer(JSON.parse(localStorage.getItem(stateObject)), action)
      )
    );
    listeners.get(slice).forEach(listener => listener());
  };

  const subscribeToSlice = (listener, slice) => {
    listeners.set(slice, listeners[slice] || []);
    listeners.get(slice).push(listener);
    return () => {
      listeners.set(slice, listeners.get(slice).filter(l => l !== listener));
    };
  };

  return {
    getState,
    dispatchWithSlice,
    subscribeToSlice
  };
};

export default createStore;
