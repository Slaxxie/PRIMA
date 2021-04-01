"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    window.addEventListener("load", init);
    let gameNode = new ƒ.Node("Game");
    let viewportNode = new ƒ.Node("Viewport");
    let viewport = new ƒ.Viewport();
    let playerNode = new SpaceInvaders.Player(SpaceInvaders.playerX, SpaceInvaders.playerY);
    let motherShipNode = new SpaceInvaders.Mothership(SpaceInvaders.playerX, SpaceInvaders.playerY);
    /* let leftBorder: number = -13;
    let rightBorder: number = 13; */
    gameNode.appendChild(viewportNode);
    function init(_event) {
        const canvas = document.querySelector("canvas");
        viewportNode.addChild(playerNode);
        viewportNode.addChild(motherShipNode);
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.translateY(10);
        cmpCamera.mtxPivot.rotateY(180);
        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        console.log(gameNode);
        for (let invaderCount = 1; invaderCount <= 59; invaderCount++) {
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
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D])) {
            playerNode.mtxLocal.translateX(+0.5);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A])) {
            playerNode.mtxLocal.translateX(-0.5);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE])) {
            let laser = new SpaceInvaders.Projectile(SpaceInvaders.playerX, SpaceInvaders.playerY);
        }
    }
    function update(_event) {
        hndKey();
        viewport.draw();
    }
    function spawnShield() {
        let shieldNode = new SpaceInvaders.Shield(SpaceInvaders.shieldX, SpaceInvaders.shieldY, 4);
        viewportNode.addChild(shieldNode);
        SpaceInvaders.shieldX = SpaceInvaders.shieldX + 6;
    }
    function spawnInvader() {
        let nodeCurrentSpaceInvader = new SpaceInvaders.Invader(SpaceInvaders.spawnX, SpaceInvaders.spawnY);
        if (SpaceInvaders.rowCount == 11) {
            SpaceInvaders.spawnY = SpaceInvaders.spawnY - 1.5;
            SpaceInvaders.rowCount = 0;
            SpaceInvaders.spawnX = -10;
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