import "./Helpers/registerComponents.js";
class App extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<js-layout />";
  }
}

customElements.define("js-app", App);
