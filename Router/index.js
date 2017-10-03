import "../Pages/Home/Home.js";
import "../Pages/NotFound/NotFound.js";

import { routeAttrs, routeData } from "../Helpers/routerHelpers.js";

const routesMap = {
  "/": (data, props) =>
    `<js-home 
      data-route_state=${routeData(data)} 
      ${routeAttrs(props)}
    >
    </js-home>`
};

const routesProxy = new Proxy(routesMap, {
  get: function(target, name) {
    return name in target ? target[name] : () => "<js-notfound></js-notfound>";
  }
});

export default routesProxy;
