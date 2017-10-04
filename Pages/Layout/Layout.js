import store from "../../Store/index.js";
import router from "../../Router/index.js";

import escapeHTML from "../../Helpers/escapeHTML.js";
import assert from "../../Helpers/assert.js";

import styles from "./styles.js";

export default class Layout extends HTMLElement {
  constructor() {
    super();
    const storeListenerBucket = this.dataset.state_name;

    assert(storeListenerBucket, "[data-state_name] attribute not specified!");

    this.render = () => {
      this.innerHTML = `
        <style>${styles}</style>
        ${router[store.getState().routes[storeListenerBucket]]()}
      `;
    };

    store.subscribe(this.render.bind(this), storeListenerBucket);
  }

  connectedCallback() {
    this.render();
  }
}
