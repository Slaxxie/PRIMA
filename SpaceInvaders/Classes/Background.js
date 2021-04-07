"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.backX = 0;
    SpaceInvaders.backY = 10;
    SpaceInvaders.backZ = -11;
    class Background extends ƒ.Node {
        constructor(_x, _y, _z) {
            super("Background");
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(SpaceInvaders.backX);
            this.mtxLocal.translateY(SpaceInvaders.backY);
            this.mtxLocal.translateZ(SpaceInvaders.backZ);
            let backgroundMesh = new ƒ.MeshQuad("Background_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(backgroundMesh);
            this.addComponent(cmpMesh);
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Background_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            newTxt.load("background.png");
            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(40);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(30);
        }
    }
    SpaceInvaders.Background = Background;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Background.js.map