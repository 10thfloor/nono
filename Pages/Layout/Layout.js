import "../../Components/Counter.js";
import escapeHTML from "../../Helpers/escapeHTML.js";

class Layout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="Pages/Layout/Layout.css">
    `;
  }
}

customElements.define("js-layout", Layout);
