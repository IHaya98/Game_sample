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
import { CharaCommon } from "./util.js";
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(snum, x, y, vx, vy) {
        return _super.call(this, snum, x, y, vx, vy) || this;
    }
    Enemy.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    Enemy.prototype.draw = function () {
        _super.prototype.draw.call(this);
    };
    return Enemy;
}(CharaCommon));
export { Enemy };
//# sourceMappingURL=enemy.js.map