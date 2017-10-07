import { SET_ROUTE } from "../Store/Modules/Routes.js";
import { navigate } from "../Helpers/routerHelpers.js";

export default class SpaLink extends HTMLElement {
  constructor() {
    super();

    this.addEventListener(
      "click",
      function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target != e.currentTarget) {
          navigate(this.getAttribute("to"));
        }
      },
      false
    );

    this.render = () => {
      this.innerHTML = `<a href="#">${this.innerText}</a>`;
    };
  }

  connectedCallback() {
    this.render();
  }
}
