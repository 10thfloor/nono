import { INCREMENT_COUNTER } from "../DataStore/Modules/Counter.js";
import store from "../Datastore/index.js";
import escapeHTML from "../Helpers/escapeHTML.js";

class Counter extends HTMLElement {
  constructor() {
    super();

    const slice = this.dataset.state_name;

    const increment = () => {
      store.dispatchWithSlice(
        {
          type: INCREMENT_COUNTER,
          payload: slice
        },
        slice
      );
    };

    const listen = () => {
      shadow.getElementById("increment").addEventListener("click", increment);
    };

    const render = () => {
      shadow.innerHTML = `
        <div id="counter">${escapeHTML(store.getState()[slice])}</div>
        <button id="increment">+</button>
      `;
      listen();
    };

    const shadow = this.attachShadow({ mode: "open" });
    store.subscribeToListOfNamedListeners(render, Symbol(slice));
    render();
  }
}

customElements.define("js-counter", Counter);
