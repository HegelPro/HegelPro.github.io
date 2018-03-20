class World {
  constructor(dX, dY, canvas, map) {
    this.topBorder = dY;
    this.rightBorder = dX;
    this.bottomBorder = 0;
    this.leftBorder = 0;
    this.countEnemys = 0;

    this.enemys = [];
    this.hero = new Hero(0, 0, 30, 30, "top");

    this.ctx = canvas.getContext("2d");
    this.sprite = new Sprite(100, 100, "./img/834.jpg");

    this.setListener();

    this.map = map;
  };

  addEnemy(x, y, type) {
    // this.enemys.push(new Enemy(x, y, ));
  };

  setShot() {
    this.shot = new Shot(this, this.hero, speed);
  };

  deleteEnemy(id) {

  };

  printHero() {
    // console.log(hero);
    switch (this.hero.position) {
      case "top":
        this.ctx.drawImage(this.sprite.img, 0, 0, 400, 400, this.hero.x00, this.hero.y00, this.hero.dX, this.hero.dY);
        break;

      case "right":
        this.ctx.drawImage(this.sprite.img, 0, 0, 400, 400, this.hero.x00, this.hero.y00, this.hero.dX, this.hero.dY);
        break;

      case "bottom":
        this.ctx.drawImage(this.sprite.img, 0, 0, 400, 400, this.hero.x00, this.hero.y00, this.hero.dX, this.hero.dY);
        break;

      case "left":
        this.ctx.drawImage(this.sprite.img, 0, 0, 400, 400, this.hero.x00, this.hero.y00, this.hero.dX, this.hero.dY);
        break;

      default:

    };
  };


  setListener() {
    document.addEventListener("keypress", event => {
      console.log(event.charCode);
      switch (event.charCode) {
        case 115:
          this.hero.move("top", 1);
          break;

        case 119:
          this.hero.move("bottom", 1);
          break;

        case 100:
          this.hero.move("right", 1);
          break;

        case 97:
          this.hero.move("left", 1);
          break;

        case 32:
          this.hero.setShot();
          break;


        default:
      };
    });
  };
};


class Unit {
  constructor(x0, y0, dX, dY, position) {
    this.x00 = x0? x0: 0;
    this.y00 = y0? y0: 0;

    this.x01 = x0? x0: 0;
    this.y01 = y0 + dY;

    this.x10 = x0 + dX;
    this.y10 = y0? y0: 0;

    this.x11 = x0 + dX;
    this.y11 = y0 + dY;

    this.dX = dX;
    this.dY = dY;

    this.position = position? position: "top";
  };
  // this.switchIMG = (1) => {
  //
  // };


  move() {
    new Error("Error");
  };
};


class Hero extends Unit {
  constructor(x0, y0, dX, dY, position) {
    super(x0, y0, dX, dY, position);
  };


  move(direction, speed) {
    switch (direction) {
      case "top":
        if(this.y11 < wholeWorld.topBorder) {
          this.y00 += speed;  this.y01 += speed;  this.y10 += speed;  this.y11 += speed;
          this.position = "top";
        };
        break;

      case "right":
        if(this.x11 < wholeWorld.rightBorder) {
          this.x00 += speed;  this.x01 += speed;  this.x10 += speed;  this.x11 += speed;
          this.position = "right";
        };
        break;

      case "bottom":
        if(this.y00 > wholeWorld.bottomBorder) {
          this.y00 -= speed;  this.y01 -= speed;  this.y10 -= speed;  this.y11 -= speed;
          this.position = "bottom";
        };
        break;

      case "left":
        if(this.x00 > wholeWorld.leftBorder) {
          this.x00 -= speed;  this.x01 -= speed;  this.x10 -= speed;  this.x11 -= speed;
          this.position = "left";
        };
        break;

      default:
        new Error("Невравильное направление!");
    };
  };
};


class Enemy extends Unit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
};


class Sprite {
  constructor(x, y, lol) {
    this.dX = x;

    this.dY = y;

    this.img = document.createElement("img");

    this.img.src = lol;
  };
};


class Shot {
  constructor(world, unit, speed) {
    this.unit = unit;

    this.world = world;

    this.speed = speed;

    this.x00 = x0? x0: 0;
    this.y00 = y0? y0: 0;

    this.x01 = x0? x0: 0;
    this.y01 = y0 + dY;

    this.x10 = x0 + dX;
    this.y10 = y0? y0: 0;

    this.x11 = x0 + dX;
    this.y11 = y0 + dY;

    this.dX = dX;
    this.dY = dY;

    this.direction = direction? direction: "top";
  };
};


// var heroImg(32, 32);


var wholeWorld = new World(300, 300, canvas);
var imgaa = new Sprite(100, 100, "./img/1.png");
// var img = document.createElement("img");
// img.src = "file:///home/hegelpro/Documents/gameOne.js/tanks/img/1.png";


function engine() {
  requestAnimationFrame(() =>{
    wholeWorld.ctx.clearRect(0, 0, wholeWorld.rightBorder, wholeWorld.topBorder);
    wholeWorld.printHero();


    requestAnimationFrame(engine);
  });
};


engine();
