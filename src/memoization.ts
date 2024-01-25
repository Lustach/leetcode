function computed(func) {
  const cache = {};// можно юзать и get

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function expensiveOperation(x, y) {
  return x + y;
}
const computedFn = computed(expensiveOperation);

console.log(computedFn(2, 3));

console.log(computedFn(2, 3));

console.log(computedFn(5, 10));
