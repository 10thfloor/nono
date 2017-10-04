import store from "../Store/index.js";
import { SET_ROUTE } from "../Store/Modules/Routes.js";
import { routeAttrs, routeData, pushState } from "../Helpers/routerHelpers.js";

const slice = "page";

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
  e.preventDefault();
  pushState();
  store.dispatchWithSlice(
    {
      type: SET_ROUTE,
      payload: e.state.page
    },
    slice
  );
});

pushState();

export default routesProxy;
