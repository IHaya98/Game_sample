import { CANVAS_H, CANVAS_W, con, DEBUG, enemy, FIELD_H, FIELD_W, GAME_SPEED, jiki, SCREEN_H, SCREEN_W, star, STAR_MAX, tama, vcan, vcon } from "./property.js";
import { Star } from "./util.js";
export var drawCount = 0;
export var fps = 0;
export var lastTime = Date.now();
export var camera_x = 0;
export var camera_y = 0;
var updateObj = function (obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].update();
        if (obj[i].kill)
            obj.splice(i, 1);
    }
};
var updateAll = function () {
    updateObj(star);
    updateObj(tama);
    updateObj(enemy);
    jiki.update();
};
var drawObj = function (obj) {
    for (var i = 0; i < obj.length; i++)
        obj[i].draw();
};
var drawAll = function () {
    if (vcon != null) {
        vcon.fillStyle = "black";
        vcon.fillRect(camera_x, camera_y, SCREEN_W, SCREEN_H);
    }
    drawObj(star);
    drawObj(tama);
    drawObj(enemy);
    jiki.draw();
    camera_x = (jiki.x >> 8) / FIELD_W * (FIELD_W - SCREEN_W);
    camera_y = (jiki.y >> 8) / FIELD_H * (FIELD_H - SCREEN_H);
    con === null || con === void 0 ? void 0 : con.drawImage(vcan, camera_x, camera_y, SCREEN_W, SCREEN_H, 0, 0, CANVAS_W, CANVAS_H);
};
var putInfo = function () {
    if (DEBUG && con != null) {
        drawCount++;
        if (lastTime + 1000 <= Date.now()) {
            fps = drawCount;
            drawCount = 0;
            lastTime = Date.now();
        }
        con.font = "20px 'Impact'";
        con.fillStyle = "white";
        con.fillText("FPS" + fps, 20, 20);
        con.fillText("Tama" + tama.length, 20, 40);
        con.fillText("Eenmy" + enemy.length, 20, 60);
    }
};
var gameInit = function () {
    for (var i = 0; i < STAR_MAX; i++)
        star[i] = new Star();
    setInterval(gameLoop, GAME_SPEED);
};
var gameLoop = function () {
    updateAll();
    drawAll();
    putInfo();
};
window.onload = function () {
    gameInit();
};
//# sourceMappingURL=main.js.map