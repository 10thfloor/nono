import "../../Components/Counter.js";

class Layout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="Pages/Layout/Layout.css">
      <js-counter />
    `;
  }
}

customElements.define("js-layout", Layout);
