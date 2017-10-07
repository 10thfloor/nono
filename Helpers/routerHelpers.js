// Credit Bulgarian web designer and developer Krasimir Tsonev

import { dispatch } from "../Store/index.js";
import { SET_ROUTE } from "../Store/Modules/Routes.js";

import assert from "../Helpers/assert.js";

export const root = "/";
export const routerListenerBucket = "page";

export function getFragment() {
  let fragment = "";
  fragment = clearSlashes(decodeURI(location.pathname + location.search));
  fragment = fragment.replace(/\?(.*)$/, "");
  fragment = root != "/" ? fragment.replace(root, "") : fragment;

  return clearSlashes(fragment);
}

function clearSlashes(path) {
  return path
    .toString()
    .replace(/\/$/, "")
    .replace(/^\//, "");
}

export function navigate(page, data) {
  history.pushState({ page }, null, page);
  dispatch(
    {
      type: SET_ROUTE,
      payload: page || "/",
      data
    },
    routerListenerBucket
  );
}

export function routeAttrs(attrs, acc = "") {
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

export function routeData(data) {
  if (!data) return "";
  return JSON.stringify(data);
}

export function windowOnLoad(stateObjectName) {
  const state = JSON.parse(localStorage.getItem(stateObjectName));
  if (state && state.routes.page !== getFragment()) {
    localStorage.setItem(
      stateObjectName,
      JSON.stringify({
        ...state,
        routes: { page: getFragment() }
      })
    );
  }
}
