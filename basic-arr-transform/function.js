var map = (arr, fn) => {
  let newArr = [];
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }

  return newArr;
};

var filter = (arr, fn) => {
  let newArr = [];

  arr.forEach((item, idx) => fn(item, idx) && newArr.push(item));

  return newArr;
};

var reduce = (arr, fn, init, acc) => {
  if (!arr.length) return init;

  arr.forEach((item) => (acc = fn((acc = acc || init || 0), item)));

  return acc;
};

export { map, filter, reduce };
