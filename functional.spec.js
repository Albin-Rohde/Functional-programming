const assert = require('assert');
const {
  clist,
  add,
  sub,
  double,
  negate,
  compose,
  zip
} = require('./functional');

describe('Testing math functions', () => {
  it('clist should take a number and list it', () => {
    assert.deepEqual(clist(8), [8]);
  });
  it('clist should take arbitary amount of numbers', () => {
    assert.deepEqual(clist(8, 8, 8, 3, 2, 1, 8), [8, 8, 8, 3, 2, 1, 8]);
  });
  it('add should take numbers and return sum of them added', () => {
    assert.equal(add(8, 2, 1), 11);
  });
  it('sub should take numbers and return sum of them subtracted', () => {
    assert.equal(sub(8, 2, 1), 5);
  });
  it('double should double input', () => {
    assert.equal(double(8), 16);
  });
  it('double should take arbitary amount of numbers', () => {
    assert.equal(double(8, 9, 1, 2, 8), 56);
  });
  it('negate should negate input', () => {
    assert.equal(negate(6), -6);
  });
  it('negate should take arbitary amount of numbers', () => {
    assert.equal(negate(6, 8, 9, 1, 7), -31);
  });
});
describe('testing more advanced functions', () => {
  it(`compose should take 2functions and return a 
    function that calls the input on those functions`, () => {
    assert.equal(compose(double, add)(8, 2), 20);
  });
  it('compose should be able to take and arbitary number of functions, and numbers', () => {
    assert.equal(compose(negate, double, add, add, sub)(6, 6, 6, 1, 1, 2, 2, 3), 30);
    assert.equal(compose(negate, double, add)(1, 2, 3), -12);
    assert.deepEqual(compose(clist, double, sub)(1, 2, 3), [-8]);
  });
  it('zip should \"zip\" numbers', () => {
    assert.deepEqual(zip([1, 2, 3], [4, 5, 6]), [
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
    assert.deepEqual(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]), [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });
  it('zipmap Should ')
});
