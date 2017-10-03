class Layout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="Pages/Layout/Layout.css">
      I'm the layout.
    `;
  }
}

customElements.define("js-layout", Layout);
