export class Sprite {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

let sprite = [
    new Sprite(10, 7, 50, 55),
    new Sprite(70, 7, 40, 55),
    new Sprite(115, 7, 40, 55),
    new Sprite(160, 7, 48, 55),
    new Sprite(210, 7, 60, 55),
    new Sprite(270, 7, 70, 55),
    new Sprite(350, 7, 50, 55),
    new Sprite(410, 7, 40, 55),
    new Sprite(455, 7, 60, 55),
    new Sprite(530, 7, 40, 55),
];
export default sprite