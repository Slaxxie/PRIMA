namespace SpaceInvaders {
    import ƒ = FudgeCore;
    window.addEventListener("load", init);
    let gameNode: ƒ.Node = new ƒ.Node("Game");
    let playerNode: ƒ.Node = new ƒ.Node("Player");
    let motherShip: ƒ.Node = new ƒ.Node("Enemy_Mothership");

    export let quadMesh: ƒ.Mesh = new ƒ.MeshQuad("Quad");
    export let material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.41, 0.8, 0.41, 1)));

    let shield1: ƒ.Node = new ƒ.Node("Shield1");
    let shield2: ƒ.Node = new ƒ.Node("Shield2");
    let shield3: ƒ.Node = new ƒ.Node("Shield3");
    let shield4: ƒ.Node = new ƒ.Node("Shield4");

    let allInvaders: ƒ.Node = new ƒ.Node("InvaderArmy");
    let invaderUnit: ƒ.Node[] = [];
    let invaderCount: number = 0;

    let bossRow: number = 13;
    let enemyRow: number = 11;
    let shieldRow: number = 3;
    let rowStart: number = -7;


    let viewportNode: ƒ.Node = new ƒ.Node("Viewport");
    let viewport: ƒ.Viewport = new ƒ.Viewport();
    gameNode.appendChild(viewportNode);

    function init(_event: Event): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas");




        playerNode.addComponent(new ƒ.ComponentTransform());

        let playerMesh: ƒ.Mesh = new ƒ.MeshQuad("Player_Mesh");
        playerNode.addComponent(new ƒ.ComponentMesh(playerMesh));

        let playerMaterial: ƒ.Material = new ƒ.Material("Playermaterial", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.41, 0.8, 0.41, 1)));

        let playerCmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(playerMaterial);
        playerNode.addComponent(playerCmpMaterial);

        viewportNode.appendChild(playerNode);




        shield1.addComponent(new ƒ.ComponentTransform());

        let shield1Mesh: ƒ.Mesh = new ƒ.MeshQuad("Shield1_Mesh");
        shield1.addComponent(new ƒ.ComponentMesh(shield1Mesh));

        let shield1Material: ƒ.Material = new ƒ.Material("Shield1material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));

        let shield1CmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(shield1Material);
        shield1.addComponent(shield1CmpMaterial);
        shield1.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(shieldRow);
        shield1.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(-6);
        shield1.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(0.5);
        shield1.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);

        viewportNode.appendChild(shield1);



        shield2.addComponent(new ƒ.ComponentTransform());

        let shield2Mesh: ƒ.Mesh = new ƒ.MeshQuad("Shield2_Mesh");
        shield2.addComponent(new ƒ.ComponentMesh(shield2Mesh));

        let shield2Material: ƒ.Material = new ƒ.Material("Shield2material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));

        let shield2CmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(shield2Material);
        shield2.addComponent(shield2CmpMaterial);
        shield2.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(shieldRow);
        shield2.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(-2);
        shield2.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);
        shield2.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(0.5);

        viewportNode.appendChild(shield2);



        shield3.addComponent(new ƒ.ComponentTransform());

        let shield3Mesh: ƒ.Mesh = new ƒ.MeshQuad("Shield3_Mesh");
        shield3.addComponent(new ƒ.ComponentMesh(shield3Mesh));

        let shield3Material: ƒ.Material = new ƒ.Material("Shield3material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));

        let shield3CmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(shield3Material);
        shield3.addComponent(shield3CmpMaterial);
        shield3.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(shieldRow);
        shield3.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(2);
        shield3.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);
        shield3.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(0.5);

        viewportNode.appendChild(shield3);



        shield4.addComponent(new ƒ.ComponentTransform());

        let shield4Mesh: ƒ.Mesh = new ƒ.MeshQuad("Shield4_Mesh");
        shield4.addComponent(new ƒ.ComponentMesh(shield4Mesh));

        let shield4Material: ƒ.Material = new ƒ.Material("Shield4material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));

        let shield4CmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(shield4Material);
        shield4.addComponent(shield4CmpMaterial);
        shield4.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(shieldRow);
        shield4.getComponent(ƒ.ComponentMesh).mtxPivot.translateX(6);
        shield4.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);
        shield4.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(0.5);

        viewportNode.appendChild(shield4);




        motherShip.addComponent(new ƒ.ComponentTransform());

        let motherShipMesh: ƒ.Mesh = new ƒ.MeshQuad("Mothership_Mesh");
        motherShip.addComponent(new ƒ.ComponentMesh(motherShipMesh));

        let motherShipMaterial: ƒ.Material = new ƒ.Material("Mothershipmaterial", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.8, 0.4, 0.8, 1)));

        let motherShipCmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(motherShipMaterial);
        motherShip.addComponent(motherShipCmpMaterial);
        motherShip.getComponent(ƒ.ComponentMesh).mtxPivot.translateY(bossRow);
        motherShip.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);

        viewportNode.appendChild(motherShip);



        spawner();

        let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(20);
        cmpCamera.mtxPivot.translateY(6.5);
        cmpCamera.mtxPivot.rotateY(180);
        console.log(cmpCamera);




        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        viewport.draw();

        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    }
    console.log(allInvaders);
    function update(_event: Event): void {
        if (enemyRow > 6) {
            spawner();
        }
        viewport.draw();
    }

    function spawner(): void {
        invaderUnit[invaderCount] = new ƒ.Node("Invader " + invaderCount);
        invaderUnit[invaderCount].addComponent(new ƒ.ComponentTransform());

        export let invaderMesh: ƒ.Mesh = new ƒ.MeshQuad("Invader_Mesh " + invaderCount);
        invaderUnit[invaderCount].addComponent(new ƒ.ComponentMesh(invaderMesh));

        export let invaderMaterial: ƒ.Material = new ƒ.Material("Mothershipmaterial " + invaderCount, ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 1)));
        let invaderCmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(invaderMaterial);
        invaderUnit[invaderCount].addComponent(invaderCmpMaterial);

        allInvaders.appendChild(invaderUnit[invaderCount]);

        invaderUnit[invaderCount].mtxLocal.translateX(rowStart + invaderCount * 2);
        invaderUnit[invaderCount].mtxLocal.translateY(enemyRow);

        if (invaderCount == 8) {
            enemyRow = enemyRow - 2;
            invaderCount = 0;
        } else {
            viewportNode.appendChild(invaderUnit[invaderCount]);
            invaderCount += 1;
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