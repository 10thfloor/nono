import { INCREMENT_COUNTER } from "../DataStore/Modules/Counter.js";
import store from "../Datastore/index.js";
import escapeHTML from "../Helpers/escapeHTML.js";
import assert from "../Helpers/assert.js";

export default class Counter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slice = this.dataset.state_name;

    assert(slice, "[data-state_name] attribute not specified!");

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
        <div id="counter">
        <button id="increment">Increment -> </button> ${escapeHTML(
          store.getState().counters[slice]
        )}
        </div>
      `;
      listen();
    };

    store.subscribeToListOfNamedListeners(render, slice);
    render();
  }
}
