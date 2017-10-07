import { subscribe, getState } from "../../Store/index.js";

import {
  root,
  navigate,
  getFragment,
  routerListenerBucket
} from "../../Helpers/routerHelpers.js";
import router from "../../Router/index.js";

import escapeHTML from "../../Helpers/escapeHTML.js";
import assert from "../../Helpers/assert.js";

import styles from "./styles.js";

export default class Layout extends HTMLElement {
  constructor() {
    super();

    this.render = () => {
      const { page, data } = getState().routes;
      this.innerHTML = `
        <style>${styles}</style>
        ${router[page](data)}
      `;
    };

    subscribe(this.render.bind(this), routerListenerBucket);
  }

  connectedCallback() {
    navigate(`${root}${getFragment()}`);
    this.render();
  }
}
