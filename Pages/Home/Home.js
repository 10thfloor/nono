import escapeHTML from "../../Helpers/escapeHTML.js";
export default class Home extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="Pages/Home/Home.css">
      <div id="greetings">
        <h1>Greetings</h1>
        <p>
          This SPA site was created without libraries or frameworks, using the
          vanilla goodness of modern ES6 / CSS. It's built with Custom Elements, and was 
          inspired by React & Redux.
        </p>
        <js-counter data-state_name="counter_1"></js-counter>
      </div>
      
    `;
  }
}
