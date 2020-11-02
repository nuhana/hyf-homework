class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return Math.PI * this.radius * 2;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference().toFixed(2));
console.log(circle.getArea().toFixed(2));
