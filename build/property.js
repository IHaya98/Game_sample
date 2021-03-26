import { Enemy } from "./enemy.js";
import { Jiki } from "./jiki.js";
export var DEBUG = true;
export var SCREEN_W = 400;
export var SCREEN_H = 300;
export var CANVAS_W = SCREEN_W * 2;
export var CANVAS_H = SCREEN_H * 2;
export var FIELD_W = SCREEN_W * 2;
export var FIELD_H = SCREEN_H * 2;
export var GAME_SPEED = 1000 / 60;
export var can = document.getElementById('can');
export var con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;
export var vcan = document.createElement('canvas');
export var vcon = vcan.getContext("2d");
vcan.width = FIELD_W;
vcan.height = FIELD_H;
export var spriteImage = new Image();
spriteImage.src = "ff.png";
export var STAR_MAX = 300;
export var star = [];
export var tama = [];
export var enemy = [
    new Enemy(1, 200 << 8, 200 << 8, 0, 0)
];
export var key = [];
export var jiki = new Jiki();
//# sourceMappingURL=property.js.map