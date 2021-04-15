"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.railX = 0;
    SpaceInvaders.railY = -0.4;
    SpaceInvaders.railZ = -1;
    class Rail extends ƒ.Node {
        constructor(_x, _y, _z) {
            super("Background");
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(SpaceInvaders.railX);
            this.mtxLocal.translateY(SpaceInvaders.railY);
            this.mtxLocal.translateZ(SpaceInvaders.railZ);
            let backgroundMesh = new ƒ.MeshQuad("Rail_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(backgroundMesh);
            this.addComponent(cmpMesh);
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Background_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            newTxt.load("rail.png");
            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(31);
            /*  this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(30); */
        }
    }
    SpaceInvaders.Rail = Rail;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Rail.js.map