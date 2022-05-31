const assert = require('assert');
const { Circle } = require('../src/circle.js');
// const { Point } = require('../src/point.js');

describe('Circle', () => {
  it('should equate two instances of same class with same properties', () => {
    const circle1 = new Circle(5);
    const circle2 = new Circle(5);
    assert.ok(circle1.equals(circle2));
  });

  it('should return false if instances are with different properties', () => {
    const circle1 = new Circle(5);
    const circle2 = new Circle(4);
    assert.ok(!circle1.equals(circle2));
  });

  it('should return false if instances are of different class', () => {
    const circle1 = new Circle(5);
    const circle2 = { radius: 5 };
    assert.ok(!circle1.equals(circle2));
  });

  it('should give area of the circle', () => {
    const circle1 = new Circle(7);
    assert.strictEqual(circle1.area(), 153.94);
  });
});
