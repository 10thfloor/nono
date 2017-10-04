import escapeHTML from "../../Helpers/escapeHTML.js";
import store from "../../Datastore/index.js";
import router from "../../Router/index.js";

export default class Layout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const render = () => {
      shadow.innerHTML = `
        <link rel="stylesheet" href="Pages/Layout/Layout.css">
        ${router[store.getState().routes.page]()}
      `;
    };
    store.subscribeToListOfNamedListeners(render, "routerListeners");
    render();
  }
}
