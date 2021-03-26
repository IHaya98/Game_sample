import {CharaCommon} from "./util.js"
export class Enemy extends CharaCommon {
    constructor(snum:number,x: number, y: number, vx: number, vy: number){
        super(snum,x,y,vx,vy);
    }
    update(){
        super.update();
    }
    draw(){
        super.draw();
    }
}
