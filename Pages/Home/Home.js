import escapeHTML from "../../Helpers/escapeHTML.js";

class Home extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="Pages/Home/Home.css">
      Welcome Home.
    `;
  }
}

customElements.define("js-home", Home);
