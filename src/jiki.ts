import { FIELD_H, FIELD_W, key, tama } from "./property.js";
import {CharaCommon, drawSprite} from "./util.js"
export class Jiki {
    x: number;
    y: number;
    anime: number;
    speed: number;
    reload: number;
    relo2: number;

    constructor() {
        this.x = (FIELD_W / 2) << 8;
        this.y = (FIELD_H / 2) << 8;
        this.anime = 0;
        this.speed = 512;
        this.reload = 0;
        this.relo2 = 0;
    }

    update() {
        if (key[32] && this.reload == 0) {
            tama.push(new Tama(this.x + (4 << 8), this.y - (10 << 8), 0, -2000));
            tama.push(new Tama(this.x - (4 << 8), this.y - (10 << 8), 0, -2000));
            tama.push(new Tama(this.x + (8 << 8), this.y - (10 << 8), 80, -2000));
            tama.push(new Tama(this.x - (8 << 8), this.y - (10 << 8), -80, -2000));

            this.reload = 4;
            if (++this.relo2 == 4) {
                this.reload = 20;
                this.relo2 = 0;
            }
        }
        if (!key[32]) {
            this.reload = this.relo2 = 0;
        }
        if (this.reload > 0) this.reload--;

        if (key[37] && this.x > this.speed) {
            this.x -= this.speed;
            if (this.anime > -8) this.anime--;
        }
        else if (key[39] && this.x <= (FIELD_W << 8) - this.speed) {
            this.x += this.speed;
            if (this.anime < 8) this.anime++;
        }
        else {
            if (this.anime > 0) this.anime--;
            if (this.anime < 0) this.anime++;
        }
        if (key[38] && this.y > this.speed) this.y -= this.speed;
        if (key[40] && this.y <= (FIELD_H << 8) - this.speed) this.y += this.speed;

        if (this.x < 0) this.x = 0;
        if (this.x >= (FIELD_W << 8)) this.x = (FIELD_W << 8) - 1;
        if (this.y < 0) this.y = 0;
        if (this.y >= (FIELD_H << 8)) this.y = (FIELD_H << 8) - 1;
    }

    draw() {
        drawSprite(2 + (this.anime>>2), this.x, this.y);
        //drawSprite(2, this.x, this.y);
    }
}

export class Tama extends CharaCommon {
    constructor(x: number, y: number, vx: number, vy: number) {
        super(5, x, y, vx, vy)
    }

    update() {
        super.update()
    }

    draw() {
        super.draw();
    }
}
