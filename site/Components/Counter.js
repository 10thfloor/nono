import { INCREMENT_COUNTER } from "../DataStore/Reducer.js";
import store from "../Datastore/index.js";

class Counter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render(shadow);
    store.subscribe(() => this.render(shadow));
  }

  increment() {
    store.dispatch({
      type: INCREMENT_COUNTER
    });
  }

  update(shadow) {
    shadow
      .getElementById("increment")
      .addEventListener("click", this.increment);
  }

  render(shadow) {
    shadow.innerHTML = `
        <div id="counter">${store.getState().counter}</div>
        <button id="increment">+</button>
    `;
    this.update(shadow);
  }
}

customElements.define("js-counter", Counter);
