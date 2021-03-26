import { Enemy } from "./enemy.js";
import { Jiki, Tama } from "./jiki.js";
import {Star} from "./util.js"
export const DEBUG = true;

export const SCREEN_W = 400;
export const SCREEN_H = 300;

export const CANVAS_W = SCREEN_W * 2;
export const CANVAS_H = SCREEN_H * 2;

export const FIELD_W = SCREEN_W * 2;
export const FIELD_H = SCREEN_H * 2;

export const GAME_SPEED = 1000 / 60;

export let can = <HTMLCanvasElement>document.getElementById('can');
export let con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;

export let vcan = <HTMLCanvasElement>document.createElement('canvas');
export let vcon = vcan.getContext("2d");
vcan.width = FIELD_W;
vcan.height = FIELD_H;

export let spriteImage = new Image();
spriteImage.src = "ff.png";

export const STAR_MAX = 300;
export let star: Star[] = [];
export let tama: Tama[] = [];
export let enemy = [
    new Enemy(1,200<<8,200<<8,0,0)
];
export let key: boolean[] = []
export let jiki = new Jiki();