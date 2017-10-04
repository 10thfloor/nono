import store from "../../Store/index.js";
import router from "../../Router/index.js";

import escapeHTML from "../../Helpers/escapeHTML.js";
import assert from "../../Helpers/assert.js";

import styles from "./styles.js";

export default class Layout extends HTMLElement {
  constructor() {
    super();
    const slice = this.dataset.state_name;

    assert(slice, "[data-state_name] attribute not specified!");

    this.render = () => {
      this.innerHTML = `
        <style>${styles}</style>
        ${router[store.getState().routes[slice]]()}
      `;
    };

    store.subscribeToListOfNamedListeners(this.render.bind(this), slice);
  }

  connectedCallback() {
    this.render();
  }
}
