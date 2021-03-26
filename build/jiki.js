var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { FIELD_H, FIELD_W, key, tama } from "./property.js";
import { CharaCommon, drawSprite } from "./util.js";
var Jiki = /** @class */ (function () {
    function Jiki() {
        this.x = (FIELD_W / 2) << 8;
        this.y = (FIELD_H / 2) << 8;
        this.anime = 0;
        this.speed = 512;
        this.reload = 0;
        this.relo2 = 0;
    }
    Jiki.prototype.update = function () {
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
        if (this.reload > 0)
            this.reload--;
        if (key[37] && this.x > this.speed) {
            this.x -= this.speed;
            if (this.anime > -8)
                this.anime--;
        }
        else if (key[39] && this.x <= (FIELD_W << 8) - this.speed) {
            this.x += this.speed;
            if (this.anime < 8)
                this.anime++;
        }
        else {
            if (this.anime > 0)
                this.anime--;
            if (this.anime < 0)
                this.anime++;
        }
        if (key[38] && this.y > this.speed)
            this.y -= this.speed;
        if (key[40] && this.y <= (FIELD_H << 8) - this.speed)
            this.y += this.speed;
        if (this.x < 0)
            this.x = 0;
        if (this.x >= (FIELD_W << 8))
            this.x = (FIELD_W << 8) - 1;
        if (this.y < 0)
            this.y = 0;
        if (this.y >= (FIELD_H << 8))
            this.y = (FIELD_H << 8) - 1;
    };
    Jiki.prototype.draw = function () {
        drawSprite(2 + (this.anime >> 2), this.x, this.y);
        //drawSprite(2, this.x, this.y);
    };
    return Jiki;
}());
export { Jiki };
var Tama = /** @class */ (function (_super) {
    __extends(Tama, _super);
    function Tama(x, y, vx, vy) {
        return _super.call(this, 5, x, y, vx, vy) || this;
    }
    Tama.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    Tama.prototype.draw = function () {
        _super.prototype.draw.call(this);
    };
    return Tama;
}(CharaCommon));
export { Tama };
//# sourceMappingURL=jiki.js.map