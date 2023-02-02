function receivesAFunction(callBack) {
  return callBack();
}

function returnsANamedFunction() {
  const mathTime = function namedFunction() {
    return 2 + 3;
  }
  return mathTime
}

function returnsAnAnonymousFunction() {
  return function () { };
}
