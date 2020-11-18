// draw circle

const canvas = document.getElementById('myCanvas');
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
canvas.width = pageWidth;
canvas.height = pageHeight;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.stroke();
  }
}
// Test Circle Class
const c1 = new Circle(50, 50, 20, 0, 2, '#0000ff');
c1.draw();

// draw a circle every 100milisecond in random position with width and height of the screen
setInterval(() => {
  const randomX = randomizer(pageWidth);
  const randomY = randomizer(pageHeight);
  const randomR = randomizer(pageWidth / 5);
  const newCircle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2,
    getRandomColor()
  );
  newCircle.draw();
}, 100);

// mouse move  creating circle around mouse cursor
//const body = document.querySelector('body');
canvas.addEventListener('mousemove', e => {
  x = e.offsetX;
  y = e.offsetY;
  setInterval(() => {
    const newCircle = new Circle(x + 10, y + 10, x / 5, 0, 2, getRandomColor());
    newCircle.draw();
  }, 1000);
});

//  produce random number less than X

function randomizer(x) {
  return Math.floor(Math.random() * x);
}

//   produce random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
