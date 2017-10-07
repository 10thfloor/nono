const map = (list, domFunc) => {
  return list.reduce((acc, item) => {
    acc += domFunc(item);
    return acc;
  }, "");
};

export { map };
