const square = (number) => Math.pow(number, 2);

const round = (number, numOfDecimals) =>
  parseFloat(number.toFixed(numOfDecimals));

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  equals(otherCircle) {
    return otherCircle instanceof Circle &&
      this.center.equals(otherCircle.center) &&
      this.radius === otherCircle.radius;
  }

  area() {
    const area = Math.PI * square(this.radius);
    return round(area, 2);
  }
}

exports.Circle = Circle;
