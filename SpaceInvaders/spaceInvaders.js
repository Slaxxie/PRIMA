"use strict";
var spaceInvaders;
(function (spaceInvaders) {
    var ƒ = FudgeCore;
    window.addEventListener("load", init);
    let playerNode = new ƒ.Node("Player");
    let motherShip = new ƒ.Node("Enemy_Mothership");
    let shield1 = new ƒ.Node("Shield1");
    let shield2 = new ƒ.Node("Shield2");
    let shield3 = new ƒ.Node("Shield3");
    let shield4 = new ƒ.Node("Shield4");
    let allInvaders = [];
    let invaderCount = 0;
    let bossRow = 13;
    let enemyRow = 11;
    let shieldRow = 3;
    let rowStart = -7;
    let viewportNode = new ƒ.Node("Viewport");
    let viewport = new ƒ.Viewport();
    function init(_event) {
        const canvas = document.querySelector("canvas");
        playerNode.addComponent(new ƒ.ComponentTransform());
        let playerMesh = new ƒ.MeshQuad("Player_Mesh");
        playerNode.addComponent(new ƒ.ComponentMesh(playerMesh));
        let playerMaterial = new ƒ.Material("Playermaterial", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.41, 0.8, 0.41, 1)));
        let playerCmpMaterial = new ƒ.ComponentMaterial(playerMaterial);
        playerNode.addComponent(playerCmpMaterial);
        viewportNode.appendChild(playerNode);
        shield1.addComponent(new ƒ.ComponentTransform());
        let shield1Mesh = new ƒ.MeshQuad("Shield1_Mesh");
        shield1.addComponent(new ƒ.ComponentMesh(shield1Mesh));
        let shield1Material = new ƒ.Material("Shield1material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));
        let shield1CmpMaterial = new ƒ.ComponentMaterial(shield1Material);
        shield1.addComponent(shield1CmpMaterial);
        shield1.mtxLocal.translateY(shieldRow);
        shield1.mtxLocal.translateX(-6);
        shield1.mtxLocal.scaleX(2);
        shield1.mtxLocal.scaleY(0.5);
        viewportNode.appendChild(shield1);
        shield2.addComponent(new ƒ.ComponentTransform());
        let shield2Mesh = new ƒ.MeshQuad("Shield2_Mesh");
        shield2.addComponent(new ƒ.ComponentMesh(shield2Mesh));
        let shield2Material = new ƒ.Material("Shield2material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));
        let shield2CmpMaterial = new ƒ.ComponentMaterial(shield2Material);
        shield2.addComponent(shield2CmpMaterial);
        shield2.mtxLocal.translateY(shieldRow);
        shield2.mtxLocal.translateX(-2);
        shield2.mtxLocal.scaleX(2);
        shield2.mtxLocal.scaleY(0.5);
        viewportNode.appendChild(shield2);
        shield3.addComponent(new ƒ.ComponentTransform());
        let shield3Mesh = new ƒ.MeshQuad("Shield3_Mesh");
        shield3.addComponent(new ƒ.ComponentMesh(shield3Mesh));
        let shield3Material = new ƒ.Material("Shield3material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));
        let shield3CmpMaterial = new ƒ.ComponentMaterial(shield3Material);
        shield3.addComponent(shield3CmpMaterial);
        shield3.mtxLocal.translateY(shieldRow);
        shield3.mtxLocal.translateX(2);
        shield3.mtxLocal.scaleX(2);
        shield3.mtxLocal.scaleY(0.5);
        viewportNode.appendChild(shield3);
        shield4.addComponent(new ƒ.ComponentTransform());
        let shield4Mesh = new ƒ.MeshQuad("Shield4_Mesh");
        shield4.addComponent(new ƒ.ComponentMesh(shield4Mesh));
        let shield4Material = new ƒ.Material("Shield4material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.2, 0.4, 0.4, 1)));
        let shield4CmpMaterial = new ƒ.ComponentMaterial(shield4Material);
        shield4.addComponent(shield4CmpMaterial);
        shield4.mtxLocal.translateY(shieldRow);
        shield4.mtxLocal.translateX(6);
        shield4.mtxLocal.scaleX(2);
        shield4.mtxLocal.scaleY(0.5);
        viewportNode.appendChild(shield4);
        motherShip.addComponent(new ƒ.ComponentTransform());
        let motherShipMesh = new ƒ.MeshQuad("Mothership_Mesh");
        motherShip.addComponent(new ƒ.ComponentMesh(motherShipMesh));
        let motherShipMaterial = new ƒ.Material("Mothershipmaterial", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.8, 0.4, 0.8, 1)));
        let motherShipCmpMaterial = new ƒ.ComponentMaterial(motherShipMaterial);
        motherShip.addComponent(motherShipCmpMaterial);
        motherShip.mtxLocal.translateY(bossRow);
        motherShip.mtxLocal.scaleX(2);
        viewportNode.appendChild(motherShip);
        spawner();
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(20);
        cmpCamera.mtxPivot.translateY(6.5);
        cmpCamera.mtxPivot.rotateY(180);
        console.log(cmpCamera);
        viewport.initialize("Viewport", viewportNode, cmpCamera, canvas);
        viewport.draw();
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 60);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function update(_event) {
        if (enemyRow > 6) {
            spawner();
        }
        /*   let rotSpeed: number = 90;
           let timeSinceLastFrameInSeconds: number = ƒ.Loop.timeFrameReal / 1000;
           node.getComponent(ƒ.ComponentMesh).mtxPivot.rotateY(rotSpeed * timeSinceLastFrameInSeconds); */
        viewport.draw();
    }
    function spawner() {
        allInvaders[invaderCount] = new ƒ.Node("Invader " + invaderCount);
        allInvaders[invaderCount].addComponent(new ƒ.ComponentTransform());
        let invaderMesh = new ƒ.MeshQuad("Invader_Mesh " + invaderCount);
        allInvaders[invaderCount].addComponent(new ƒ.ComponentMesh(invaderMesh));
        let invaderMaterial = new ƒ.Material("Mothershipmaterial " + invaderCount, ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 1)));
        let invaderCmpMaterial = new ƒ.ComponentMaterial(invaderMaterial);
        allInvaders[invaderCount].addComponent(invaderCmpMaterial);
        allInvaders[invaderCount].mtxLocal.translateX(rowStart + invaderCount * 2);
        allInvaders[invaderCount].mtxLocal.translateY(enemyRow);
        if (invaderCount == 8) {
            enemyRow = enemyRow - 2;
            invaderCount = 0;
        }
        else {
            viewportNode.appendChild(allInvaders[invaderCount]);
            invaderCount += 1;
        }
    }
})(spaceInvaders || (spaceInvaders = {}));
//Alt+Shift+F = auto-format
/*
Koordinatensystem = Rechtshändig
x = links (-) - rechts (+)
y = unten (-) - oben (+)
z = vorne (-) - honten (+)
*/ 
//# sourceMappingURL=spaceInvaders.js.map