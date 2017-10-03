import "../Pages/Home/Home.js";

// TODO
function mapAttrs(props) {
  return "";
}

const routesMap = {
  "/": (data, props) =>
    `<js-home data-route_state=${data} ${mapAttrs(props)}></js-home>`
};

const routesProxy = new Proxy(routesMap, {
  get: function(target, name) {
    return name in target ? target[name] : () => "<js-notfound></js-notfound>";
  }
});

export default routesProxy;
