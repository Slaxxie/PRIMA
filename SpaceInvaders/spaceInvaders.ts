namespace SpaceInvaders {
    import ƒ = FudgeCore;
    window.addEventListener("load", init);
    let gameNode: ƒ.Node = new ƒ.Node("Game");
    let viewportNode: ƒ.Node = new ƒ.Node("Viewport");
    let viewport: ƒ.Viewport = new ƒ.Viewport();
    let playerNode: ƒ.Node = new Player(playerX, playerY);
    let motherShipNode: ƒ.Node = new Mothership(playerX, playerY);
    
    /* let leftBorder: number = -13;
    let rightBorder: number = 13; */
    gameNode.appendChild(viewportNode);

    function init(_event: Event): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        viewportNode.addChild(playerNode);
        viewportNode.addChild(motherShipNode); 

        let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(30);
        cmpCamera.mtxPivot.translateY(10);
        cmpCamera.mtxPivot.rotateY(180);

        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        console.log(gameNode);
        for (let invaderCount: number = 1; invaderCount <= 59; invaderCount++) {
                spawnInvader();   
        }
        for (shieldNr; shieldNr <= 4; shieldNr++) {
                spawnShield();
        }
        
        viewport.draw();
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    }
    
    function hndKey(): void {
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D])) {
            playerNode.mtxLocal.translateX(+0.5);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A])) {
            playerNode.mtxLocal.translateX(-0.5);
        }
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE])) {
            let laser: ƒ.Node = new Projectile(playerX, playerY);
             
        }
    }

    function update(_event: Event): void {
        hndKey();
        viewport.draw();
    }

    function spawnShield():void {
        let shieldNode: ƒ.Node = new Shield(shieldX, shieldY, 4);
        viewportNode.addChild(shieldNode); 
        shieldX = shieldX + 6;
    } 

    function spawnInvader():void {
        let nodeCurrentSpaceInvader: ƒ.Node = new Invader(spawnX, spawnY);
        if (rowCount == 11) {
            spawnY = spawnY - 1.5;
            rowCount = 0;
            spawnX = -10;
        } else {
            rowCount += 1;
            spawnX = spawnX + 2;
            viewportNode.addChild(nodeCurrentSpaceInvader);
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