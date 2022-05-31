const assert = require('assert');
const { Circle } = require('../src/circle.js');
const { Point } = require('../src/point.js');

describe('Circle', () => {
  it('should equate two instances of same circle', () => {
    const circle1 = new Circle(new Point(2, 3), 5);
    const circle2 = new Circle(new Point(2, 3), 5);
    assert.ok(circle1.equals(circle2));
  });

  it('should return false if instances are with different properties', () => {
    const circle1 = new Circle(new Point(2, 3), 5);
    const circle2 = new Circle(new Point(0, 0), 4);
    assert.ok(!circle1.equals(circle2));
  });

  it('should return false if instances are of different class', () => {
    const circle1 = new Circle(new Point(10, -10), 5);
    const circle2 = { center: new Point(10, -10), radius: 5 };
    assert.ok(!circle1.equals(circle2));
  });

  it('should give area of the circle', () => {
    const circle1 = new Circle(new Point(0, 0), 7);
    assert.strictEqual(circle1.area(), 153.94);
  });
});
