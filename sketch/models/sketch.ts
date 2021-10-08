class entity {
  //atributos
  x: number;
  y: number;
  step: number;
  image: p5.Image
  //parametros
  constructor(x: number, y:number,step: number,image: p5.Image){
    this.x = x;
    this.y = y;
    this.step = step;
    this.image = image;
  }
  //métodos
  draw() {
    image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
  }
}


let poro_img: p5.Image;
let tresh_img: p5.Image;
let poro: entity;
let tresh: entity;

function loadImg(path: string): p5.Image {
  return loadImage(
    path,
    () => {console.log("loading" + path + "deu certo")},
    () => {console.log("loading" + path + "deu errado")}
  )
}


function preload() {
  poro_img = loadImg('../sketch/chibi_poro.png')
   
  tresh_img = loadImg('../sketch/thresh_chibi.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    poro = new entity(2, 2, 100, poro_img);
    tresh = new entity(1, 1, 100, tresh_img);
  }

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    poro.x--;
  }else  if (keyCode === RIGHT_ARROW){
    poro.x++;
  }else  if (keyCode === UP_ARROW){
    poro.y--;
  }else  if (keyCode === DOWN_ARROW){
    poro.y++;
  }

  if (keyCode === "A".charCodeAt(0)){
    tresh.x--;
  }else  if (keyCode === "D".charCodeAt(0)){
    tresh.x++;
  }else  if (keyCode === "W".charCodeAt(0)){
    tresh.y--;
  }else  if (keyCode === "S".charCodeAt(0)){
    tresh.y++;
  } 
}  

  function draw() {
    background("black");
    poro.draw();
    tresh.draw();
 
    // circle(50,50,50);
  }