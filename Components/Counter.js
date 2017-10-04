import { INCREMENT_COUNTER } from "../Store/Modules/Counter.js";
import store from "../Store/index.js";
import escapeHTML from "../Helpers/escapeHTML.js";
import assert from "../Helpers/assert.js";

export default class Counter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const counter_name = this.dataset.counter_name;
    const storeListenerBucket = counter_name;

    assert(counter_name, "[data-counter_name] attribute not specified!");

    const increment = () => {
      store.dispatch(
        {
          type: INCREMENT_COUNTER,
          payload: { counter: counter_name }
        },
        storeListenerBucket
      );
    };

    const listen = () => {
      shadow.getElementById("increment").addEventListener("click", increment);
    };

    this.render = () => {
      shadow.innerHTML = `
        <div id="counter">
        <button id="increment">Increment -> </button> ${escapeHTML(
          store.getState().counters[counter_name]
        )}
        </div>
      `;
      listen();
    };

    store.subscribe(this.render.bind(this), storeListenerBucket);
  }

  connectedCallBack() {
    this.render();
  }
}
