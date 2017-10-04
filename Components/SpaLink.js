import { SET_ROUTE } from "../Store/Modules/Routes.js";
import store from "../Store/index.js";

export default class SpaLink extends HTMLElement {
  constructor() {
    super();
    const slice = "page";
    const navigate = () => {
      store.dispatchWithSlice(
        {
          type: SET_ROUTE,
          payload: this.getAttribute("to")
        },
        slice
      );
    };

    this.addEventListener(
      "click",
      function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target != e.currentTarget) {
          history.pushState(
            { page: window.location.pathname },
            null,
            this.getAttribute("to")
          );
          navigate();
        }
        e.stopPropagation();
      },
      false
    );

    this.render = () => {
      this.innerHTML = `
        <a href="#">${this.innerText}</>
      `;
    };
  }

  connectedCallback() {
    this.render();
  }
}
