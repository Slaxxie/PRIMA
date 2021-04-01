"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.rowCount = 0;
    SpaceInvaders.spawnX = -10;
    SpaceInvaders.spawnY = 17;
    class Invader extends ƒ.Node {
        constructor(_x, _y) {
            super("Invader" + SpaceInvaders.spawnX + "/" + SpaceInvaders.spawnY);
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(SpaceInvaders.spawnX);
            this.mtxLocal.translateY(SpaceInvaders.spawnY);
            let invaderMesh = new ƒ.MeshQuad("Invader_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(invaderMesh);
            this.addComponent(cmpMesh);
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Invader_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            newTxt.load("invader.png");
            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(8 / 11);
        }
    }
    SpaceInvaders.Invader = Invader;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Invader.js.map