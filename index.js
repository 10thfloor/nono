import "./Helpers/registerComponents.js";

class App extends HTMLElement {
  constructor() {
    super();
    this.render = () => {
      this.innerHTML = `
        <layout-page data-state_name='page' />
      `;
    };
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("js-app", App);

if (!("serviceWorker" in navigator)) {
  console.log("Service worker not supported");
} else {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function() {
      console.log("Service Worker Registered");
    })
    .catch(function(error) {
      console.log("Service Worker Registration failed:", error);
    });
}
