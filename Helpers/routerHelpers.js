function routeAttrs(attrs, acc = "") {
  if (!attrs) return "";
  const length = attrs.length;
  const atributes = attrs.shift();
  return length === 0
    ? `${acc};`
    : routeAttrs(
        attrs,
        `${acc} data-${atributes[0]}=${JSON.stringify(atributes[1])}`
      );
}

function routeData(data) {
  if (!data) return "";
  return JSON.stringify(data);
}

function windowOnLoad(stateObjectName) {
  const state = JSON.parse(localStorage.getItem(stateObjectName));
  if (state && state.routes.page !== window.location.pathname) {
    localStorage.setItem(
      stateObjectName,
      JSON.stringify({
        ...state,
        routes: { page: window.location.pathname }
      })
    );
  }
}

function pushState() {
  history.pushState(
    { page: window.location.pathname },
    null,
    window.location.pathname
  );
}

export { routeAttrs, routeData, windowOnLoad, pushState };
