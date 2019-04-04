function clist(...args) {
  return Array.from(args);
}

function add(...n) {
  return parseInt(n.reduce((acc, curr) => acc + curr));
}

function sub(...n) {
  return parseInt(n.reduce((acc, curr) => acc - curr));
}

function double(...n) {
  return n.map(n => {
    return n + n;
  }).reduce((acc, curr) => acc + curr);
}

function negate(...n) {
  return n.map(n => {
    return 0 - n;
  }).reduce((acc, curr) => acc + curr);
}

function compose(...fns) {
  return (...ns) => {
    return fns.reverse().reduce((acc, fn) => fn(acc), fns.shift()(...ns));
  }
}

function zip(...arrs) {
  return arrs[0].map((_, i) => arrs.map((arr) => arr[i]));
}

module.exports = {
  clist,
  add,
  sub,
  double,
  negate,
  compose,
  zip
};
