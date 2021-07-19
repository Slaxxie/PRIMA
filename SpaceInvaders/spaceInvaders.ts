namespace SpaceInvaders {
    import ƒ = FudgeCore;
    window.addEventListener("load", init);

    gameNode.appendChild(viewportNode);

    function init(_event: Event): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        player = Player.getInstance();
        viewportNode.addChild(player);
        mothership.addChild(Mothership.getInstance());
        viewportNode.addChild(mothership);
        viewportNode.addChild(laserNode);
        viewportNode.addChild(backGroundNode);
        viewportNode.addChild(railNode);
        viewportNode.addChild(projectiles);
        viewportNode.addChild(invaders);

        invaders.addComponent(new ƒ.ComponentTransform);

        let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.translateY(10);
        cmpCamera.mtxPivot.rotateY(180);

        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        console.log(gameNode);

        for (let row: number = 0; row < rowCount; ++row) {
            for (let column: number = 0; column < columnCount; ++column) {
                let pos: ƒ.Vector2 = new ƒ.Vector2();
                pos.x = (column - (columnCount - 1) / 2) * 1.8;
                pos.y = (row * 15 + 130) / 11;
                invaders.addChild(new Invader(pos));
            }
        }
        for (shieldNr; shieldNr <= 4; shieldNr++) {
            let shieldNode: ƒ.Node = new Shield(shieldX, shieldY);
            viewportNode.addChild(shieldNode);
            shieldX = shieldX + 6;
        }
        viewport.draw();
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    }

    function hndKey(): void {
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D]) && Player.getInstance().mtxLocal.translation.x <= rightBorder) {
            player.moveRight();
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A]) && Player.getInstance().mtxLocal.translation.x >= leftBorder) {
            player.moveLeft();
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE]) && bulletVisible == false) {
            let projectile: Projectile = new Projectile(player.mtxLocal.translation.toVector2());
            projectiles.addChild(projectile);
            bulletVisible = true;
        }
    }

    function update(_event: Event): void {
        hndKey();
        setVelocity();
        checkProjectileCollision();
        if (!projectiles.getChild(0)) {
            bulletVisible = false;
        }
        for (let invader of invaders.getChildren() as Invader[]) {
            switch (moveDirection) {
                case true: {
                    invader.move(velocity);
                    if (invader.mtxLocal.translation.x > rightBorder) {
                        moveDirection = false;
                        collisionRight = true;
                    }
                    break;
                }
                default: {
                    invader.move(-velocity);
                    if (invader.mtxLocal.translation.x < leftBorder) {
                        moveDirection = true;
                        collisionLeft = true;
                    }
                    break;
                }
            }
        }
        if (collisionRight || collisionLeft) {
            invaders.mtxLocal.translateY(-0.5);
            collisionRight = false;
            collisionLeft = false;
        }
        viewport.draw();
    }

    function setVelocity(): void {
        if (invaders.getChildren().length >= 35) {
            velocity = 1;
        } else if (invaders.getChildren().length >= 25) {
            velocity = 2.5;
        } else if (invaders.getChildren().length >= 15) {
            velocity = 5;
        } else if (invaders.getChildren().length >= 10) {
            velocity = 8;
        } else if (invaders.getChildren().length >= 6) {
            velocity = 12;
        } else if (invaders.getChildren().length >= 4) {
            velocity = 15;
        } else if (invaders.getChildren().length >= 2) {
            velocity = 20;
        } else if (invaders.getChildren().length >= 1) {
            velocity = 30;
        }
    }

    function checkProjectileCollision(): void {
        for (let projectile of projectiles.getChildren() as Projectile[]) {
            for (let invader of invaders.getChildren() as Invader[]) {
                if (projectile.checkCollision(invader)) {
                    projectiles.removeChild(projectile);
                    invaders.removeChild(invader);
                }
            }
            if (projectile.checkCollision(Mothership.getInstance())) {
                projectiles.removeChild(projectile);
                mothership.removeChild(Mothership.getInstance());
            }
        }
        for (let projectile of projectiles.getChildren() as Projectile[]) {
            projectile.move();
            if (projectile.mtxLocal.translation.y > 20) {
                projectiles.removeChild(projectile);
                bulletVisible = false;
            }
        }
    }
}


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