import "../Pages/Home/Home.js";
import mapAttrs from "../Helpers/mapAttrs.js";

const routesMap = {
  "/": (data, props) =>
    `<js-home 
      data-route_state=${JSON.stringify(data)} 
      ${mapAttrs(props)}
    >
    </js-home>`
};

const routesProxy = new Proxy(routesMap, {
  get: function(target, name) {
    return name in target ? target[name] : () => "<js-notfound></js-notfound>";
  }
});

export default routesProxy;
