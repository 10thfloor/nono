import routesMap from "./Routes.js";
import { navigate, getFragment } from "../Helpers/routerHelpers.js";

const routesProxy = new Proxy(routesMap, {
  get: function(target, name) {
    return name in target
      ? target[name]
      : () => "<notfound-page></notfound-page>";
  }
});

window.addEventListener("popstate", function(e) {
  navigate(e.state.page);
});

export default routesProxy;
