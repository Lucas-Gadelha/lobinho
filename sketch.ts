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
  draw(): void {
    image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
  }
}
class board {
  nl: number;
  nc: number;
  step: number;
  background: p5.Image;

  constructor(nl: number, nc: number, step: number, background: p5.Image){
    this.nl = nl;
    this.nc = nc;
    this.step = step;
    this.background = background;
  }
  draw(): void{
    image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
  }
}


let poro_img: p5.Image;
let tresh_img: p5.Image;
let Board_img: p5.Image;
let poro: entity;
let tresh: entity;
let Board: board;

function loadImg(path: string): p5.Image {
  return loadImage(
    path,
    () => {console.log("loading" + path + "deu certo")},
    () => {console.log("loading" + path + "deu errado")}
  )
}


function preload() {
  poro_img = loadImg('../sketch/chibi_poro.png');
   
  tresh_img = loadImg('../sketch/thresh_chibi1.png');

  Board_img = loadImg('../sketch/mapa_sr.png');
}

function setup() {
    let size = 100;
    poro = new entity(2, 2, size, poro_img);
    tresh = new entity(1, 1, size, tresh_img);
    Board = new board(7, 8, size, Board_img);
    createCanvas(Board.nc * size, Board.nl * size);
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
  Board.draw();
  poro.draw();
  tresh.draw();
 
}