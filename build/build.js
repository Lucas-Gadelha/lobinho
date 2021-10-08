var Et = (function () {
    function Et(corHead, corEyes, corBody) {
        this.corBody = corBody;
        this.corEyes = corEyes;
        this.corHead = corHead;
    }
    Et.prototype.draw = function () {
        ellipseMode("center");
        rectMode("center");
        fill(this.corBody);
        rect(240, 145, 20, 100);
        fill(this.corHead);
        ellipse(240, 115, 60, 60);
        fill(this.corEyes);
        ellipse(220, 115, 16, 32);
        ellipse(260, 115, 16, 32);
        line(230, 150, 220, 180);
        line(250, 150, 260, 180);
        line(230, 195, 220, 205);
        line(250, 195, 260, 205);
    };
    return Et;
}());
var entity = (function () {
    function entity(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    entity.prototype.draw = function () {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    };
    return entity;
}());
var poro_img;
var tresh_img;
var poro;
var tresh;
function loadImg(path) {
    return loadImage(path, function () { console.log("loading" + path + "deu certo"); }, function () { console.log("loading" + path + "deu errado"); });
}
function preload() {
    poro_img = loadImg('../sketch/chibi_poro.png');
    tresh_img = loadImg('../sketch/thresh_chibi.png');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    poro = new entity(2, 2, 100, poro_img);
    tresh = new entity(1, 1, 100, tresh_img);
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        poro.x--;
    }
    else if (keyCode === RIGHT_ARROW) {
        poro.x++;
    }
    else if (keyCode === UP_ARROW) {
        poro.y--;
    }
    else if (keyCode === DOWN_ARROW) {
        poro.y++;
    }
    if (keyCode === "A".charCodeAt(0)) {
        tresh.x--;
    }
    else if (keyCode === "D".charCodeAt(0)) {
        tresh.x++;
    }
    else if (keyCode === "W".charCodeAt(0)) {
        tresh.y--;
    }
    else if (keyCode === "S".charCodeAt(0)) {
        tresh.y++;
    }
}
function draw() {
    background("black");
    poro.draw();
    tresh.draw();
}
//# sourceMappingURL=build.js.map