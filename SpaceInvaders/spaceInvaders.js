"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    window.addEventListener("load", init);
    let gameNode = new ƒ.Node("Game");
    let viewportNode = new ƒ.Node("Viewport");
    let viewport = new ƒ.Viewport();
    SpaceInvaders.playerNode = new SpaceInvaders.Player(SpaceInvaders.playerX, SpaceInvaders.playerY);
    let motherShipNode = new SpaceInvaders.Mothership(SpaceInvaders.playerX, SpaceInvaders.playerY);
    let movementspeed = 15;
    let leftBorder = -13;
    let rightBorder = 13;
    let laserNode = new ƒ.Node("LaserNode");
    let bulletVisible = false;
    gameNode.appendChild(viewportNode);
    function init(_event) {
        const canvas = document.querySelector("canvas");
        viewportNode.addChild(SpaceInvaders.playerNode);
        viewportNode.addChild(motherShipNode);
        viewportNode.addChild(laserNode);
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.translateY(10);
        cmpCamera.mtxPivot.rotateY(180);
        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        console.log(gameNode);
        for (let invaderCount = 1; invaderCount <= 55; invaderCount++) {
            spawnInvader();
        }
        for (SpaceInvaders.shieldNr; SpaceInvaders.shieldNr <= 4; SpaceInvaders.shieldNr++) {
            spawnShield();
        }
        viewport.draw();
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function hndKey() {
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]) && SpaceInvaders.playerNode.mtxLocal.translation.x <= rightBorder) {
            SpaceInvaders.playerNode.mtxLocal.translateX((movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]) && SpaceInvaders.playerNode.mtxLocal.translation.x >= leftBorder) {
            SpaceInvaders.playerNode.mtxLocal.translateX((-movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE]) && bulletVisible == false) {
            let projectileNode = new SpaceInvaders.Projectile(SpaceInvaders.playerNode.mtxLocal.translation.x, SpaceInvaders.playerNode.mtxLocal.translation.y);
            laserNode.addChild(projectileNode);
            bulletVisible = true;
        }
    }
    function update(_event) {
        hndKey();
        if (bulletVisible && SpaceInvaders.noHit) {
            laserNode.getChild(0).mtxLocal.translateY(+1);
        }
        if (laserNode.getChild(0)) {
            if (laserNode.getChild(0).mtxLocal.translation.y > 21) {
                laserNode.removeChild(laserNode.getChild(0));
                bulletVisible = false;
            }
        }
        viewport.draw();
    }
    function spawnShield() {
        let shieldNode = new SpaceInvaders.Shield(SpaceInvaders.shieldX, SpaceInvaders.shieldY);
        viewportNode.addChild(shieldNode);
        SpaceInvaders.shieldX = SpaceInvaders.shieldX + 6;
    }
    function spawnInvader() {
        let nodeCurrentSpaceInvader = new SpaceInvaders.Invader();
        if (SpaceInvaders.rowCount == 10) {
            SpaceInvaders.spawnY = SpaceInvaders.spawnY - 1.5;
            SpaceInvaders.rowCount = 0;
            SpaceInvaders.spawnX = -10;
            viewportNode.addChild(nodeCurrentSpaceInvader);
        }
        else {
            SpaceInvaders.rowCount += 1;
            SpaceInvaders.spawnX = SpaceInvaders.spawnX + 2;
            viewportNode.addChild(nodeCurrentSpaceInvader);
        }
    }
})(SpaceInvaders || (SpaceInvaders = {}));
/*
Alt+Shift+F = auto-format
Koordinatensystem = Rechtshändig
x = links (-) - rechts (+)
y = unten (-) - oben (+)
z = vorne (-) - honten (+)
F2 = refactor
Strg + D = Mehrere Cursor
Strg + # = ein/auskommentieren
Alt + Shift + A = Block ein/auskommentieren
Alt + Shift + Pfeil oben/unten = Zeile kopieren
Alt + Pfeil oben/unten = Zeile verschieben
*/ 
//# sourceMappingURL=SpaceInvaders.js.map