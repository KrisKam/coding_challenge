const assert = require('chai').assert;
const application = require('../app.js');

describe('Application', () => {

  // [[0, 0, 0], [1, 0, 0], [1, 1, 0]]

  it('should assign value of 0 or 1', () => {
    assert.isNumber(application.setOneOrZero(2, [[0, 1, 0], [1, 0, 0], [1, 1, 0]], 1, 0), "give a value of 0 or 1");
  })

  it('should return an array', () => {
    assert.isArray(application.nextGen([
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 0],
      ]), 'this is an array');
  })

  it('should return next generation array of arrays', () => {
    assert.deepEqual(application.nextGen([
        [0, 1, 0, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 1]
      ]), [[0, 0, 0, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]);
  })

  it('should return next generation array of arrays', () => {
    assert.deepEqual(application.nextGen([
        [0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0]
      ]), [[0, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0]]);
  })

});
