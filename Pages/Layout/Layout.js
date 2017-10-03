import "../../Components/Counter.js";
import escapeHTML from "../../Helpers/escapeHTML.js";
import store from "../../Datastore/index.js";
import router from "../../Router/index.js";

class Layout extends HTMLElement {
  constructor() {
    super();

    const render = () => {
      shadow.innerHTML = `
        <link rel="stylesheet" href="Pages/Layout/Layout.css">
        ${router[store.getState().routes.page]()}
      `;
    };

    const shadow = this.attachShadow({ mode: "open" });
    store.subscribeToListOfNamedListeners(render, "router");
    render();
  }
}

customElements.define("js-layout", Layout);
