// Components
import CounterComponent from "../Components/Counter.js";
import SpaLinkComponent from "../Components/SpaLink.js";
//Pages
import LayoutPage from "../Pages/Layout/Layout.js";
import HomePage from "../Pages/Home/Home.js";
import NotFoundPage from "../Pages/NotFound/NotFound.js";
import TodoPage from "../Pages/Todo/Todo.js";

const components = new Map([
  // Components
  ["counter-component", CounterComponent],
  ["spa-link", SpaLinkComponent],
  // Pages
  ["layout-page", LayoutPage],
  ["home-page", HomePage],
  ["notfound-page", NotFoundPage],
  ["todo-page", TodoPage]
]);

for (let [name, component] of components) {
  customElements.define(name, component);
}
