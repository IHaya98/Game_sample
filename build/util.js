import sprite from "./data.js";
import { camera_x, camera_y } from "./main.js";
import { FIELD_H, FIELD_W, key, SCREEN_H, SCREEN_W, spriteImage, vcon } from "./property.js";
var Star = /** @class */ (function () {
    function Star() {
        this.x = rand(0, FIELD_W) << 8;
        this.y = rand(0, FIELD_H) << 8;
        this.vx = 0;
        this.vy = rand(30, 200);
        this.sz = rand(1, 2);
    }
    Star.prototype.draw = function () {
        var x = this.x >> 8;
        var y = this.y >> 8;
        if (x < camera_x || x >= camera_x + SCREEN_W
            || y < camera_y || y >= camera_y + SCREEN_H)
            return;
        if (vcon == null)
            return;
        vcon.fillStyle = rand(0, 2) != 0 ? "66f" : "#8af";
        vcon.fillRect(x, y, this.sz, this.sz);
    };
    Star.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > FIELD_H << 8) {
            this.y = 0;
            this.x = rand(0, FIELD_W) << 8;
        }
    };
    return Star;
}());
export { Star };
var CharaCommon = /** @class */ (function () {
    function CharaCommon(snum, x, y, vx, vy) {
        this.sn = snum;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.kill = false;
    }
    CharaCommon.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > FIELD_W << 8
            || this.y < 0 || this.y > FIELD_H << 8)
            this.kill = true;
    };
    CharaCommon.prototype.draw = function () {
        drawSprite(this.sn, this.x, this.y);
    };
    return CharaCommon;
}());
export { CharaCommon };
export var drawSprite = function (snum, x, y) {
    var sx = sprite[snum].x;
    var sy = sprite[snum].y;
    var sw = sprite[snum].w;
    var sh = sprite[snum].h;
    var px = (x >> 8) - sw / 2;
    var py = (y >> 8) - sh / 2;
    if (px + sw < camera_x || px >= camera_x + SCREEN_W
        || py + sh < camera_y || py >= camera_y + SCREEN_H)
        return;
    vcon === null || vcon === void 0 ? void 0 : vcon.drawImage(spriteImage, sx, sy, sw, sh, px, py, sw, sh);
};
document.onkeydown = function (e) {
    key[e.keyCode] = true;
};
document.onkeyup = function (e) {
    key[e.keyCode] = false;
};
export var rand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=util.js.map