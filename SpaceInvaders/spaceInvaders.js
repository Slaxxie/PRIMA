"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    window.addEventListener("load", init);
    SpaceInvaders.gameNode.appendChild(SpaceInvaders.viewportNode);
    function init(_event) {
        const canvas = document.querySelector("canvas");
        SpaceInvaders.player = SpaceInvaders.Player.getInstance();
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.player);
        SpaceInvaders.mothership.addChild(SpaceInvaders.Mothership.getInstance());
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.mothership);
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.laserNode);
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.backGroundNode);
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.railNode);
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.projectiles);
        SpaceInvaders.viewportNode.addChild(SpaceInvaders.invaders);
        SpaceInvaders.invaders.addComponent(new ƒ.ComponentTransform);
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.translateY(10);
        cmpCamera.mtxPivot.rotateY(180);
        SpaceInvaders.viewport.initialize("Viewport", SpaceInvaders.viewportNode, cmpCamera, canvas);
        console.log(SpaceInvaders.gameNode);
        for (let row = 0; row < SpaceInvaders.rowCount; ++row) {
            for (let column = 0; column < SpaceInvaders.columnCount; ++column) {
                let pos = new ƒ.Vector2();
                pos.x = (column - (SpaceInvaders.columnCount - 1) / 2) * 1.8;
                pos.y = (row * 15 + 130) / 11;
                SpaceInvaders.invaders.addChild(new SpaceInvaders.Invader(pos));
            }
        }
        for (SpaceInvaders.shieldNr; SpaceInvaders.shieldNr <= 4; SpaceInvaders.shieldNr++) {
            let shieldNode = new SpaceInvaders.Shield(SpaceInvaders.shieldX, SpaceInvaders.shieldY);
            SpaceInvaders.viewportNode.addChild(shieldNode);
            SpaceInvaders.shieldX = SpaceInvaders.shieldX + 6;
        }
        SpaceInvaders.viewport.draw();
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function hndKey() {
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]) && SpaceInvaders.Player.getInstance().mtxLocal.translation.x <= SpaceInvaders.rightBorder) {
            SpaceInvaders.player.moveRight();
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]) && SpaceInvaders.Player.getInstance().mtxLocal.translation.x >= SpaceInvaders.leftBorder) {
            SpaceInvaders.player.moveLeft();
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE]) && SpaceInvaders.bulletVisible == false) {
            let projectile = new SpaceInvaders.Projectile(SpaceInvaders.player.mtxLocal.translation.toVector2());
            SpaceInvaders.projectiles.addChild(projectile);
            SpaceInvaders.bulletVisible = true;
        }
    }
    function update(_event) {
        hndKey();
        setVelocity();
        checkProjectileCollision();
        if (!SpaceInvaders.projectiles.getChild(0)) {
            SpaceInvaders.bulletVisible = false;
        }
        for (let invader of SpaceInvaders.invaders.getChildren()) {
            switch (SpaceInvaders.moveDirection) {
                case true: {
                    invader.move(SpaceInvaders.velocity);
                    if (invader.mtxLocal.translation.x > SpaceInvaders.rightBorder) {
                        SpaceInvaders.moveDirection = false;
                        SpaceInvaders.collisionRight = true;
                    }
                    break;
                }
                default: {
                    invader.move(-SpaceInvaders.velocity);
                    if (invader.mtxLocal.translation.x < SpaceInvaders.leftBorder) {
                        SpaceInvaders.moveDirection = true;
                        SpaceInvaders.collisionLeft = true;
                    }
                    break;
                }
            }
        }
        if (SpaceInvaders.collisionRight || SpaceInvaders.collisionLeft) {
            SpaceInvaders.invaders.mtxLocal.translateY(-0.5);
            SpaceInvaders.collisionRight = false;
            SpaceInvaders.collisionLeft = false;
        }
        SpaceInvaders.viewport.draw();
    }
    function setVelocity() {
        if (SpaceInvaders.invaders.getChildren().length >= 35) {
            SpaceInvaders.velocity = 1;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 25) {
            SpaceInvaders.velocity = 2.5;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 15) {
            SpaceInvaders.velocity = 5;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 10) {
            SpaceInvaders.velocity = 8;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 6) {
            SpaceInvaders.velocity = 12;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 4) {
            SpaceInvaders.velocity = 15;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 2) {
            SpaceInvaders.velocity = 20;
        }
        else if (SpaceInvaders.invaders.getChildren().length >= 1) {
            SpaceInvaders.velocity = 30;
        }
    }
    function checkProjectileCollision() {
        for (let projectile of SpaceInvaders.projectiles.getChildren()) {
            for (let invader of SpaceInvaders.invaders.getChildren()) {
                if (projectile.checkCollision(invader)) {
                    SpaceInvaders.projectiles.removeChild(projectile);
                    SpaceInvaders.invaders.removeChild(invader);
                }
            }
            if (projectile.checkCollision(SpaceInvaders.Mothership.getInstance())) {
                SpaceInvaders.projectiles.removeChild(projectile);
                SpaceInvaders.mothership.removeChild(SpaceInvaders.Mothership.getInstance());
            }
        }
        for (let projectile of SpaceInvaders.projectiles.getChildren()) {
            projectile.move();
            if (projectile.mtxLocal.translation.y > 20) {
                SpaceInvaders.projectiles.removeChild(projectile);
                SpaceInvaders.bulletVisible = false;
            }
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