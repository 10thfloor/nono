import { routeAttrs, routeData } from "../Helpers/routerHelpers.js";

export default {
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

