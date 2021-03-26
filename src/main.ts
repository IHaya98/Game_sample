import { CANVAS_H, CANVAS_W, con, DEBUG,  enemy, FIELD_H, FIELD_W, GAME_SPEED, jiki,  SCREEN_H, SCREEN_W, star, STAR_MAX, tama, vcan, vcon } from "./property.js";
import { Star } from "./util.js";
export let drawCount = 0;
export let fps = 0;
export let lastTime = Date.now();
export let camera_x = 0;
export let camera_y = 0;

const updateObj = (obj: any[]) => {
    for (let i = 0; i < obj.length; i++) {
        obj[i].update();
        if (obj[i].kill) obj.splice(i, 1);
    }
}
const updateAll = () =>{
    updateObj(star);
    updateObj(tama);
    updateObj(enemy);
    jiki.update();
}
const drawObj = (obj: any[]) => {
    for (let i = 0; i < obj.length; i++)obj[i].draw();
}
const drawAll = () =>{
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
    con?.drawImage(vcan, camera_x, camera_y, SCREEN_W, SCREEN_H, 0, 0, CANVAS_W, CANVAS_H);
}
const putInfo = () =>{
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
}
const gameInit = () => {
    for (let i = 0; i < STAR_MAX; i++)star[i] = new Star();
    setInterval(gameLoop, GAME_SPEED);
}
const gameLoop = () => {
    updateAll();
    drawAll();
    putInfo();
}

window.onload = function () {
    gameInit();
}
