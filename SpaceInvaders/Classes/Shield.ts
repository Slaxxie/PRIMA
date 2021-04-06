namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let shieldX: number = -10.33;
    export let shieldY: number = 4;
    export let shieldNr: number = 1;
    let allBlocks: ƒ.Node[] = [];
    let xPos: number[] = [/* Reihe 1 */ 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2 /* Reihe 2 */, 1 / 3, 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2, 2 + (1 / 3), /* Reihe 3 */ 0, 1 / 3, 2 / 3, 1, 1 + (1 / 3), 1 + (2 / 3), 2, 2 + (1 / 3), 2 + (2 / 3), /* Reihe 4 */ 0, 1 / 3, 2 / 3, 1, 1 + (2 / 3), 2, 2 + (1 / 3), 2 + (2 / 3) /* Reihe 5 */, 0, 1 / 3, 2 / 3, 2, 2 + (1 / 3), 2 + (2 / 3) /* Reihe 6 */, 0, 1 / 3, 2 / 3, 2, 2 + (1 / 3), 2 + (2 / 3)];
    let yPos: number[] = [/* Reihe 1 */ 0, 0, 0, 0, 0, /* Reihe 2 */ -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), -(1 / 3), /* Reihe 3 */ -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, -2 / 3, /* Reihe 4 */ -1, -1, -1, -1, -1, -1, -1, -1, /* Reihe 5 */ -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), -(1 + (1 / 3)), /* Reihe 6 */ -(1 + (2 / 3)), -(1 + (2 / 3)), - (1 + (2 / 3)), - (1 + (2 / 3)), - (1 + (2 / 3)), - (1 + (2 / 3))];

    export class Shield extends ƒ.Node {
        constructor(_x: number, _y: number) {
            super("Shield " + shieldNr);
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(shieldX);
            this.mtxLocal.translateY(shieldY);

            for (let blockCount: number = 0; blockCount <= 40; blockCount++) {
                allBlocks[blockCount] = new ƒ.Node("Block" + blockCount);
                allBlocks[blockCount].addComponent(new ƒ.ComponentTransform());

                let shieldMesh: ƒ.Mesh = new ƒ.MeshQuad("ShieldBlock");
                let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(shieldMesh);
                allBlocks[blockCount].addComponent(cmpMesh);

                let material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0, 0.25, 0.25, 1)));
                let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
                allBlocks[blockCount].addComponent(cmpMaterial);

                allBlocks[blockCount].getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 3);
                allBlocks[blockCount].getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(1 / 3);

                allBlocks[blockCount].mtxLocal.translateX(xPos[blockCount]);
                allBlocks[blockCount].mtxLocal.translateY(yPos[blockCount]);
                this.appendChild(allBlocks[blockCount]);
                console.log(allBlocks[blockCount]);
                console.log(blockCount);
            }
        }
    }
}
