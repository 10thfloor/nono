import assert from "../../Helpers/assert.js";
import styles from "./styles.js";

export default class TodoPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    this.render = () => {
      shadow.innerHTML = `
        <style>${styles}</style>
        <spa-link to="/">Home</spa-link>
      `;
    };
  }

  connectedCallback() {
    document.title = "No Framework - Todo List!";
    this.render();
  }
}
