import { FETCH_TODOS } from "../Store/Modules/Todos.js";

const resources = {
  [FETCH_TODOS]: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ todo: 1 }, { todo: 2 }]);
      }, 2000);
    })
};

export default resources;
