"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.noHit = true;
    class Projectile extends ƒ.Node {
        constructor(_x, _y) {
            super("Projectile");
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(_x);
            this.mtxLocal.translateY(_y);
            let projectileMesh = new ƒ.MeshQuad("Projectile_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(projectileMesh);
            this.addComponent(cmpMesh);
            let material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
            let cmpMaterial = new ƒ.ComponentMaterial(material);
            this.addComponent(cmpMaterial);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 10);
        }
    }
    SpaceInvaders.Projectile = Projectile;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Projectile.js.map