const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Index = require('./index');
const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');
const { assert } = require('console');
const { isValid } = require('ipaddr.js');

// test class?
describe('math tests', function () {
  beforeEach(() => console.log('I run b4 the test'));

  // @Test
  it('should equal 5', function (inverse_factorial) {
    expect(inverse_factorial(120)).to.equal(5);
  });

  it('should equal 99', function (doggo) {
    expect(doggo(2)).length.to.equal(99);
  });
});
