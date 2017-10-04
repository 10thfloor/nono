import "./Helpers/registerComponents.js";
class App extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<js-layout data-state_name='page' />";
  }
}

customElements.define("js-app", App);
