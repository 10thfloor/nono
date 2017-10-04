import { FETCH_TODOS, LOADING_TODOS } from "../../Store/Modules/Todos.js";
import { dispatchAsync } from "../../Store/index.js";

import assert from "../../Helpers/assert.js";
import styles from "./styles.js";

export default class TodoPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    dispatchAsync({ type: FETCH_TODOS, loading: LOADING_TODOS });

    this.render = () => {
      shadow.innerHTML = `
        <style>${styles}</style>
        <nav>
          <spa-link to="/">Home</spa-link>
        </nav>
      `;
    };
  }

  connectedCallback() {
    document.title = "No Framework - Todo List!";
    this.render();
  }
}
