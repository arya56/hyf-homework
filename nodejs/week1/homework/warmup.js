class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return Math.PI * this.radius * 2;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(10);
const circle2 = new Circle(12);
const circle3 = new Circle(23);
const circle4 = new Circle(17);
logTheResult(circle);
logTheResult(circle2);
logTheResult(circle3);
logTheResult(circle4);
function logTheResult(circle) {
  console.log(
    `the Diameter of circle with 
    ${circle.radius} Radius is: ${circle.getDiameter()}`
  );
  console.log('Circumference is: ', circle.getCircumference());
  console.log('And the Area is: ', circle.getArea());
  console.log('--------------------------------------------');
}
