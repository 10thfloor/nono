import { INCREMENT_COUNTER } from "../DataStore/Reducer.js";
import store from "../Datastore/index.js";

class Counter extends HTMLElement {
  constructor() {
    super();

    const slice = this.dataset.state_name;

    const increment = () => {
      store.dispatch(
        {
          type: INCREMENT_COUNTER,
          payload: slice
        },
        slice
      );
    };

    const update = () => {
      shadow.getElementById("increment").addEventListener("click", increment);
    };

    const render = () => {
      shadow.innerHTML = `
        <div id="counter">${store.getState()[slice]}</div>
        <button id="increment">+</button>
    `;
      update(shadow);
    };

    const shadow = this.attachShadow({ mode: "open" });
    render(shadow);

    store.subscribe(() => render(shadow), slice);
  }
}

customElements.define("js-counter", Counter);
