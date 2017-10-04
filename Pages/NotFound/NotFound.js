export default class NotFound extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <div id="404">404!</div>
    `;
  }
}
