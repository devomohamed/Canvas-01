const canvas = document.getElementById('myCanvas');


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d");

window.addEventListener('resize',function (event){
  canvas.height = event.currentTarget.innerHeight
  canvas.width = event.currentTarget.innerWidth
})


function Circle(x,y,dx,dy,radius,color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius
  this.color = color;

  this.draw = function(){
  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
  // c.strokeStyle = "blue"
  // c.stroke()
  c.fillStyle = this.color
  c.fill()
  }

  this.update = function (){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw()
  }

}

var circleArray = [];

for(var i =1; i < 1000; i++){
  var x = Math.random() * (innerWidth - radius * 2);
  var y = Math.random() * (innerHeight - radius * 2);
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);
  var radius = 10;
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;

  var color = `rgba(${r},${g},${b},.6)`

  circleArray.push(new Circle(x,y,dx,dy,radius,color))
}

// console.log(circleArray);
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  for (let index = 0; index < circleArray.length; index++) {
    circleArray[index].update()
  }
  
}

animate()