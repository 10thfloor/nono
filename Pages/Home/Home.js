import escapeHTML from "../../Helpers/escapeHTML.js";
import styles from "./styles.js";
export default class Home extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render = () => {
      shadow.innerHTML = `
        <style>
          ${styles}      
        </style>
        <div id="greetings">
          <h1>Greetings</h1>
          <p>
            This SPA site was created without libraries or frameworks, using the
            vanilla goodness of modern ES6 / CSS. It's built with Custom Elements, and was 
            inspired by React & Redux.
          </p>
          <counter-component data-counter_name="counter_1"></counter-component>
          <p>Check out the <spa-link to="/todo">Todo List</spa-link></p>
        </div>`;
    };
  }

  connectedCallback() {
    document.title = "No Framework - Greetings!";
    this.render();
  }
}
