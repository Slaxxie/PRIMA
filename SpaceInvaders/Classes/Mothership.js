"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.shipX = 0;
    SpaceInvaders.shipY = 19;
    class Mothership extends ƒ.Node {
        constructor(_x, _y) {
            super("Mothership");
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(SpaceInvaders.shipX);
            this.mtxLocal.translateY(SpaceInvaders.shipY);
            let mothershipMesh = new ƒ.MeshQuad("Mothership_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(mothershipMesh);
            this.addComponent(cmpMesh);
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Mothership_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            newTxt.load("mothership.png");
            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(16 / 11);
        }
    }
    SpaceInvaders.Mothership = Mothership;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Mothership.js.map