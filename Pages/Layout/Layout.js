import store from "../../Datastore/index.js";
import router from "../../Router/index.js";

import escapeHTML from "../../Helpers/escapeHTML.js";
import assert from "../../Helpers/assert.js";

export default class Layout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slice = this.dataset.state_name;

    assert(slice, "[data-state_name] attribute not specified!");

    const render = () => {
      shadow.innerHTML = `
        <link rel="stylesheet" href="Pages/Layout/Layout.css">
        ${router[store.getState().routes[slice]]()}
      `;
    };
    store.subscribeToListOfNamedListeners(render, slice);
    render();
  }
}
