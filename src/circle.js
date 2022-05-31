class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  equals(otherCircle) {
    return otherCircle instanceof Circle &&
      this.radius === otherCircle.radius;
  }

  area() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return +area.toFixed(2);
  }
}

exports.Circle = Circle;
