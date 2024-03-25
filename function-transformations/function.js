var compose = function (functions) {
  let finalVal = 0;
  function recurse(val) {
    if (!functions.length) {
      finalVal = val;
      return finalVal;
    }

    recurse(functions.pop()(val));
  }

  return function (x) {
    if (!functions.length) return x;
    recurse(x);
    return finalVal;
  };
};

export { compose };
