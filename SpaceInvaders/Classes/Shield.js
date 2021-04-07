"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.shieldX = -10.33;
    SpaceInvaders.shieldY = 4;
    SpaceInvaders.shieldNr = 1;
    let allBlocks = [];
    let xPos = [/* Reihe 1 */ 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2 /* Reihe 2 */, 1 / 3, 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2, 2 + (1 / 3), /* Reihe 3 */ 0, 1 / 3, 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2, 2 + (1 / 3), 2 + (2 / 3), /* Reihe 4 */ 0, 1 / 3, 2 / 3, 1, 1 + (2 / 3), 2, 2 + (1 / 3), 2 + (2 / 3) /* Reihe 5 */, 0, 1 / 3, 2 / 3, 2, 2 + (1 / 3), 2 + (2 / 3) /* Reihe 6 */, 0, 1 / 3, 2 / 3, 2, 2 + (1 / 3), 2 + (2 / 3)];
    let yPos = [/* Reihe 1 */ 0, 0, 0, 0, 0, /* Reihe 2 */ -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), /* Reihe 3 */ -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, /* Reihe 4 */ -1, -1, -1, -1, -1, -1, -1, -1, /* Reihe 5 */ -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), /* Reihe 6 */ -(1 + (2 / 3)), -(1 + (2 / 3)), -(1 + (2 / 3)), -(1 + (2 / 3)), -(1 + (2 / 3)), -(1 + (2 / 3))];
    class Shield extends ƒ.Node {
        constructor(_x, _y) {
            super("Shield " + SpaceInvaders.shieldNr);
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(SpaceInvaders.shieldX);
            this.mtxLocal.translateY(SpaceInvaders.shieldY);
            this.addComponent(new ƒ.ComponentMaterial());
            for (let blockCount = 1; blockCount <= 41; blockCount++) {
                allBlocks[blockCount] = new ƒ.Node("Block" + blockCount);
                allBlocks[blockCount].addComponent(new ƒ.ComponentTransform());
                let shieldMesh = new ƒ.MeshQuad("ShieldBlock");
                let cmpMesh = new ƒ.ComponentMesh(shieldMesh);
                allBlocks[blockCount].addComponent(cmpMesh);
                let texture = new ƒ.TextureImage("wall2.png");
                let mtr = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
                let cmpMaterial = new ƒ.ComponentMaterial(mtr);
                allBlocks[blockCount].addComponent(cmpMaterial);
                allBlocks[blockCount].getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 3);
                allBlocks[blockCount].getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(1 / 3);
                allBlocks[blockCount].mtxLocal.translateX(xPos[blockCount - 1]);
                allBlocks[blockCount].mtxLocal.translateY(yPos[blockCount - 1]);
                this.appendChild(allBlocks[blockCount]);
            }
        }
    }
    SpaceInvaders.Shield = Shield;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Shield.js.map