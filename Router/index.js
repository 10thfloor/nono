import { dispatch } from "../Store/index.js";
import { SET_ROUTE } from "../Store/Modules/Routes.js";
import {
  routeAttrs,
  routeData,
  pushState,
  replaceState
} from "../Helpers/routerHelpers.js";

const storeListenerBucket = "page";

const routesMap = {
  "/": (data, props) =>
    `<home-page 
      data-route_state=${routeData(data)} 
      ${routeAttrs(props)}
    >
    </home-page>`,
  "/todo": (data, props) =>
    `<todo-page 
      data-route_state=${routeData(data)} 
      ${routeAttrs(props)}
    >
    </todo-page>`
};

const routesProxy = new Proxy(routesMap, {
  get: function(target, name) {
    return name in target
      ? target[name]
      : () => "<notfound-page></notfound-page>";
  }
});

window.addEventListener("popstate", function(e) {
  pushState();
  dispatch(
    {
      type: SET_ROUTE,
      payload: window.location.pathname
    },
    storeListenerBucket
  );
});

replaceState();

export default routesProxy;
