const crc = document.getElementById("circle").getContext("2d");
crc.canvas.width = window.innerWidth;
crc.canvas.height = window.innerHeight;
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
    crc.beginPath();
    crc.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    crc.fillStyle = this.fillColor;
    crc.fill();
  }
}
//Every 1000ms create a new circle
setInterval(() => {
  const c1 = new Circle(
    Math.floor(Math.random() * crc.canvas.width),
    Math.floor(Math.random() * crc.canvas.height),
    Math.floor(Math.random() * 10),
    0,
    2 * Math.PI,
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  c1.draw();
}, 1000);

//the cnavas circles Follow the mouse
document.addEventListener("mousemove", (e) => {
  let x = e.x;
  let y = e.y;
  const c1 = new Circle(
    x,
    y,
    20,
    0,
    2 * Math.PI,
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  c1.draw();
});
