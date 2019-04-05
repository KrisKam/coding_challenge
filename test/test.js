const assert = require('chai').assert;
const application = require('../app.js');

describe('Application', () => {

  it('returns desired result', () => {
    assert.deepEqual(application(arguments), 'desired result')
  })

  it('returns a next generation array', () => {
    assert.isArray(application([[0,1,0], [1,0,1], [1,1,0]], 'is an array'))
  })
});
