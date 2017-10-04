// Components
import Counter from "../Components/Counter.js";

//Pages
import Layout from "../Pages/Layout/Layout.js";
import Home from "../Pages/Home/Home.js";
import NotFound from "../Pages/NotFound/NotFound.js";

const components = new Map([
  ["js-layout", Layout],
  ["js-home", Home],
  ["js-notfound", NotFound],
  ["js-counter", Counter]
]);

for (let [name, component] of components) {
  customElements.define(name, component);
}
