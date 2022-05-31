const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('should equate two instances of same Point', () => {
    const p1 = new Point(0, 0);
    const p2 = new Point(0, 0);
    assert.ok(p1.equals(p2));
  });

  it('should return false if instances are with different properties', () => {
    const p1 = new Point(5, 5);
    const p2 = new Point(5, 4);
    assert.ok(!p1.equals(p2));
  });

  it('should return false if instances are of different class', () => {
    const p1 = new Point(5, 4);
    const p2 = { x: 5, y: 4 };
    assert.ok(!p1.equals(p2));
  });
});
