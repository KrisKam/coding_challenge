const assert = require('chai').assert;
const application = require('../app.js');

describe('Application', () => {

  describe('getAliveOrDead()', () => {

    it('getAliveOrDead should assign value of 0 or 1', () => {
      let result = application.getAliveOrDead(2, [[0, 1, 0], [1, 0, 0], [1, 1, 0]], 1, 0);
      assert.isNumber(result, "give a value of 0 or 1");
    })

  })

  describe('nextGen()', () => {

    it('nextGen should return an array', () => {
      let result = application.nextGen([
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 0],
      ]);
      assert.isArray(result, 'this is an array');
    })
  
    it('nextGen should return next generation array of arrays', () => {
      let result = application.nextGen([
        [0, 1, 0, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 1]
      ]);
      assert.deepEqual(result, [[0, 0, 0, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]);
    })
  
    it('nextGen should return next generation array of arrays', () => {
      let result = application.nextGen([
        [0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0]
      ]);
      assert.deepEqual(result, [[0, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0]]);
    })

  })

});
