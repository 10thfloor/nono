export default class NotFound extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div id="404">404!</div>
    `;
  }
}
