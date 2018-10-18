import {calculate} from '../calc.js';

const assert = require('assert');

describe('Calculator()', function() {
  describe('Positive tests', function() {
    it('Plus', function() {
      let res = calculate("1+2");
      assert.equal(res, 3);
    });

    it('Minus', function() {
      let res = calculate("100-42");
      assert.equal(res, 58);
    });

    it('Decimal numbers sum', function() {
      let res = calculate("4.2+4.2");
      assert.equal(res, 8.4);
    });

    it('Division', function() {
      let res = calculate("6/2");
      assert.equal(res, 3);
    });

    it('Multiplication', function() {
      let res = calculate("6*2");
      assert.equal(res, 12);
    });

    it('Exponentiation', function() {
      let res = calculate("4**3");
      assert.equal(res, 64);
    });

    it('First num is negative', function() {
      let res = calculate("-1+5");
      assert.equal(res, 4);
    });
  });
  
  describe('Negative tests', function() {
    it('Division by zero', function() {
      let res = calculate("6/0");
      assert.equal(res, 'division by zero');
    });

    it('Not an expression', function() {
      let res = calculate("a_plus_b");
      assert.equal(res, 'undefined');
    });

    it('Empty string', function() {
      let res = calculate("");
      assert.equal(res, 'undefined');
    });

    it('One number', function() {
      let res = calculate("42");
      assert.equal(res, 'undefined');
    });

    it('Incorrect expression', function() {
      let res = calculate("42+-42");
      assert.equal(res, 'undefined');
    });
  });
});